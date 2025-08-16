import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { useState } from 'react';

const SwitchContainer = styled.label`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.m};
    cursor: pointer;
    &[data-disabled='true'] {
        cursor: not-allowed;
    }
`;

const SwitchComponent = styled.div`
    position: relative;
    width: 42px;
    height: 24px;
    background-color: ${themeVars.actions.onPrimary};
    &[data-checked='true'] {
        background-color: ${themeVars.actions.primary};
    }

    box-sizing: border-box;
    border-radius: 100px;
    border: ${themeVars.stroke.standard} solid ${themeVars.actions.onSecondary};
    &[data-disabled='true'] {
        border-color: ${themeVars.layout.strokes};
    }

    transition: background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 6px;
        width: 2px;
        height: 2px;

        padding: 5px;
        background-color: ${themeVars.actions.primary};
        transition: background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

        border-radius: 50%;

        transition: left ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
    }

    &[data-disabled='true'] {
        background-color: ${themeVars.layout.surfaceMid};
        &::before {
            background-color: ${themeVars.layout.strokes};
        }
    }

    &[data-checked='true'] {
        &:active {
            background-color: ${themeVars.actions.secondary};
            &::before {
                background-color: ${themeVars.actions.tertiary};
            }
        }
        &:hover:not(:active) {
            background-color: ${themeVars.actions.tertiary};
        }
        &::before {
            left: 22px;
            padding: 7px;
            background-color: ${themeVars.actions.onPrimary};
        }
    }

    &:not([data-checked='true']) {
        &:active {
            background-color: ${themeVars.actions.tertiary};
            &::before {
                background-color: ${themeVars.actions.secondary};
            }
        }
        &:hover:not(:active) {
            background-color: ${themeVars.actions.secondary};
        }
    }
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
        <SwitchContainer data-disabled={!!disabled}>
            <HiddenCheckbox
                type="checkbox"
                checked={checked !== undefined ? !!checked : undefined}
                onChange={!disabled ? handleChange : undefined}
                disabled={disabled}
            />
            <SwitchComponent data-checked={checked ?? false} data-disabled={!!disabled} />
        </SwitchContainer>
    );
};
