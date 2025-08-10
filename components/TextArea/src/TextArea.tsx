import { IconButton, IconButtonProps } from '@hautechai/webui.iconbutton';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { ChangeEventHandler, useCallback, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    flex: 1;

    ${({ theme, disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            color: ${theme.palette.layout.strokes};
        `};
`;

export const InputContainer = styled.div<{ disabled?: boolean; hasError?: boolean; variation: 'filled' | 'outlined' }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
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

const CustomTextArea = styled(TextareaAutosize)<{ stretch?: boolean }>`
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    background: transparent;
    border: none;
    resize: none;

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

const OuterIconContainer = styled.div`
    width: 36px;
    height: 36px;
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

export type TextAreaProps = {
    className?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    minRows?: number;
    maxRows?: number;
} & Pick<Partial<IconButtonProps>, 'icon'> & {
        onIconButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    };

export const TextArea = (props: TextAreaProps) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const handleClick = useCallback(() => {
        ref.current?.focus();
    }, []);

    const { disabled, icon, minRows = 4, maxRows } = props;

    return (
        <Container onClick={handleClick} disabled={disabled}>
            <InputContainer disabled={disabled} hasError={props.hasError} variation={props.variation ?? 'filled'}>
                {props.leadingIcon ? getIcon(props.leadingIcon) : null}
                <CustomTextArea
                    ref={ref}
                    className={props.className}
                    minRows={minRows}
                    maxRows={maxRows}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={disabled}
                    placeholder={props.placeholder}
                />
                {props.trailingIcon ? getIcon(props.trailingIcon) : null}
            </InputContainer>
            {icon && (
                <OuterIconContainer>
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
                </OuterIconContainer>
            )}
        </Container>
    );
};
