import { Row } from '@hautechai/webui.row';
import { css, styled } from '@hautechai/webui.themeprovider';
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
    transition: background-color 0.3s ease, color 0.3s ease;

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
                            ${size === 'small'
                                ? css`
                                      color: ${theme.palette.layout.onSurface.secondary};

                                      &:hover {
                                          color: ${theme.palette.layout.onSurface.primary};
                                      }
                                  `
                                : css`
                                      color: ${theme.palette.layout.onSurface.tertiary};
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

const InnerIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type MainProps = {
    type?: 'main';
    size?: 'medium' | 'small';
};
type CtaProps = {
    type: 'CTA';
    size?: never;
};
type TabRowProps = (MainProps | CtaProps) & {
    label: string;
    isSelected?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onClick?: () => void;
};

const renderIcon = (icon?: React.ReactNode, color?: string) =>
    icon ? (
        <InnerIconContainer>
            {React.Children.map(icon, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { size: 20, color } as any) : child,
            )}
        </InnerIconContainer>
    ) : null;

export const TabRow = ({ label, isSelected, leadingIcon, trailingIcon, type, size, onClick }: TabRowProps) => {
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
