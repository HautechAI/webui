import { styled } from '@hautechai/webui.themeprovider';

export type ButtonProps = {
    variant?: 'filled' | 'outlined';
    hierarchy?: 'primary' | 'secondary';
    size?: 'medium' | 'small';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
};

const Label = styled.span<Required<Pick<ButtonProps, 'size'>>>`
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: ${({ size }) => (size === 'medium' ? 16 : 14)}px; // TODO: replace with theme values
    font-style: normal;
    font-weight: ${({ size }) => (size === 'medium' ? 500 : 400)}; // TODO: replace with theme values
    line-height: ${({ size }) => (size === 'medium' ? 24 : 20)}px; // TODO: replace with theme values
`;

const StyledButton = styled.button<Required<Pick<ButtonProps, 'variant' | 'hierarchy' | 'size'>>>`
    all: unset;
    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;

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

    :hover {
        background-color: ${({ theme, variant, hierarchy }) =>
            ({
                filled: {
                    primary: theme.palette.actions.onSecondary, //
                    secondary: theme.palette.actions.onSecondary, // TODO: replace with theme values
                },
                outlined: {
                    primary: theme.palette.actions.primary, // TODO: replace with theme values
                    secondary: theme.palette.actions.secondary, // TODO: replace with theme values
                },
            }[variant][hierarchy])};
    }

    :disabled {
        background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    }
`;

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
        <StyledButton value={'Button'} hierarchy={hierarchy} size={size} variant={variant} {...rest}>
            <Label size={size}>{label}</Label>
        </StyledButton>
    );
};
