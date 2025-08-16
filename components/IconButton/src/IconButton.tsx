import { ButtonBase } from '@hautechai/webui.buttonbase';
import { css } from '@linaria/core';
import { themeVars } from '@hautechai/webui.themeprovider';
import React from 'react';

export type IconButtonProps = {
    variant?: 'filled' | 'outlined' | 'flat';
    size?: 'medium' | 'small' | 'xsmall';
    icon: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customBackground?: string;
};

// Base styles
const buttonBase = css`
    border-radius: ${themeVars.cornerRadius.m};
    border-style: solid;
    color: ${themeVars.layout.onSurface.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:hover:not(:disabled) {
        background-color: var(--icon-button-bg, ${themeVars.layout.surfaceHigh});
    }

    &:disabled {
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
    }
`;

// Size variants
const mediumSize = css`
    padding: ${themeVars.spacing.ml};
`;

const smallSize = css`
    padding: ${themeVars.spacing.m};
`;

const xsmallSize = css`
    padding: ${themeVars.spacing.xs};
    border-radius: ${themeVars.cornerRadius.s};
`;

// Variant styles
const filledVariant = css`
    border-width: ${themeVars.stroke.thin};
    border-color: ${themeVars.layout.strokes};
    background-color: var(--icon-button-bg, ${themeVars.layout.surfaceLow});

    &:disabled {
        background-color: var(--icon-button-bg, ${themeVars.layout.surfaceMid});
    }
`;

const outlinedVariant = css`
    border-width: ${themeVars.stroke.thin};
    border-color: ${themeVars.layout.strokes};
    background-color: var(--icon-button-bg, transparent);
`;

const flatVariant = css`
    border-width: 0px;
    background-color: var(--icon-button-bg, transparent);
`;

export const iconButtonClasses = {
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
    },
};

export const IconButton = (props: IconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, customBackground, ...rest } = props;

    const buttonClassName = [
        iconButtonClasses.base,
        iconButtonClasses.sizes[size],
        iconButtonClasses.variants[variant],
    ].join(' ');

    const iconSizes: Record<NonNullable<IconButtonProps['size']>, number> = {
        medium: 24,
        small: 20,
        xsmall: 16,
    };

    const iconWithSize =
        React.isValidElement(icon) && typeof icon.type !== 'string'
            ? React.cloneElement(icon as React.ReactElement<any>, { size: iconSizes[size] })
            : icon;

    return (
        <ButtonBase
            className={buttonClassName}
            style={
                customBackground
                    ? ({ ['--icon-button-bg' as any]: customBackground } as React.CSSProperties)
                    : undefined
            }
            {...rest}
        >
            {iconWithSize}
        </ButtonBase>
    );
};
