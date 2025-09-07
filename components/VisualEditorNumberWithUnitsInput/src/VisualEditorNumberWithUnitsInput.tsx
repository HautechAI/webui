import React, { useState } from 'react';
import { NumberWithUnitsInput } from '@hautechai/webui.numberwithunitsinput';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
    flex: 1;

    &[data-disabled='true'] {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};
    }
`;

const InputWrapper = styled.div`
    flex: 1;
    position: relative;
`;

const HoverControlsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    opacity: 0;
    transition: opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
    pointer-events: none;

    &[data-show='true'] {
        opacity: 1;
        pointer-events: auto;
    }
`;

// Local PortToggle component
const PortToggle = ({
    isPort,
    onTogglePort,
    disabled,
}: {
    isPort: boolean;
    onTogglePort?: () => void;
    disabled?: boolean;
}) => (
    <ToggleIconButton
        variant="flat"
        size="xsmall"
        icon={isPort ? <UnlinkIcon size={16} /> : <WorkflowIcon size={16} />}
        onClick={onTogglePort}
        disabled={disabled}
    />
);

// Local KeyframeToggle wrapper
const LocalKeyframeToggle = ({
    keyframesState,
    onToggleKeyframe,
    disabled,
}: {
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;
    disabled?: boolean;
}) => <KeyframeToggle state={keyframesState} onClick={onToggleKeyframe} disabled={disabled} />;

export type VisualEditorNumberWithUnitsInputProps = {
    // Visual editor specific props
    isPort: boolean;
    onTogglePort?: () => void;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;

    // NumberWithUnitsInput props
    value: string;
    onChange?: (value: string) => void;
    units: string;
    availableUnits: string[];
    onChangeUnits?: (units: string) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'medium' | 'small';
    variation?: 'filled' | 'outlined';
    leadingIcon?: React.ReactNode;
    hasError?: boolean;
    className?: string;
    testId?: string;
};

export const VisualEditorNumberWithUnitsInput = (props: VisualEditorNumberWithUnitsInputProps) => {
    const { isPort, onTogglePort, keyframesState, onToggleKeyframe, disabled, ...inputProps } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isComponentDisabled = disabled || isPort;
    const showHoverControls = (isHovered || isFocused) && !disabled;

    return (
        <Container
            data-disabled={!!isComponentDisabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
        >
            <InputWrapper>
                <NumberWithUnitsInput {...inputProps} disabled={isComponentDisabled} />
            </InputWrapper>
            <HoverControlsContainer data-show={showHoverControls}>
                <PortToggle isPort={isPort} onTogglePort={onTogglePort} disabled={disabled} />
                <LocalKeyframeToggle
                    keyframesState={keyframesState}
                    onToggleKeyframe={onToggleKeyframe}
                    disabled={isComponentDisabled}
                />
            </HoverControlsContainer>
        </Container>
    );
};
