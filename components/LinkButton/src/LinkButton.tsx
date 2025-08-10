import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@linaria/react';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

const StyledButton = styled(ButtonBase)`
    justify-content: center;
    align-items: center;

    gap: ${({ theme }) => theme.foundation.spacing.s}px;

    color: ${({ theme }) => theme.palette.layout.onSurface.secondary};

    :hover {
        color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    }

    :disabled {
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    }

    transition: color ${({ theme }) => theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut};
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
