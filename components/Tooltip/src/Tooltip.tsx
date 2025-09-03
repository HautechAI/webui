import React, { useState, useRef } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { LinkButton } from '@hautechai/webui.linkbutton';
import { Column } from '@hautechai/webui.column';
import { Popover as TinyPopover } from 'react-tiny-popover';

const TooltipContainer = styled.div`
    cursor: pointer;
`;

const TooltipContent = styled.div`
    /* margin is set inline based on position */
    min-width: 100px;
    width: max-content;
    max-width: 240px;
    box-sizing: border-box;

    padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
    &[data-size='medium'] {
        padding: ${themeVars.spacing.ml} ${themeVars.spacing.ml};
    }

    background-color: ${themeVars.layout.surfaceLow};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.s};
    box-shadow: ${themeVars.elevation.two};

    cursor: default;
`;

type TooltipBaseProps = {
    text: string;
    children: React.ReactNode;
    position?: 'right' | 'left' | 'top' | 'bottom';
    reposition?: boolean;
    boundaryElement?: HTMLElement;
    zIndex?: number;
    testId?: string;
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
        <TooltipContainer data-testid={props.testId}>
            <TinyPopover
                reposition={props.reposition ?? false}
                boundaryElement={props.boundaryElement}
                containerStyle={{ zIndex: (props.zIndex ?? 1000).toString() }}
                content={
                    <TooltipContent
                        onMouseEnter={cancelHideTooltip}
                        onMouseLeave={scheduleHideTooltip}
                        data-size={props.size === 'medium' ? 'medium' : 'small'}
                        style={{
                            marginLeft: props.position === 'right' ? themeVars.spacing.m : undefined,
                            marginTop: props.position === 'bottom' ? themeVars.spacing.m : undefined,
                            marginRight: props.position === 'left' ? themeVars.spacing.m : undefined,
                            marginBottom: props.position === 'top' ? themeVars.spacing.m : undefined,
                        }}
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
