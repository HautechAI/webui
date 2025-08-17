import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export type ToggleIconButtonProps = {
    variant?: 'filled' | 'outlined' | 'flat' | 'primary';
    size?: 'medium' | 'small' | 'xsmall';
    icon: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled(ButtonBase)`
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:disabled {
        cursor: not-allowed;
    }

    /* Sizes */
    &[data-size='medium'] {
        width: 48px;
        height: 48px;
        border-radius: ${themeVars.cornerRadius.m};
    }
    &[data-size='small'] {
        width: 36px;
        height: 36px;
        border-radius: ${themeVars.cornerRadius.m};
    }
    &[data-size='xsmall'] {
        width: 20px;
        height: 20px;
        border-radius: ${themeVars.cornerRadius.s};
    }

    /* Variants */
    &[data-variant='filled'] {
        border-width: ${themeVars.stroke.thin};
        background-color: ${themeVars.layout.surfaceLow};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='filled'][data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
    &[data-variant='filled']:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='filled']:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='filled'][data-checked='true']:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceLow};
    }
    &[data-variant='filled']:focus-visible:not(:disabled) {
        background-color: ${themeVars.layout.surfaceLow};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='filled']:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.tertiary};
    }

    &[data-variant='outlined'] {
        border-width: ${themeVars.stroke.thin};
        background-color: transparent;
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='outlined'][data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
    &[data-variant='outlined']:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='outlined']:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='outlined'][data-checked='true']:active:not(:disabled) {
        background-color: transparent;
    }
    &[data-variant='outlined']:focus-visible:not(:disabled) {
        background-color: transparent;
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='outlined']:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.tertiary};
    }

    &[data-variant='flat'] {
        border-width: 0px;
        background-color: transparent;
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='flat'][data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
    &[data-variant='flat']:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='flat']:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.primary};
    }
    &[data-variant='flat'][data-checked='true']:active:not(:disabled) {
        background-color: transparent;
    }
    &[data-variant='flat']:focus-visible:not(:disabled) {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.layout.onSurface.primary};
        background-color: transparent;
        color: ${themeVars.layout.onSurface.secondary};
    }
    &[data-variant='flat']:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
    }

    &[data-variant='primary'] {
        border-width: 0px;
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }
    &[data-variant='primary'][data-checked='true'] {
        background-color: ${themeVars.actions.primary};
        color: ${themeVars.actions.onPrimary};
    }
    &[data-variant='primary']:hover:not(:disabled) {
        background-color: ${themeVars.actions.tertiary};
        color: ${themeVars.actions.onTertiary};
    }
    &[data-variant='primary']:active:not(:disabled) {
        background-color: ${themeVars.actions.primary};
        color: ${themeVars.actions.onPrimary};
    }
    &[data-variant='primary'][data-checked='true']:active:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }
    &[data-variant='primary']:focus-visible:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }
    &[data-variant='primary']:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
    }
`;

export const ToggleIconButton = (props: ToggleIconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, checked = false, ...rest } = props;

    return (
        <StyledButton
            data-variant={variant}
            data-size={size}
            data-checked={checked}
            {...rest}
        >
            {icon}
        </StyledButton>
    );
};
