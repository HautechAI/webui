import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Head = styled.thead``;
export const HeadCell = styled.th`
    color: ${themeVars.layout.onSurface.tertiary};
    font-feature-settings:
        'liga' off,
        'clig' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
    text-align: left;

    padding: ${themeVars.spacing.s};
    padding-bottom: ${themeVars.spacing.ml};
`;

export const Body = styled.tbody``;
export const Row = styled.tr``;

export const Cell = styled.td`
    margin: 0;

    color: ${themeVars.layout.onSurface.primary};
    font-feature-settings:
        'liga' off,
        'clig' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    padding: ${themeVars.spacing.m} ${themeVars.spacing.s};

    border-top-width: ${themeVars.stroke.thin};
    border-top-style: solid;
    border-top-color: ${themeVars.layout.strokes};
`;
