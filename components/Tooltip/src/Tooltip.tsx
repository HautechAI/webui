import React, { useState, useRef } from 'react';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { LinkButton } from '@hautechai/webui.linkbutton';
import { Column } from '@hautechai/webui.column';
import { Popover as TinyPopover } from 'react-tiny-popover';

const TooltipContainer = styled.div`
    cursor: pointer;
`;

const TooltipContent = styled.div<{
    isMedium?: boolean;
    position?: 'right' | 'left' | 'top' | 'bottom';
}>`
    ${({ theme, position }) => {
        return position === 'right'
            ? css`
                  margin-left: ${theme.foundation.spacing.m}px;
              `
            : position === 'bottom'
              ? css`
                    margin-top: ${theme.foundation.spacing.m}px;
                `
              : position === 'left'
                ? css`
                      margin-right: ${theme.foundation.spacing.m}px;
                  `
                : css`
                      margin-bottom: ${theme.foundation.spacing.m}px;
                  `;
    }}

    min-width: 100px;
    width: max-content;
    max-width: 240px;
    box-sizing: border-box;

    padding: ${({ theme, isMedium }) => (isMedium ? theme.foundation.spacing.ml : theme.foundation.spacing.s)}px
        ${({ theme, isMedium }) => (isMedium ? theme.foundation.spacing.ml : theme.foundation.spacing.m)}px;

    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    box-shadow: ${({ theme }) => theme.foundation.elevation.two};

    cursor: default;
`;

type TooltipBaseProps = {
    text: string;
    children: React.ReactNode;
    position?: 'right' | 'left' | 'top' | 'bottom';
    reposition?: boolean;
    boundaryElement?: HTMLElement;
};

type TooltipSmallProps = TooltipBaseProps & {
    size?: 'small';
};

type TooltipMediumProps = TooltipBaseProps & {
    size: 'medium';
    buttonLabel?: string;
    onClick?: () => void;
};

type TooltipProps = TooltipSmallProps | TooltipMediumProps;

export const Tooltip = (props: TooltipProps) => {
    const [visible, setVisible] = useState(false);
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const cancelHideTooltip = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }
    };

    const showTooltip = () => {
        cancelHideTooltip();
        setVisible(true);
    };

    const scheduleHideTooltip = () => {
        hideTimeout.current = setTimeout(() => {
            setVisible(false);
        }, 300);
    };

    const getTypography = () => (
        <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
            {props.text}
        </Typography>
    );
    return (
        <TooltipContainer>
            <TinyPopover
                reposition={props.reposition ?? false}
                boundaryElement={props.boundaryElement}
                content={
                    <TooltipContent
                        onMouseEnter={cancelHideTooltip}
                        onMouseLeave={scheduleHideTooltip}
                        isMedium={props.size === 'medium'}
                        position={props.position}
                    >
                        {props.size === 'medium' ? (
                            <Column spacing="m" align="start">
                                {getTypography()}
                                {props.size === 'medium' && props.buttonLabel && (
                                    <LinkButton size="xsmall" onClick={props.onClick} label={props.buttonLabel} />
                                )}
                            </Column>
                        ) : (
                            getTypography()
                        )}
                    </TooltipContent>
                }
                isOpen={visible}
                positions={props.position ? [props.position] : undefined}
            >
                <div onMouseEnter={showTooltip} onMouseLeave={scheduleHideTooltip}>
                    {props.children}
                </div>
            </TinyPopover>
        </TooltipContainer>
    );
};
