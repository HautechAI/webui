import { ButtonBase } from '@hautechai/webui.buttonbase';
import { css, themeVars } from '@hautechai/webui.themeprovider';

export type IconButtonProps = {
    variant?: 'filled' | 'outlined' | 'flat';
    size?: 'medium' | 'small';
    icon: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customBackground?: string;
};

// Base styles
const buttonBase = css`
    border-radius: ${themeVars.cornerRadius.m}px;
    border-style: solid;
    color: ${themeVars.layout.onSurface.primary};
    transition: 
        background-color ${themeVars.animation.duration.fast}s ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast}s ${themeVars.animation.timing.easeOut};
    
    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceHigh};
    }
    
    &:disabled {
        color: ${themeVars.layout.onSurface.tertiary};
        cursor: not-allowed;
    }
`;

// Size variants
const mediumSize = css`
    padding: ${themeVars.spacing.ml}px;
`;

const smallSize = css`
    padding: ${themeVars.spacing.m}px;
`;

// Variant styles
const filledVariant = css`
    border-width: ${themeVars.stroke.thin}px;
    border-color: ${themeVars.layout.strokes};
    background-color: ${themeVars.layout.surfaceLow};
    
    &:disabled {
        background-color: ${themeVars.layout.surfaceMid};
    }
`;

const outlinedVariant = css`
    border-width: ${themeVars.stroke.thin}px;
    border-color: ${themeVars.layout.strokes};
    background-color: transparent;
`;

const flatVariant = css`
    border-width: 0px;
    background-color: transparent;
`;

export const iconButtonClasses = {
    base: buttonBase,
    sizes: {
        medium: mediumSize,
        small: smallSize,
    },
    variants: {
        filled: filledVariant,
        outlined: outlinedVariant,
        flat: flatVariant,
    },
};

export const IconButton = (props: IconButtonProps) => {
    const { variant = 'filled', size = 'medium', icon, customBackground, ...rest } = props;

    const buttonClassName = [
        iconButtonClasses.base,
        iconButtonClasses.sizes[size],
        iconButtonClasses.variants[variant],
    ].join(' ');

    return (
        <ButtonBase 
            className={buttonClassName}
            {...rest}
        >
            <div 
                style={customBackground ? { 
                    backgroundColor: customBackground,
                    borderRadius: 'inherit',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                } : undefined}
            >
                {icon}
            </div>
        </ButtonBase>
    );
};
