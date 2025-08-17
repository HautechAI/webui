import { Row } from '@hautechai/webui.row';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React from 'react';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    /* Small is the default */
    padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
    flex: 1 0 0;

    border-radius: ${themeVars.cornerRadius.m};
    background-color: transparent;

    transition:
        background-color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
        color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease};

    color: ${themeVars.layout.onSurface.secondary};
    &[data-size='medium'] {
        color: ${themeVars.layout.onSurface.tertiary};
        padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    }
    &[data-size='small'] {
        padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
    }
    &[data-selected='true'] {
        color: ${themeVars.layout.onSurface.primary};
        background-color: ${themeVars.layout.surfaceHigh};
    }
    &[data-type='CTA'] {
        color: ${themeVars.actions.primary};
    }
    &:hover {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.primary};
    }
`;

type MainProps = {
    type?: 'main';
    size?: 'medium' | 'small';
};
type CtaProps = {
    type: 'CTA';
    size?: never;
};
export type MenuItemProps = (MainProps | CtaProps) & {
    label: string;
    isSelected?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onClick?: () => void;
};

const renderIcon = (icon?: React.ReactNode, color?: string) =>
    icon ? (
        <>
            {React.Children.map(icon, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { size: 20, color } as Partial<{ size: number; color: string }>) : child,
            )}
        </>
    ) : null;

export const MenuItem = ({
    label,
    isSelected,
    leadingIcon,
    trailingIcon,
    type,
    size = 'small',
    onClick,
}: MenuItemProps) => {
    return (
        <Container data-selected={!!isSelected} data-type={type} data-size={size} onClick={onClick}>
            <Row spacing="m">
                {renderIcon(leadingIcon)}
                <Typography
                    variant={
                        type === 'CTA'
                            ? 'LabelMediumEmphasized'
                            : size === 'medium'
                              ? 'LabelMediumRegular'
                              : 'LabelSmallRegular'
                    }
                >
                    {label}
                </Typography>
            </Row>
            {renderIcon(trailingIcon, type === 'CTA' ? 'layout.onSurface.tertiary' : undefined)}
        </Container>
    );
};
