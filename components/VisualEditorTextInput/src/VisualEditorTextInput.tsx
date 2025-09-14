import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { TextInput } from '@hautechai/webui.textinput';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback, useState } from 'react';

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

export type VisualEditorTextInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    value: string;
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onChange?: (value: string) => void;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
    type?: 'text' | 'password' | 'email';
    testId?: string;
};

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const VisualEditorTextInput = (props: VisualEditorTextInputProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange?.(e.target.value);
        },
        [props.onChange],
    );

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

    const { disabled, isPort, leadingIcon, trailingIcon, keyframesState } = props;
    const size = props.size ?? 'small'; // Default to small as mentioned in requirements
    const inputType = props.type ?? 'text'; // Default to text
    const isInputDisabled = disabled || isPort;

    const renderHoverControls = () => {
        // When isPort is true and hovering, show UnlinkIcon
        if (isPort && isHovered) {
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<UnlinkIcon size={16} />}
                    onClick={props.onTogglePort}
                    disabled={disabled}
                />
            );
        }

        // When hovering (and not port), show workflow icon
        if (isHovered && !isPort) {
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<WorkflowIcon size={16} />}
                    onClick={props.onTogglePort}
                    disabled={disabled}
                />
            );
        }

        return null;
    };

    return (
        <Container
            data-disabled={!!isInputDisabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-testid={props.testId}
        >
            <TextInput
                className={props.className}
                placeholder={props.placeholder}
                disabled={isInputDisabled}
                leadingIcon={leadingIcon}
                trailingIcon={trailingIcon}
                hoverControls={renderHoverControls()}
                value={props.value}
                onChange={handleInputChange}
                hasError={props.hasError}
                type={inputType}
                variation={props.variation ?? 'filled'}
                size={size}
            />
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={keyframesState} onClick={handleKeyframeClick} disabled={disabled} />
            </KeyframeContainer>
        </Container>
    );
};
