import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { NumberWithUnitsInput } from '@hautechai/webui.numberwithunitsinput';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback, useState } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }: { size: 'medium' | 'small' }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
    flex: 1;
    &[data-disabled='true'] {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};
    }
`;

const NumberInputContainer = styled.div`
    flex: 1;
    position: relative;
`;

const TrailingContainer = styled.div`
    position: absolute;
    right: ${themeVars.spacing.m};
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export type VisualEditorInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    value: string;
    units: string;
    availableUnits: string[];
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onChange?: (value: string) => void;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    onChangeUnits?: (units: string) => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
};

export const VisualEditorInput = (props: VisualEditorInputProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleKeyframeClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // Prevent triggering input focus
            props.onToggleKeyframe?.();
        },
        [props.onToggleKeyframe],
    );

    const handleKeyframeMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering input hover
    }, []);

    const handleKeyframeMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering input hover leave
    }, []);

    const { disabled, isPort, keyframesState } = props;
    const size = props.size ?? 'small'; // Default to small as mentioned in requirements
    const isInputDisabled = disabled || isPort;

    const renderTrailingControls = () => {
        // When isPort is true and hovering, show UnlinkIcon
        if (isPort && isHovered) {
            return (
                <TrailingContainer>
                    <ToggleIconButton
                        variant="flat"
                        size="xsmall"
                        icon={<UnlinkIcon size={16} />}
                        onClick={props.onTogglePort}
                        disabled={disabled}
                    />
                </TrailingContainer>
            );
        }

        // When hovering (and not port), show workflow icon
        if (isHovered && !isPort) {
            return (
                <TrailingContainer>
                    <ToggleIconButton
                        variant="flat"
                        size="xsmall"
                        icon={<WorkflowIcon size={16} />}
                        onClick={props.onTogglePort}
                        disabled={disabled}
                    />
                </TrailingContainer>
            );
        }

        // Default: no trailing controls (NumberWithUnitsInput handles units)
        return null;
    };

    return (
        <Container
            data-disabled={!!isInputDisabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NumberInputContainer>
                <NumberWithUnitsInput
                    className={props.className}
                    value={props.value}
                    units={props.units}
                    availableUnits={props.availableUnits}
                    onChange={props.onChange}
                    onChangeUnits={props.onChangeUnits}
                    placeholder={props.placeholder}
                    disabled={isInputDisabled}
                    size={size}
                    variation={props.variation ?? 'filled'}
                    leadingIcon={props.leadingIcon}
                    hasError={props.hasError}
                />
                {renderTrailingControls()}
            </NumberInputContainer>
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={keyframesState} onClick={handleKeyframeClick} disabled={disabled} />
            </KeyframeContainer>
        </Container>
    );
};
