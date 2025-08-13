import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

const StyledButton = styled(ButtonBase)`
    justify-content: center;
    align-items: center;

    gap: ${themeVars.spacing.s};

    color: ${themeVars.layout.onSurface.secondary};

    :hover {
        color: ${themeVars.layout.onSurface.primary};
    }

    :disabled {
        color: ${themeVars.layout.onSurface.tertiary};
    }

    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

export type LinkButtonProps = {
    size?: 'small' | 'xsmall';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LabelVariants: Record<Required<LinkButtonProps>['size'], TypographyProps['variant']> = {
    small: 'LinkSmall',
    xsmall: 'LinkExtraSmall',
};

export const LinkButton = (props: LinkButtonProps) => {
    const { size = 'small', leadingIcon, trailingIcon, label, ...rest } = props;

    return (
        <StyledButton {...rest}>
            {leadingIcon}
            <Typography variant={LabelVariants[size]}>{label}</Typography>
            {trailingIcon}
        </StyledButton>
    );
};
