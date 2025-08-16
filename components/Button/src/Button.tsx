import { ButtonBase } from '@hautechai/webui.buttonbase';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

export type ButtonProps = {
    id?: string;
    variant?: 'filled' | 'outlined';
    hierarchy?: 'primary' | 'secondary';
    size?: 'medium' | 'small';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    stretch?: boolean;
};

// Base button styles
const buttonBase = css`
    justify-content: center;
    align-items: center;
    border-radius: ${themeVars.cornerRadius.m};
    border-style: solid;
    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

// Size-specific styles
const mediumSize = css`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    gap: ${themeVars.spacing.m};
`;

const smallSize = css`
    padding: ${themeVars.spacing.m} ${themeVars.spacing.l};
    gap: ${themeVars.spacing.s};
`;

// Variant and hierarchy combinations - filled primary
const filledPrimary = css`
    border-width: 0px;
    background-color: ${themeVars.actions.primary};
    color: ${themeVars.actions.onPrimary};

    &:hover,
    &:focus-visible {
        background-color: ${themeVars.actions.onSecondary};
        color: ${themeVars.actions.onPrimary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }
`;

// Variant and hierarchy combinations - filled secondary
const filledSecondary = css`
    border-width: 0px;
    background-color: ${themeVars.actions.secondary};
    color: ${themeVars.actions.onSecondary};

    &:hover,
    &:focus-visible {
        background-color: ${themeVars.actions.tertiary};
        color: ${themeVars.actions.onTertiary};
    }

    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }
`;

// Variant and hierarchy combinations - outlined primary
const outlinedPrimary = css`
    border-width: ${themeVars.stroke.thin};
    border-color: ${themeVars.actions.primary};
    background-color: transparent;
    color: ${themeVars.actions.primary};

    &:hover,
    &:focus-visible {
        background-color: ${themeVars.actions.onPrimary};
        color: ${themeVars.actions.primary};
    }

    &:disabled {
        background-color: transparent;
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }
`;

// Variant and hierarchy combinations - outlined secondary
const outlinedSecondary = css`
    border-width: ${themeVars.stroke.thin};
    border-color: ${themeVars.layout.strokes};
    background-color: transparent;
    color: ${themeVars.layout.onSurface.secondary};

    &:hover,
    &:focus-visible {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.secondary};
    }

    &:disabled {
        background-color: transparent;
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }
`;

export const buttonClasses = {
    base: buttonBase,
    sizes: {
        medium: mediumSize,
        small: smallSize,
    },
    variants: {
        filled: {
            primary: filledPrimary,
            secondary: filledSecondary,
        },
        outlined: {
            primary: outlinedPrimary,
            secondary: outlinedSecondary,
        },
    },
};

const StyledButton = styled(ButtonBase)``;

const LabelVariants: Record<Required<ButtonProps>['size'], TypographyProps['variant']> = {
    small: 'LabelSmallRegular',
    medium: 'LabelMediumButton',
};

export const Button = (props: ButtonProps) => {
    const {
        variant = 'filled',
        hierarchy = 'primary',
        size = 'medium',
        stretch = false,
        leadingIcon,
        trailingIcon,
        label,
        ...rest
    } = props;

    const buttonClassName = [
        buttonClasses.base,
        buttonClasses.sizes[size],
        buttonClasses.variants[variant][hierarchy],
    ].join(' ');

    return (
        <StyledButton className={buttonClassName} stretch={stretch} {...rest}>
            {props.leadingIcon}
            <Typography variant={LabelVariants[size]}>{label}</Typography>
            {props.trailingIcon}
        </StyledButton>
    );
};
