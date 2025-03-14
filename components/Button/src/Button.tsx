import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

export type ButtonProps = {
    variant?: 'filled' | 'outlined';
    hierarchy?: 'primary' | 'secondary';
    size?: 'medium' | 'small';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled(ButtonBase)<Required<Pick<ButtonProps, 'variant' | 'hierarchy' | 'size'>>>`
    justify-content: center;
    align-items: center;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-style: solid;
    border-width: ${({ theme, variant }) =>
        ({
            filled: 0,
            outlined: theme.foundation.stroke.thin,
        }[variant])}px;

    border-color: ${({ theme, variant, hierarchy }) =>
        variant === 'outlined' && hierarchy === 'primary'
            ? theme.palette.actions.primary
            : theme.palette.layout.strokes};

    padding: ${({ theme, size }) =>
            ({
                medium: theme.foundation.spacing.ml, //
                small: theme.foundation.spacing.m,
            }[size])}px
        ${({ theme, size }) =>
            ({
                medium: theme.foundation.spacing.xl, //
                small: theme.foundation.spacing.l,
            }[size])}px;

    gap: ${({ theme, size }) =>
        ({
            medium: theme.foundation.spacing.m, //
            small: theme.foundation.spacing.s,
        }[size])}px;

    background-color: ${({ theme, variant, hierarchy }) =>
        ({
            filled: {
                primary: theme.palette.actions.primary, //
                secondary: theme.palette.actions.secondary, //
            },
            outlined: {
                primary: 'transparent', //
                secondary: 'transparent',
            },
        }[variant][hierarchy])};

    color: ${({ theme, variant, hierarchy }) =>
        ({
            filled: {
                primary: theme.palette.actions.onPrimary, //
                secondary: theme.palette.actions.onSecondary,
            },
            outlined: {
                primary: theme.palette.actions.primary, //
                secondary: theme.palette.layout.onSurface.secondary,
            },
        }[variant][hierarchy])};

    :hover,
    :focus-visible {
        background-color: ${({ theme, variant, hierarchy }) =>
            ({
                filled: {
                    primary: theme.palette.actions.onSecondary, //
                    secondary: theme.palette.actions.tertiary,
                },
                outlined: {
                    primary: theme.palette.actions.onPrimary,
                    secondary: theme.palette.layout.surfaceHigh,
                },
            }[variant][hierarchy])};

        color: ${({ theme, variant, hierarchy }) =>
            ({
                filled: {
                    primary: theme.palette.actions.onPrimary, //
                    secondary: theme.palette.actions.onTertiary,
                },
                outlined: {
                    primary: theme.palette.actions.primary, //
                    secondary: theme.palette.layout.onSurface.secondary,
                },
            }[variant][hierarchy])};
    }

    :disabled {
        background-color: ${({ theme, variant, hierarchy }) =>
            ({
                filled: {
                    primary: theme.palette.layout.surfaceMid,
                    secondary: theme.palette.layout.surfaceMid,
                },
                outlined: {
                    primary: 'transparent',
                    secondary: 'transparent',
                },
            }[variant][hierarchy])};
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
        cursor: not-allowed;
        border-color: ${({ theme }) => theme.palette.layout.strokes};
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
        leadingIcon,
        trailingIcon,
        label,
        ...rest
    } = props;

    return (
        <StyledButton hierarchy={hierarchy} size={size} variant={variant} {...rest}>
            {props.leadingIcon}
            <Typography variant={LabelVariants[size]}>{label}</Typography>
            {props.trailingIcon}
        </StyledButton>
    );
};
