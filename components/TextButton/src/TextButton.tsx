import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

const StyledButton = styled(ButtonBase)<Required<Pick<TextButtonProps, 'hierarchy' | 'size'>>>`
    justify-content: center;
    align-items: center;

    gap: ${({ size }) =>
        ({
            medium: themeVars.spacing.m,
            small: themeVars.spacing.s,
            xsmall: themeVars.spacing.s,
        }[size])};

    color: ${({ hierarchy }) =>
        ({
            primary: themeVars.actions.primary,
            secondary: themeVars.layout.onSurface.secondary,
        }[hierarchy])};

    :hover {
        color: ${({ hierarchy }) =>
            ({
                primary: themeVars.actions.onSecondary,
                secondary: themeVars.layout.onSurface.primary,
            }[hierarchy])};
    }

    :disabled {
        color: ${themeVars.layout.onSurface.tertiary};
    }

    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
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
