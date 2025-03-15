import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const StyledBox = styled.div<Omit<BoxProps, 'icon'>>`
    display: ${({ display }) => display ?? 'flex'};

    ${({ width }) =>
        width
            ? css`
                  width: ${width}px;
              `
            : ''}
    ${({ height }) =>
        height
            ? css`
                  height: ${height}px;
              `
            : ''}
    ${({ maxWidth }) =>
        maxWidth
            ? css`
                  max-width: ${maxWidth}px;
              `
            : ''}
    ${({ maxHeight }) =>
        maxHeight
            ? css`
                  max-height: ${maxHeight}px;
              `
            : ''}
    ${({ theme, padding }) =>
        padding
            ? css`
                  padding: ${theme.foundation.spacing[padding]}px;
              `
            : ''}
    ${({ theme, paddingTop }) =>
        paddingTop
            ? css`
                  padding-top: ${theme.foundation.spacing[paddingTop]}px;
              `
            : ''}
    ${({ theme, paddingRight }) =>
        paddingRight
            ? css`
                  padding-right: ${theme.foundation.spacing[paddingRight]}px;
              `
            : ''}
    ${({ theme, paddingBottom }) =>
        paddingBottom
            ? css`
                  padding-bottom: ${theme.foundation.spacing[paddingBottom]}px;
              `
            : ''}
    ${({ theme, paddingLeft }) =>
        paddingLeft
            ? css`
                  padding-left: ${theme.foundation.spacing[paddingLeft]}px;
              `
            : ''}
    ${({ overflow }) =>
        overflow
            ? css`
                  overflow: ${overflow};
              `
            : ''}
    ${({ overflowX }) =>
        overflowX
            ? css`
                  overflow-x: ${overflowX};
              `
            : ''}
    ${({ overflowY }) =>
        overflowY
            ? css`
                  overflow-y: ${overflowY};
              `
            : ''};
`;

export type BoxProps = PropsWithChildren<{
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    padding?: keyof ThemeType['foundation']['spacing'];
    paddingTop?: keyof ThemeType['foundation']['spacing'];
    paddingRight?: keyof ThemeType['foundation']['spacing'];
    paddingBottom?: keyof ThemeType['foundation']['spacing'];
    paddingLeft?: keyof ThemeType['foundation']['spacing'];
    overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowX?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowY?: 'hidden' | 'visible' | 'scroll' | 'auto';
    display?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
}>;

export const Box = (props: BoxProps) => {
    return <StyledBox {...props} />;
};
