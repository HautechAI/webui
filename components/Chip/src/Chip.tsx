import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React, { ReactNode } from 'react';

const Container = styled('div')`
    display: flex;
    flex-direction: row;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    padding: ${({ theme }) => theme.foundation.spacing.s}px;
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

const Label = styled(Typography)<{ maxWidth?: number }>`
    ${({ theme, maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth}px;
        `}
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export type ChipProps = {
    icon?: ReactNode;
    image?: string;
    label: string;
    maxWidth?: number;
};

export const Chip = (props: ChipProps) => {
    return (
        <Container>
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
    );
};
