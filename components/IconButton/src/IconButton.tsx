import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
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

const StyledButton = styled(ButtonBase)`
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

    /* Sizes */
    &[data-size='medium'] {
        padding: ${themeVars.spacing.ml};
    }
    &[data-size='small'] {
        padding: ${themeVars.spacing.m};
    }
    &[data-size='xsmall'] {
        padding: ${themeVars.spacing.xs};
        border-radius: ${themeVars.cornerRadius.s};
    }

    /* Variants */
    &[data-variant='filled'] {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.layout.strokes};
        background-color: var(--icon-button-bg, ${themeVars.layout.surfaceLow});
    }
    &[data-variant='filled']:disabled {
        background-color: var(--icon-button-bg, ${themeVars.layout.surfaceMid});
    }

    &[data-variant='outlined'] {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.layout.strokes};
        background-color: var(--icon-button-bg, transparent);
    }

    &[data-variant='flat'] {
        border-width: 0px;
        background-color: var(--icon-button-bg, transparent);
    }
`;

export const IconButton = (props: IconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, customBackground, ...rest } = props;

    const iconSizes: Record<NonNullable<IconButtonProps['size']>, number> = {
        medium: 24,
        small: 20,
        xsmall: 16,
    };

    const iconWithSize = React.isValidElement<{ size: number }>(icon)
        ? React.cloneElement(icon, { size: iconSizes[size] })
        : icon;

    return (
        <StyledButton
            data-variant={variant}
            data-size={size}
            style={
                customBackground
                    ? ({ ['--icon-button-bg' as string]: customBackground } as React.CSSProperties)
                    : undefined
            }
            {...rest}
        >
            {iconWithSize}
        </StyledButton>
    );
};
