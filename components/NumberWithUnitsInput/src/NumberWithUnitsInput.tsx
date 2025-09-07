import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Dropdown } from '@hautechai/webui.dropdown';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useRef, useState } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
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

const UnitsContainer = styled.div`
    min-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputContainer = styled.div`
    flex: 1;
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

export type NumberWithUnitsInputProps = {
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

export const NumberWithUnitsInput = (props: NumberWithUnitsInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = useCallback(() => {
        if (!props.disabled) {
            ref.current?.focus();
        }
    }, [props.disabled]);

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

    const { disabled, leadingIcon } = props;
    const size = props.size ?? 'small';

    const unitsOptions = props.availableUnits.map((unit) => ({
        label: unit,
        value: unit,
    }));

    const renderTrailingControls = () => {
        // When hovering, show dropdown
        if (isHovered) {
            return (
                <UnitsContainer>
                    <Dropdown
                        size="xsmall"
                        collapsed={true}
                        value={props.units}
                        options={unitsOptions}
                        onChange={handleUnitsChange}
                        disabled={disabled}
                    />
                </UnitsContainer>
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
            data-disabled={!!disabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-testid={props.testId}
        >
            <InputBox
                data-disabled={!!disabled}
                variation={props.variation ?? 'filled'}
                data-has-error={!!props.hasError}
                size={size}
            >
                {leadingIcon ? getIcon(leadingIcon, size) : null}
                <InputContainer>
                    <CustomInput
                        className={props.className}
                        type="text"
                        disabled={disabled}
                        ref={ref}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                {renderTrailingControls()}
            </InputBox>
        </Container>
    );
};
