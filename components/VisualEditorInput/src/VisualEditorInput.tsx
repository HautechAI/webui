import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { UnlinkIcon } from '@hautechai/webui.icon';
import { NumberWithUnitsInput } from '../../NumberWithUnitsInput/src';
import React, { useCallback } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
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

const PortToggleOverlay = styled.div<{ size: 'medium' | 'small' }>`
    position: absolute;
    right: ${({ size }) => (size === 'small' ? themeVars.spacing.m : themeVars.spacing.ml)};
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: none;

    &[data-is-port='true'] {
        display: none;
    }

    .visual-editor-input:hover &[data-is-port='true'] {
        display: block;
    }
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export type VisualEditorInputProps = {
    // Input component props (defaults to NumberWithUnitsInput)
    inputComponent?: React.ComponentType<unknown>;
    inputProps?: Record<string, unknown>;

    // Legacy props for backward compatibility
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    value?: string;
    units?: string;
    availableUnits?: string[];
    onChange?: (value: string) => void;
    onChangeUnits?: (units: string) => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';

    // Visual editor specific props
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
};

export const VisualEditorInput = (props: VisualEditorInputProps) => {
    const handleKeyframeClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            props.onToggleKeyframe?.();
        },
        [props.onToggleKeyframe],
    );

    const handleKeyframeMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    const handleKeyframeMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    const { disabled, isPort, keyframesState } = props;
    const size = props.size ?? 'small';

    // Create input component props based on whether using composition or legacy props
    const InputComponent = props.inputComponent || NumberWithUnitsInput;

    // Build props for the input component
    let inputComponentProps: Record<string, unknown>;

    if (props.inputProps) {
        // If using composition with explicit inputProps
        inputComponentProps = props.inputProps;
    } else {
        // Use legacy props to construct NumberWithUnitsInput props
        inputComponentProps = {
            className: props.className,
            placeholder: props.placeholder,
            disabled: disabled || isPort, // Disable input when connected as port
            leadingIcon: props.leadingIcon,
            value: props.value || '',
            units: props.units || 'px',
            availableUnits: props.availableUnits || ['px', '%', 'em', 'rem'],
            onChange: props.onChange,
            onChangeUnits: props.onChangeUnits,
            onToggleWorkflow: props.onTogglePort,
            hasError: props.hasError,
            variation: props.variation,
            size: size,
        };
    }

    return (
        <Container className="visual-editor-input" data-disabled={!!(disabled || isPort)} size={size}>
            <InputWrapper>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <InputComponent {...(inputComponentProps as any)} />
                {isPort && (
                    <PortToggleOverlay size={size} data-is-port="true">
                        <ToggleIconButton
                            variant="flat"
                            size="xsmall"
                            icon={<UnlinkIcon size={16} />}
                            onClick={props.onTogglePort}
                            disabled={disabled}
                        />
                    </PortToggleOverlay>
                )}
            </InputWrapper>
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={keyframesState} onClick={handleKeyframeClick} disabled={disabled} />
            </KeyframeContainer>
        </Container>
    );
};
