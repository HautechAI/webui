import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
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

const StyledButton = styled(ButtonBase)`
    justify-content: center;
    align-items: center;
    border-radius: ${themeVars.cornerRadius.m};
    border-style: solid;
    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    /* Sizes */
    &[data-size='medium'] {
        padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
        gap: ${themeVars.spacing.m};
    }

    &[data-size='small'] {
        padding: ${themeVars.spacing.m} ${themeVars.spacing.l};
        gap: ${themeVars.spacing.s};
    }

    /* Filled + Primary */
    &[data-variant='filled'][data-hierarchy='primary'] {
        border-width: 0px;
        background-color: ${themeVars.actions.primary};
        color: ${themeVars.actions.onPrimary};
    }

    &[data-variant='filled'][data-hierarchy='primary']:hover,
    &[data-variant='filled'][data-hierarchy='primary']:focus-visible {
        background-color: ${themeVars.actions.onSecondary};
        color: ${themeVars.actions.onPrimary};
    }

    /* Filled + Secondary */
    &[data-variant='filled'][data-hierarchy='secondary'] {
        border-width: 0px;
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }

    &[data-variant='filled'][data-hierarchy='secondary']:hover,
    &[data-variant='filled'][data-hierarchy='secondary']:focus-visible {
        background-color: ${themeVars.actions.tertiary};
        color: ${themeVars.actions.onTertiary};
    }

    /* Outlined + Primary */
    &[data-variant='outlined'][data-hierarchy='primary'] {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.actions.primary};
        background-color: transparent;
        color: ${themeVars.actions.primary};
    }

    &[data-variant='outlined'][data-hierarchy='primary']:hover,
    &[data-variant='outlined'][data-hierarchy='primary']:focus-visible {
        background-color: ${themeVars.actions.onPrimary};
        color: ${themeVars.actions.primary};
    }

    /* Outlined + Secondary */
    &[data-variant='outlined'][data-hierarchy='secondary'] {
        border-width: ${themeVars.stroke.thin};
        border-color: ${themeVars.layout.strokes};
        background-color: transparent;
        color: ${themeVars.layout.onSurface.secondary};
    }

    &[data-variant='outlined'][data-hierarchy='secondary']:hover,
    &[data-variant='outlined'][data-hierarchy='secondary']:focus-visible {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.secondary};
    }

    /* Disabled states */
    &[data-variant='filled']:disabled {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }

    &[data-variant='outlined']:disabled {
        background-color: transparent;
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${themeVars.layout.strokes};
    }
`;

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

    return (
        <StyledButton data-variant={variant} data-hierarchy={hierarchy} data-size={size} stretch={stretch} {...rest}>
            {leadingIcon}
            <Typography variant={LabelVariants[size]}>{label}</Typography>
            {trailingIcon}
        </StyledButton>
    );
};
