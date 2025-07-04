import { css, styled } from '@hautechai/webui.themeprovider';
import { IconButton, IconButtonProps } from '@hautechai/webui.iconbutton';
import React, { useCallback, useRef } from 'react';

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    align-items: center;
    flex: 1;

    ${({ theme, disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            color: ${theme.palette.layout.strokes};
        `}
`;

export const InputContainer = styled.div<{ disabled?: boolean; hasError?: boolean; variation: 'filled' | 'outlined' }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: text;

    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;
    flex: 1 0 0;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.layout.strokes};

    background: ${({ theme, variation }) => (variation === 'filled' ? theme.palette.layout.surfaceLow : 'transparent')};

    ${({ hasError, theme }) =>
        hasError &&
        css`
            border-color: ${theme.palette.actions.error};
            outline-width: ${theme.foundation.stroke.thin}px;
            outline-style: solid;
            outline-color: ${theme.palette.actions.error};
        `}

    ${({ disabled, theme }) =>
        disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  &:hover {
                      border-color: ${theme.palette.layout.onSurface.tertiary};
                  }

                  &:active {
                      border-color: ${theme.palette.layout.onSurface.tertiary};
                      outline-width: ${theme.foundation.stroke.thin}px;
                      outline-style: solid;
                      outline-color: ${theme.palette.layout.onSurface.tertiary};
                  }

                  &:focus-within {
                      border-color: ${theme.palette.actions.primary};
                      outline-width: ${theme.foundation.stroke.thin}px;
                      outline-style: solid;
                      outline-color: ${theme.palette.actions.primary};
                  }
              `}

    transition: border-color ${({ theme }) => theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut}, outline-color ${({ theme }) =>
        theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut};
`;

export const CustomInput = styled.input`
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    background: transparent;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.palette.layout.onSurface.secondary};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.palette.layout.strokes};

        &::placeholder {
            color: ${({ theme }) => theme.palette.layout.strokes};
        }
    }
`;

const InnerIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const getIcon = (icon: React.ReactNode) => (
    <InnerIconContainer>
        {React.Children.map(icon, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    size: 20,
                } as any);
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
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    step?: number;
    hasError?: boolean;
    type: 'text' | 'password' | 'email' | 'number';
    variation?: 'filled' | 'outlined';
} & Pick<Partial<IconButtonProps>, 'icon'> & {
        onIconButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    };

export const TextInput = (props: TextInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const handleClick = useCallback(() => {
        ref.current?.focus();
    }, []);

    const { disabled, icon } = props;

    return (
        <Container onClick={handleClick} disabled={disabled}>
            <InputContainer disabled={disabled} variation={props.variation ?? 'filled'} hasError={props.hasError}>
                {props.leadingIcon ? getIcon(props.leadingIcon) : null}
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
                {props.trailingIcon ? getIcon(props.trailingIcon) : null}
            </InputContainer>
            {icon && (
                <IconButton
                    variant="flat"
                    size="small"
                    icon={
                        React.isValidElement(icon)
                            ? React.cloneElement(icon, {
                                  size: 20,
                              } as any)
                            : icon
                    }
                    disabled={disabled}
                    onClick={props.onIconButtonClick}
                />
            )}
        </Container>
    );
};
