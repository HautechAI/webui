import React, { useState, useRef } from 'react';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { LinkButton } from '@hautechai/webui.linkbutton';
import { Column } from '@hautechai/webui.column';

const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    z-index: 101;

    cursor: pointer;
`;

const TooltipContent = styled.div<{
    isMedium?: boolean;
    isVisible?: boolean;
    position?: 'right' | 'left' | 'top' | 'bottom';
}>`
    position: absolute;
    ${({ theme, position, isVisible }) => {
        const transformValue = isVisible ? 'scaleY(1)' : 'scaleY(0.95)';

        return position === 'top'
            ? css`
                  transform: ${transformValue} translateX(-50%);
                  bottom: 100%;
                  left: 50%;
                  margin-bottom: ${theme.foundation.spacing.m}px;
              `
            : position === 'bottom'
            ? css`
                  transform: ${transformValue} translateX(-50%);
                  top: 100%;
                  left: 50%;
                  margin-top: ${theme.foundation.spacing.m}px;
              `
            : position === 'left'
            ? css`
                  transform: ${transformValue} translateY(-50%);
                  right: 100%;
                  top: 50%;
                  margin-right: ${theme.foundation.spacing.m}px;
              `
            : css`
                  transform: ${transformValue} translateY(-50%);
                  left: 100%;
                  top: 50%;
                  margin-left: ${theme.foundation.spacing.m}px;
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

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.normal;
        const timingFunction = theme.foundation.animation.timing.ease;

        return css`
            transition: opacity ${normalDuration}s ${timingFunction}, transform ${normalDuration}s ${timingFunction};
        `;
    }}
`;

type TooltipBaseProps = {
    text: string;
    children: React.ReactNode;
    position?: 'right' | 'left' | 'top' | 'bottom';
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
            <div onMouseEnter={showTooltip} onMouseLeave={scheduleHideTooltip}>
                {props.children}
            </div>

            <TooltipContent
                onMouseEnter={cancelHideTooltip}
                onMouseLeave={scheduleHideTooltip}
                isMedium={props.size === 'medium'}
                isVisible={visible}
                position={props.position ?? 'bottom'}
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
        </TooltipContainer>
    );
};
