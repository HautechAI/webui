import { ButtonBase } from '@hautechai/webui.buttonbase';
import { css } from '@linaria/core';
import { themeVars } from '@hautechai/webui.themeprovider';

export type ToggleIconButtonProps = {
    variant?: 'filled' | 'outlined' | 'flat' | 'primary';
    size?: 'medium' | 'small' | 'xsmall';
    icon: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// Base styles
const buttonBase = css`
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
`;

// Size variants with specific dimensions
const mediumSize = css`
    width: 48px;
    height: 48px;
    border-radius: ${themeVars.cornerRadius.m};
`;

const smallSize = css`
    width: 36px;
    height: 36px;
    border-radius: ${themeVars.cornerRadius.m};
`;

const xsmallSize = css`
    width: 20px;
    height: 20px;
    border-radius: ${themeVars.cornerRadius.s};
`;

// Filled variant
const filledVariant = css`
    border-width: ${themeVars.stroke.thin};

    /* Default state */
    background-color: ${themeVars.layout.surfaceLow};
    border-color: ${themeVars.layout.strokes};
    color: ${themeVars.layout.onSurface.secondary};

    /* Checked default state - flip background with pressed */
    &[data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }

    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.primary};
    }

    &:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.primary};
    }

    /* Checked pressed state - flip with default */
    &[data-checked='true']:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceLow};
    }

    &:focus-visible:not(:disabled) {
        background-color: ${themeVars.layout.surfaceLow};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.secondary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.tertiary};
    }
`;

// Outlined variant
const outlinedVariant = css`
    border-width: ${themeVars.stroke.thin};

    /* Default state - transparent background */
    background-color: transparent;
    border-color: ${themeVars.layout.strokes};
    color: ${themeVars.layout.onSurface.secondary};

    /* Checked default state - flip background with pressed */
    &[data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }

    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.primary};
    }

    &:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.primary};
    }

    /* Checked pressed state - flip with default */
    &[data-checked='true']:active:not(:disabled) {
        background-color: transparent;
    }

    &:focus-visible:not(:disabled) {
        background-color: transparent;
        border-color: ${themeVars.layout.onSurface.primary};
        color: ${themeVars.layout.onSurface.secondary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        border-color: ${themeVars.layout.strokes};
        color: ${themeVars.layout.onSurface.tertiary};
    }
`;

// Flat variant
const flatVariant = css`
    /* Default state - no border */
    border-width: 0px;
    background-color: transparent;
    color: ${themeVars.layout.onSurface.secondary};

    /* Checked default state - flip background with pressed */
    &[data-checked='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }

    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.primary};
    }

    &:active:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.primary};
    }

    /* Checked pressed state - flip with default */
    &[data-checked='true']:active:not(:disabled) {
        background-color: transparent;
    }

    &:focus-visible:not(:disabled) {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.layout.onSurface.primary};
        background-color: transparent;
        color: ${themeVars.layout.onSurface.secondary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
    }
`;

// Primary variant
const primaryVariant = css`
    /* Default state - no border */
    border-width: 0px;
    background-color: ${themeVars.actions.secondary};
    color: ${themeVars.actions.onSecondary};

    /* Checked default state - flip background with pressed */
    &[data-checked='true'] {
        background-color: ${themeVars.actions.primary};
        color: ${themeVars.actions.onPrimary};
    }

    &:hover:not(:disabled) {
        background-color: ${themeVars.actions.tertiary};
        color: ${themeVars.actions.onTertiary};
    }

    &:active:not(:disabled) {
        background-color: ${themeVars.actions.primary};
        color: ${themeVars.actions.onPrimary};
    }

    /* Checked pressed state - flip with default */
    &[data-checked='true']:active:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }

    &:focus-visible:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
    }
`;

export const toggleIconButtonClasses = {
    base: buttonBase,
    sizes: {
        medium: mediumSize,
        small: smallSize,
        xsmall: xsmallSize,
    },
    variants: {
        filled: filledVariant,
        outlined: outlinedVariant,
        flat: flatVariant,
        primary: primaryVariant,
    },
};

export const ToggleIconButton = (props: ToggleIconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, checked = false, ...rest } = props;

    const buttonClassName = [
        toggleIconButtonClasses.base,
        toggleIconButtonClasses.sizes[size],
        toggleIconButtonClasses.variants[variant],
    ].join(' ');

    return (
        <ButtonBase className={buttonClassName} data-checked={checked} {...rest}>
            {icon}
        </ButtonBase>
    );
};
