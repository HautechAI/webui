import { css, styled } from '@hautechai/webui.themeprovider';
import { useState } from 'react';

const SwitchContainer = styled.label<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const SwitchComponent = styled.div<{ checked: boolean; disabled?: boolean }>`
    position: relative;
    width: 42px;
    height: 24px;
    background-color: ${({ theme, checked }) =>
        checked ? theme.palette.actions.primary : theme.palette.actions.onPrimary};

    box-sizing: border-box;
    border-radius: 100px;
    border: ${({ theme }) => theme.foundation.stroke.standard}px solid
        ${({ theme, disabled }) => (disabled ? theme.palette.layout.strokes : theme.palette.actions.onSecondary)};

    transition: background-color ${({ theme }) => theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: ${({ checked }) => (checked ? '22px' : '6px')};
        width: 2px;
        height: 2px;

        padding: ${({ checked }) => (checked ? '7px' : '5px')};
        background-color: ${({ theme, checked }) =>
            checked ? theme.palette.actions.onPrimary : theme.palette.actions.primary};
        transition: background-color ${({ theme }) => theme.foundation.animation.duration.fast}s
            ${({ theme }) => theme.foundation.animation.timing.easeOut};

        border-radius: 50%;

        transition: left ${({ theme }) => theme.foundation.animation.duration.fast}s
            ${({ theme }) => theme.foundation.animation.timing.easeOut};
    }

    ${({ disabled, checked, theme }) =>
        disabled
            ? css`
                  background-color: ${theme.palette.layout.surfaceMid};

                  &::before {
                      background-color: ${theme.palette.layout.strokes};
                  }
              `
            : checked
            ? css`
                  &:active {
                      background-color: ${theme.palette.actions.secondary};

                      &::before {
                          background-color: ${theme.palette.actions.tertiary};
                      }
                  }

                  &:hover {
                      &:not(:active) {
                          background-color: ${theme.palette.actions.tertiary};
                      }
                  }
              `
            : css`
                  &:active {
                      background-color: ${theme.palette.actions.tertiary};

                      &::before {
                          background-color: ${theme.palette.actions.secondary};
                      }
                  }

                  &:hover {
                      &:not(:active) {
                          background-color: ${theme.palette.actions.secondary};
                      }
                  }
              `}
`;

const HiddenCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

export type SwitchProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};

export const Switch = ({ checked: controlledChecked, onChange, disabled }: SwitchProps) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(false);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : uncontrolledChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setUncontrolledChecked(e.target.checked);
        }

        onChange?.(e.target.checked);
    };

    return (
        <SwitchContainer disabled={disabled}>
            <HiddenCheckbox
                type="checkbox"
                checked={checked !== undefined ? !!checked : undefined}
                onChange={!disabled ? handleChange : undefined}
                disabled={disabled}
            />
            <SwitchComponent checked={checked ?? false} disabled={disabled} />
        </SwitchContainer>
    );
};
