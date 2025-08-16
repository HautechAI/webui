import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { Popover as TinyPopover } from 'react-tiny-popover';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

const Container = styled('div')`
    cursor: default;
    display: flex;
    flex-direction: row;
    border-color: ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.s};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    gap: ${themeVars.spacing.s};
    padding: ${themeVars.spacing.s};
`;

const PopoverContent = styled('div')<{ withPadding?: boolean }>`
    max-width: 240px;
    box-sizing: border-box;
    background-color: ${themeVars.layout.surfaceLow};
    border-color: ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.m};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    display: flex;
    flex-direction: column;
    padding: ${({ withPadding }) => (withPadding ? `${themeVars.spacing.s} ${themeVars.spacing.m}` : `0`)};
    margin: ${themeVars.spacing.m} 0;
    box-shadow: ${themeVars.elevation.two};
`;

const Icon = styled('div')`
    align-self: center;
    border-color: ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.s};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    height: 20px;
    width: 20px;
`;

const Image = styled('div')`
    border-color: ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.xs};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    background-position: center;
    background-size: cover;
    height: 20px;
    width: 20px;
`;

const ImagePreview = styled('div')`
    border-radius: ${themeVars.cornerRadius.m};
    max-width: 160px;

    & > img {
        display: block;
        border-radius: ${themeVars.cornerRadius.m};
        width: 100%;
        height: auto;
    }
`;

const Label = styled(Typography)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ChipContent = React.forwardRef<HTMLDivElement, ChipProps>((props, ref) => (
    <Container ref={ref}>
        {props.icon && (
            <Icon>
                {React.Children.map(props.icon, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            size: 20,
                        } as any);
                    }
                    return child;
                })}
            </Icon>
        )}
        {props.image && <Image style={{ backgroundImage: `url(${props.image})` }} />}
        <div style={{ maxWidth: props.maxWidth ? `${props.maxWidth}px` : undefined }}>
            <Label variant="LabelSmallRegular">{props.label}</Label>
        </div>
    </Container>
));

export type ChipProps = {
    icon?: ReactNode;
    image?: string;
    label: string;
    maxWidth?: number;
    showPopover?: boolean;
};

export const Chip = (props: ChipProps) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(false);
    const [align, setAlign] = useState<'start' | 'end'>('start');

    const close = useCallback(() => {
        setOpen(false);
    }, []);
    const open = useCallback(() => {
        setOpen(true);
    }, []);

    useEffect(() => {
        if (isOpen && triggerRef.current && contentRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const contentWidth = contentRef.current.offsetWidth;
            const spaceRight = window.innerWidth - triggerRect.left;

            if (spaceRight < contentWidth && triggerRect.right > contentWidth) {
                setAlign('end');
            } else {
                setAlign('start');
            }
        }
    }, [isOpen]);

    return props.showPopover ? (
        <TinyPopover
            content={
                <PopoverContent ref={contentRef} withPadding={!!props.icon}>
                    {props.image ? (
                        <ImagePreview>
                            <img src={props.image} alt="" />
                        </ImagePreview>
                    ) : (
                        <Typography variant="Body">{props.label}</Typography>
                    )}
                </PopoverContent>
            }
            isOpen={isOpen}
            positions={['bottom']}
            align={align}
        >
            <div onMouseEnter={open} onMouseLeave={close}>
                <ChipContent {...props} ref={triggerRef} />
            </div>
        </TinyPopover>
    ) : (
        <ChipContent {...props} />
    );
};
