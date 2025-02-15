import { styled } from '@hautechai/webui.themeprovider';

const Label = styled.span<Required<Pick<TextButtonProps, 'size' | 'hierarchy'>>>`
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: ${({ size }) => ({ medium: 16, small: 14, xSmall: 12 }[size])}px; // TODO: replace with theme values
    font-style: normal;
    font-weight: 500;
    line-height: ${({ size }) => ({ medium: 24, small: 20, xSmall: 16 }[size])}px; // TODO: replace with theme values
    text-decoration: ${({ hierarchy }) => ({ primary: 'none', secondary: 'none', link: 'underline' }[hierarchy])};
`;

const StyledButton = styled.button<Required<Pick<TextButtonProps, 'hierarchy' | 'size'>>>`
    all: unset;
    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    gap: ${({ theme, size }) =>
        ({
            medium: theme.foundation.spacing.m, //
            small: theme.foundation.spacing.s,
        }[size])}px;

    color: ${({ theme, hierarchy }) =>
        ({
            primary: theme.palette.actions.primary, //
            secondary: theme.palette.layout.onSurface.secondary,
            link: theme.palette.layout.onSurface.secondary,
        }[hierarchy])};

    :hover {
        color: ${({ theme, hierarchy }) =>
            ({
                primary: theme.palette.actions.onSecondary, //
                secondary: theme.palette.layout.onSurface.primary,
                link: theme.palette.layout.onSurface.primary,
            }[hierarchy])};
    }

    :disabled {
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    }
`;

export type TextButtonProps = {
    hierarchy?: 'primary' | 'secondary' | 'link';
    size?: 'medium' | 'small';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
};

export const TextButton = (props: TextButtonProps) => {
    const { hierarchy = 'primary', size = 'medium', leadingIcon, trailingIcon, label, ...rest } = props;

    return (
        <StyledButton value={'Button'} hierarchy={hierarchy} size={size} {...rest}>
            <Label hierarchy={hierarchy} size={size}>
                {label}
            </Label>
        </StyledButton>
    );
};
