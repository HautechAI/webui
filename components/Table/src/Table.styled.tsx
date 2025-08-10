import { styled } from '@linaria/react';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Head = styled.thead``;
export const HeadCell = styled.th`
    color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
    text-align: left;

    padding: ${({ theme }) => theme.foundation.spacing.s}px;
    padding-bottom: ${({ theme }) => theme.foundation.spacing.ml}px;
`;

export const Body = styled.tbody``;
export const Row = styled.tr``;

export const Cell = styled.td`
    margin: 0;

    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.s}px;

    border-top-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.palette.layout.strokes};
`;
