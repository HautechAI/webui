import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';
import type React from 'react';
import type { ButtonBaseProps } from '@hautechai/webui.buttonbase';

const StyledButton = styled(ButtonBase)`
    justify-content: center;
    align-items: center;

    gap: var(--tb-gap);

    color: var(--tb-color);

    :hover {
        color: var(--tb-color-hover);
    }

    :disabled {
        color: ${themeVars.layout.onSurface.tertiary};
    }

    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

export type TextButtonProps = {
    id?: string;
    hierarchy?: 'primary' | 'secondary';
    size?: 'medium' | 'small' | 'xsmall';
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    testId?: string;
};

const LabelVariants: Record<Required<TextButtonProps>['size'], TypographyProps['variant']> = {
    medium: 'LabelMediumButton',
    small: 'LabelSmallRegular',
    xsmall: 'CaptionEmphasized',
};

export const TextButton = (props: TextButtonProps) => {
    const { hierarchy = 'primary', size = 'medium', leadingIcon, trailingIcon, label, testId, id, ...rest } = props;

    const gapBySize = {
        medium: themeVars.spacing.m,
        small: themeVars.spacing.s,
        xsmall: themeVars.spacing.s,
    } as const;

    const colorByHierarchy = {
        primary: themeVars.actions.primary,
        secondary: themeVars.layout.onSurface.secondary,
    } as const;

    const hoverColorByHierarchy = {
        primary: themeVars.actions.onSecondary,
        secondary: themeVars.layout.onSurface.primary,
    } as const;

    const styleVars: React.CSSProperties = {
        ...(typeof rest.style === 'object' ? (rest.style as React.CSSProperties) : undefined),
        ['--tb-gap' as string]: gapBySize[size],
        ['--tb-color' as string]: colorByHierarchy[hierarchy],
        ['--tb-color-hover' as string]: hoverColorByHierarchy[hierarchy],
    };

    return (
        <span id={id} style={styleVars}>
            <StyledButton testId={testId} {...(rest as Omit<ButtonBaseProps, 'children' | 'id'>)}>
                {leadingIcon}
                <Typography variant={LabelVariants[size]}>{label}</Typography>
                {trailingIcon}
            </StyledButton>
        </span>
    );
};
