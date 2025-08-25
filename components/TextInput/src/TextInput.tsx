import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { IconButton, IconButtonProps } from '@hautechai/webui.iconbutton';
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

export const InputContainer = styled.div<{ variation: 'filled' | 'outlined'; size: 'medium' | 'small' }>`
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

export const CustomInput = styled.input`
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

export type TextInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    trailingHoverContent?: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    step?: number;
    hasError?: boolean;
    type: 'text' | 'password' | 'email' | 'number';
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
} & Pick<Partial<IconButtonProps>, 'icon'> & {
        onIconButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    };

export const TextInput = (props: TextInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = useCallback(() => {
        ref.current?.focus();
    }, []);

    const { disabled, icon } = props;
    const size = props.size ?? 'medium';

    const renderTrailingContent = () => {
        if (props.trailingHoverContent && isHovered) {
            return props.trailingHoverContent;
        }
        return props.trailingIcon ? getIcon(props.trailingIcon, size) : null;
    };

    return (
        <Container
            onClick={handleClick}
            data-disabled={!!disabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <InputContainer
                data-disabled={!!disabled}
                variation={props.variation ?? 'filled'}
                data-has-error={!!props.hasError}
                size={size}
            >
                {props.leadingIcon ? getIcon(props.leadingIcon, size) : null}
                <CustomInput
                    className={props.className}
                    type={props.type}
                    step={props.step}
                    min={0}
                    disabled={disabled}
                    ref={ref}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {renderTrailingContent()}
            </InputContainer>
            {icon && (
                <IconButton
                    variant="flat"
                    size={size === 'small' ? 'xsmall' : 'small'}
                    icon={icon}
                    disabled={disabled}
                    onClick={props.onIconButtonClick}
                />
            )}
        </Container>
    );
};
