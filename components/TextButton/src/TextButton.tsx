import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

const StyledButton = styled(ButtonBase)<Required<Pick<TextButtonProps, 'hierarchy' | 'size'>>>`
    justify-content: center;
    align-items: center;

    gap: ${({ theme, size }) =>
        ({
            medium: theme.foundation.spacing.m, //
            small: theme.foundation.spacing.s,
            xsmall: theme.foundation.spacing.s,
        }[size])}px;

    color: ${({ theme, hierarchy }) =>
        ({
            primary: theme.palette.actions.primary, //
            secondary: theme.palette.layout.onSurface.secondary,
        }[hierarchy])};

    :hover {
        color: ${({ theme, hierarchy }) =>
            ({
                primary: theme.palette.actions.onSecondary, //
                secondary: theme.palette.layout.onSurface.primary,
            }[hierarchy])};
    }

    :disabled {
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    }
`;

export type TextButtonProps = {
    hierarchy?: 'primary' | 'secondary';
    size?: 'medium' | 'small' | 'xsmall';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LabelVariants: Record<Required<TextButtonProps>['size'], TypographyProps['variant']> = {
    medium: 'LabelMediumButton',
    small: 'LabelSmallRegular',
    xsmall: 'CaptionEmphasized',
};

export const TextButton = (props: TextButtonProps) => {
    const { hierarchy = 'primary', size = 'medium', leadingIcon, trailingIcon, label, ...rest } = props;

    return (
        <StyledButton hierarchy={hierarchy} size={size} {...rest}>
            {leadingIcon}
            <Typography variant={LabelVariants[size]}>{label}</Typography>
            {trailingIcon}
        </StyledButton>
    );
};
