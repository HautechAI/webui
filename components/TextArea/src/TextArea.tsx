import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { ChangeEventHandler, useCallback, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div`
    display: flex;
    gap: ${themeVars.spacing.m};
    flex: 1;
    &[data-disabled='true'] {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};
    }
`;

export const InputContainer = styled.div<{ variation: 'filled' | 'outlined' }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    cursor: text;

    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
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

const CustomTextArea = styled(TextareaAutosize)<{ stretch?: boolean }>`
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    color: ${themeVars.layout.onSurface.primary};
    background: transparent;
    border: none;
    resize: none;

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

const InnerIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ActionButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OuterActionButtonContainer = styled(ActionButtonContainer)`
    width: 36px;
    height: 36px;
`;

const InnerActionButtonContainer = styled(ActionButtonContainer)`
    padding: ${themeVars.spacing.m};
`;

const getIcon = (icon: React.ReactNode) => (
    <InnerIconContainer>
        {React.Children.map(icon, (child) => {
            if (React.isValidElement<{ size: number }>(child)) {
                return React.cloneElement(child, {
                    size: 20,
                });
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
    actionButton?: React.ReactNode;
    actionButtonInside?: boolean;
};

export const TextArea = (props: TextAreaProps) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const handleClick = useCallback(() => {
        ref.current?.focus();
    }, []);

    const { disabled, actionButton, actionButtonInside = false, minRows = 4, maxRows } = props;

    return (
        <Container onClick={handleClick} data-disabled={!!disabled}>
            <InputContainer
                data-disabled={!!disabled}
                data-has-error={!!props.hasError}
                variation={props.variation ?? 'filled'}
            >
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
                {actionButton && actionButtonInside && (
                    <InnerActionButtonContainer>{actionButton}</InnerActionButtonContainer>
                )}
            </InputContainer>
            {actionButton && !actionButtonInside && (
                <OuterActionButtonContainer>{actionButton}</OuterActionButtonContainer>
            )}
        </Container>
    );
};
