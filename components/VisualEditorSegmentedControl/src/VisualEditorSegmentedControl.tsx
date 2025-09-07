import React, { useState } from 'react';
import { SegmentedControl } from '@hautechai/webui.segmentedcontrol';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};

    &[data-disabled='true'] {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};
    }
`;

const ControlWrapper = styled.div`
    flex: 1;
`;

const TogglesCluster = styled.div`
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

export type VisualEditorSegmentedControlProps = {
    // Visual editor specific props
    isPort: boolean;
    onTogglePort?: () => void;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;

    // SegmentedControl props
    options: Array<{
        value: string;
        label?: string;
        leadingIcon?: React.ReactNode;
        trailingIcon?: React.ReactNode;
    }>;
    defaultValue?: string;
    value?: string;
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void;
    material?: boolean;
    whitespace?: keyof ThemeType['foundation']['spacing'];
    stretch?: boolean;
    size?: 'default' | 'small';
    disabled?: boolean;
    className?: string;
    testId?: string;
};

export const VisualEditorSegmentedControl = (props: VisualEditorSegmentedControlProps) => {
    const { isPort, onTogglePort, keyframesState, onToggleKeyframe, disabled, ...segmentedControlProps } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isComponentDisabled = disabled || isPort;
    const showToggles = (isHovered || isFocused) && !disabled;

    return (
        <Container
            data-disabled={!!isComponentDisabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
        >
            <ControlWrapper>
                <SegmentedControl
                    {...segmentedControlProps}
                    // Note: We don't pass disabled to SegmentedControl as it doesn't support it
                    // Instead, we handle disabled state at the wrapper level
                />
            </ControlWrapper>
            <TogglesCluster data-show={showToggles}>
                <PortToggle isPort={isPort} onTogglePort={onTogglePort} disabled={disabled} />
                <LocalKeyframeToggle
                    keyframesState={keyframesState}
                    onToggleKeyframe={onToggleKeyframe}
                    disabled={isComponentDisabled}
                />
            </TogglesCluster>
        </Container>
    );
};
