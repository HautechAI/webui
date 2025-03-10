import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useRef } from 'react';

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;

    ${({ theme, disabled }) =>
        disabled &&
        css`
            color: ${theme.palette.layout.strokes};
        `}
`;

export const InputContainer = styled.div<{ disabled?: boolean; hasError?: boolean }>`
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

    background: ${({ theme }) => theme.palette.layout.surfaceLow};

    ${({ hasError, theme }) =>
        hasError &&
        css`
            border-color: ${theme.palette.actions.error};
            outline-width: ${theme.foundation.stroke.thin}px;
            outline-style: solid;
            outline-color: ${theme.palette.actions.error};
        `}

    ${({ disabled, theme }) =>
        !disabled &&
        css`
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
`;

export const CustomInput = styled.input`
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    background: transparent;

    border: none;
    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.palette.layout.onSurface.secondary};
    }
`;

const InnerIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export type TextFieldProps = {
    title?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    error?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'password' | 'email';
    step?: number;
};

export const TextField = (props: TextFieldProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const handleClick = useCallback(() => {
        ref.current?.focus();
    }, []);

    const { disabled } = props;

    return (
        <Container onClick={handleClick} disabled={disabled}>
            {props.title && (
                <Typography
                    variant="CaptionEmphasized"
                    color={disabled ? 'layout.strokes' : 'layout.onSurface.secondary'}
                >
                    {props.title}
                </Typography>
            )}
            <InputContainer disabled={disabled} hasError={!!props.error}>
                {props.leadingIcon ? (
                    <InnerIconContainer>
                        {React.Children.map(props.leadingIcon, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {
                                    size: 20,
                                } as any);
                            }
                            return child;
                        })}
                    </InnerIconContainer>
                ) : null}
                <CustomInput
                    type={props.type ?? 'text'}
                    step={props.step}
                    min={0}
                    disabled={disabled}
                    ref={ref}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.leadingIcon ? (
                    <InnerIconContainer>
                        {React.Children.map(props.trailingIcon, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {
                                    size: 20,
                                } as any);
                            }
                            return child;
                        })}
                    </InnerIconContainer>
                ) : null}
            </InputContainer>
            {props.error && (
                <Typography variant="CaptionRegular" color="actions.error">
                    {props.error}
                </Typography>
            )}
        </Container>
    );
};
