import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import ColorPickerInput from '@hautechai/webui.colorpickerinput';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
    flex: 1;
`;

const ColorPickerWrapper = styled.div<{ isPort: boolean }>`
    position: relative;
    flex: 1;

    /* Create an overlay when isPort=true to prevent popover opening */
    &[data-is-port='true']::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        cursor: default;
        /* Allow clicks to pass through to hover controls by excluding their area */
        /* The hover controls are positioned on the right side of the input */
        right: 32px; /* Adjust based on hover controls width */
    }

    /* Make the input appear disabled when isPort=true */
    &[data-is-port='true'] input {
        cursor: default;
        opacity: 0.6;
    }
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export type VisualEditorColorPickerInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    value: string;
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onChange?: (color: string) => void;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
    testId?: string;
    alphaEnabled?: boolean;
};

export const VisualEditorColorPickerInput = (props: VisualEditorColorPickerInputProps) => {
    const size = props.size ?? 'small';

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

    const handleColorChange = useCallback(
        (color: string) => {
            // Prevent color changes when connected to a port
            if (!props.isPort) {
                props.onChange?.(color);
            }
        },
        [props.onChange, props.isPort],
    );

    // Create hover controls based on isPort state
    const renderHoverControls = () => {
        if (props.isPort) {
            // When isPort is true, show UnlinkIcon - keep it accessible so users can disconnect
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<UnlinkIcon size={16} />}
                    onClick={props.onTogglePort}
                />
            );
        }

        // When not isPort, show WorkflowIcon
        return (
            <ToggleIconButton
                variant="flat"
                size="xsmall"
                icon={<WorkflowIcon size={16} />}
                onClick={props.onTogglePort}
                disabled={props.disabled}
            />
        );
    };

    return (
        <Container size={size} data-testid={props.testId}>
            <ColorPickerWrapper isPort={props.isPort} data-is-port={props.isPort}>
                <ColorPickerInput
                    value={props.value}
                    onColorChange={handleColorChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    size={size}
                    variation={props.variation}
                    hoverControls={renderHoverControls()}
                    hasError={props.hasError}
                    className={props.className}
                    alphaEnabled={props.alphaEnabled}
                />
            </ColorPickerWrapper>
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={props.keyframesState} onClick={handleKeyframeClick} disabled={props.disabled} />
            </KeyframeContainer>
        </Container>
    );
};
