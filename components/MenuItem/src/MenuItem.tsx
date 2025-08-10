import { Row } from '@hautechai/webui.row';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React from 'react';

export const Container = styled.div<{ type?: 'CTA' | 'main'; size?: 'small' | 'medium'; selected?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;
    flex: 1 0 0;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    background-color: transparent;

    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.normal;
        const timingFunction = theme.foundation.animation.timing.ease;

        return `
        transition: 
            background-color  ${normalDuration}s ${timingFunction},
            color  ${normalDuration}s ${timingFunction};
        `;
    }}

    ${({ theme, type, size, selected }) =>
        type === 'CTA'
            ? css`
                  color: ${theme.palette.actions.primary};
              `
            : css`
                  ${selected
                      ? css`
                            color: ${theme.palette.layout.onSurface.primary};
                        `
                      : css`
                            ${size === 'medium'
                                ? css`
                                      color: ${theme.palette.layout.onSurface.tertiary};
                                  `
                                : css`
                                      color: ${theme.palette.layout.onSurface.secondary};

                                      &:hover {
                                          color: ${theme.palette.layout.onSurface.primary};
                                      }
                                  `}
                        `}
              `}

    ${({ selected, theme }) =>
        selected &&
        css`
            background-color: ${theme.palette.layout.surfaceHigh};
        `}

    &:hover {
        background-color: ${({ theme }) => theme.palette.layout.surfaceHigh};
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
                React.isValidElement(child) ? React.cloneElement(child, { size: 20, color } as any) : child,
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
        <Container selected={isSelected} type={type} size={size} onClick={onClick}>
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
