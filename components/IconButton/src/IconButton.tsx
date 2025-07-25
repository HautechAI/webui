import { ButtonBase } from '@hautechai/webui.buttonbase';
import { css, styled } from '@hautechai/webui.themeprovider';

const StyledButton = styled(ButtonBase)<
    Required<Pick<IconButtonProps, 'variant' | 'size'>> & Pick<IconButtonProps, 'customBackground'>
>`
    padding: ${({ theme, size }) => (size === 'medium' ? theme.foundation.spacing.ml : theme.foundation.spacing.m)}px;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-width: ${({ theme, variant }) =>
        variant === 'filled' || variant === 'outlined' ? theme.foundation.stroke.thin : 0}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.layout.strokes};

    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    background-color: ${({ theme, variant, customBackground }) =>
        customBackground || (variant === 'filled' ? theme.palette.layout.surfaceLow : 'transparent')};

    &:hover {
        &:not(:disabled) {
            background-color: ${({ theme }) => theme.palette.layout.surfaceHigh};
        }
    }

    &:disabled {
        ${({ theme, variant }) =>
            variant === 'filled' &&
            css`
                background-color: ${theme.palette.layout.surfaceMid};
            `}
        color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
        cursor: not-allowed;
    }

    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.fast;
        const timingFunction = theme.foundation.animation.timing.easeOut;

        return `
        transition: 
            background-color ${normalDuration}s ${timingFunction},
            border-color  ${normalDuration}s ${timingFunction};
        `;
    }}
`;

export type IconButtonProps = {
    variant?: 'filled' | 'outlined' | 'flat';
    size?: 'medium' | 'small';
    icon: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customBackground?: string;
};

export const IconButton = (props: IconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, customBackground, ...rest } = props;

    return (
        <StyledButton variant={variant} size={size} customBackground={customBackground} {...rest}>
            {icon}
        </StyledButton>
    );
};
