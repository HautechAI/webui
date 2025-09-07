import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { Dropdown } from '@hautechai/webui.dropdown';
import { Typography } from '@hautechai/webui.typography';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback, useRef, useState } from 'react';

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

const InputBox = styled.div<{ variation: 'filled' | 'outlined'; size: 'medium' | 'small' }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: text;

    padding: ${({ size }) =>
        size === 'small'
            ? `${themeVars.spacing.s} ${themeVars.spacing.m}`
            : `${themeVars.spacing.m} ${themeVars.spacing.ml}`};
    flex: 1 0 0;

    border-radius: ${themeVars.cornerRadius.m};
    border-width: ${themeVars.stroke.thin};
    border-style: solid;
    border-color: ${themeVars.layout.strokes};

    background: ${({ variation }) => (variation === 'filled' ? themeVars.layout.surfaceLow : 'transparent')};
    &[data-has-error='true'] {
        border-color: ${themeVars.actions.error};
        outline-width: ${themeVars.stroke.thin};
        outline-style: solid;
        outline-color: ${themeVars.actions.error};
    }

    &:hover {
        border-color: ${themeVars.layout.onSurface.tertiary};
    }

    &:active {
        border-color: ${themeVars.layout.onSurface.tertiary};
        outline-width: ${themeVars.stroke.thin};
        outline-style: solid;
        outline-color: ${themeVars.layout.onSurface.tertiary};
    }

    &:focus-within {
        border-color: ${themeVars.actions.primary};
        outline-width: ${themeVars.stroke.thin};
        outline-style: solid;
        outline-color: ${themeVars.actions.primary};
    }

    &[data-disabled='true'] {
        cursor: not-allowed;
    }

    transition:
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        outline-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

const CustomInput = styled.input`
    box-sizing: border-box;
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    color: ${themeVars.layout.onSurface.primary};
    background: transparent;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${themeVars.layout.onSurface.secondary};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};

        &::placeholder {
            color: ${themeVars.layout.strokes};
        }
    }
`;

const InnerIconContainer = styled.div<{ size: 'medium' | 'small' }>`
    width: ${({ size }) => (size === 'small' ? '16px' : '20px')};
    height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TrailingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

const UnitsContainer = styled.div`
    min-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const getIcon = (icon: React.ReactNode, size: 'medium' | 'small') => (
    <InnerIconContainer size={size}>
        {React.Children.map(icon, (child) => {
            if (React.isValidElement<{ size: number }>(child)) {
                return React.cloneElement(child, {
                    size: size === 'small' ? 16 : 20,
                });
            }
            return child;
        })}
    </InnerIconContainer>
);

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
    testId?: string;
};

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    flex: 1;
`;

export const VisualEditorInput = (props: VisualEditorInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = useCallback(() => {
        if (!props.disabled && !props.isPort) {
            ref.current?.focus();
        }
    }, [props.disabled, props.isPort]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange?.(e.target.value);
        },
        [props.onChange],
    );

    const handleUnitsChange = useCallback(
        (newUnits: string) => {
            props.onChangeUnits?.(newUnits);
        },
        [props.onChangeUnits],
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
    const { disabled, isPort, leadingIcon, keyframesState } = props;
    const size = props.size ?? 'small'; // Default to small as mentioned in requirements
    const isInputDisabled = disabled || isPort;

    const unitsOptions = props.availableUnits.map((unit) => ({
        label: unit,
        value: unit,
    }));

    const renderTrailingControls = () => {
        // When isPort is true and hovering, show UnlinkIcon
        if (isPort && isHovered) {
            return (
                <UnitsContainer>
                    <ToggleIconButton
                        variant="flat"
                        size="xsmall"
                        icon={<UnlinkIcon size={16} />}
                        onClick={props.onTogglePort}
                        disabled={disabled}
                    />
                </UnitsContainer>
            );
        }

        // When hovering (and not port), show workflow icon and dropdown
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
                    <Dropdown
                        size="xsmall"
                        collapsed={true}
                        value={props.units}
                        options={unitsOptions}
                        onChange={handleUnitsChange}
                        disabled={isInputDisabled}
                    />
                </TrailingContainer>
            );
        }

        // Default: show units label
        return (
            <UnitsContainer>
                <Typography variant="CaptionRegular" color="layout.onSurface.tertiary">
                    {props.units}
                </Typography>
            </UnitsContainer>
        );
    };

    return (
        <Container
            onClick={handleClick}
            data-disabled={!!isInputDisabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-testid={props.testId}
        >
            <InputBox
                data-disabled={!!isInputDisabled}
                variation={props.variation ?? 'filled'}
                data-has-error={!!props.hasError}
                size={size}
            >
                {leadingIcon ? getIcon(leadingIcon, size) : null}
                <InputContainer>
                    <CustomInput
                        className={props.className}
                        type="text"
                        disabled={isInputDisabled}
                        ref={ref}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                {renderTrailingControls()}
            </InputBox>
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={keyframesState} onClick={handleKeyframeClick} disabled={disabled} />
            </KeyframeContainer>
        </Container>
    );
};
