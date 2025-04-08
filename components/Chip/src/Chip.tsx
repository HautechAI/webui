import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { Popover as TinyPopover } from 'react-tiny-popover';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

const Container = styled('div')`
    cursor: default;
    display: flex;
    flex-direction: row;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    padding: ${({ theme }) => theme.foundation.spacing.s}px;
`;

const PopoverContent = styled('div')<{ withPadding?: boolean }>`
    max-width: 240px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    display: flex;
    flex-direction: column;
    padding: ${({ theme, withPadding }) =>
        withPadding ? `${theme.foundation.spacing.s}px ${theme.foundation.spacing.m}px` : `0`};
    margin: ${({ theme }) => theme.foundation.spacing.m}px 0;
    box-shadow: ${({ theme }) => theme.foundation.elevation.two};
`;

const Icon = styled('div')`
    align-self: center;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    height: 20px;
    width: 20px;
`;

const Image = styled('div')<{ src: string }>`
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.xs}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    height: 20px;
    width: 20px;
`;

const ImagePreview = styled('div')`
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    max-width: 160px;

    & > img {
        display: block;
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
        width: 100%;
        height: auto;
    }
`;

const Label = styled(Typography)<{ maxWidth?: number }>`
    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth}px;
        `}
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
        {props.image && <Image src={props.image} />}
        <Label variant="LabelSmallRegular" maxWidth={props.maxWidth}>
            {props.label}
        </Label>
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
