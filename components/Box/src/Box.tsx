import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars, ThemeType } from '@hautechai/webui.themeprovider';
import { forwardRef, PropsWithChildren } from 'react';

const sizeToCss = (size: number | string) => {
    if (typeof size === 'string') {
        return size;
    }
    return `${size}px`;
};

const BaseComponent = forwardRef(
    (props: Pick<BoxProps, 'className' | 'children' | 'style' | 'id'>, ref: React.ForwardedRef<HTMLDivElement>) => {
        const { className, children, style, id } = props;
        return <div {...{ ref }} {...{ className, children, style, id }} />;
    },
);

const StyledBox = styled(BaseComponent)<Omit<BoxProps, 'icon'>>`
    display: ${({ display }) => display ?? 'flex'};

    ${({ width }) =>
        width
            ? css`
                  width: ${sizeToCss(width)};
              `
            : ''}
    ${({ height }) =>
        height
            ? css`
                  height: ${sizeToCss(height)};
              `
            : ''}
    ${({ maxWidth }) =>
        maxWidth
            ? css`
                  max-width: ${sizeToCss(maxWidth)};
              `
            : ''}
    ${({ maxHeight }) =>
        maxHeight
            ? css`
                  max-height: ${sizeToCss(maxHeight)};
              `
            : ''}

    ${({ minWidth }) =>
        minWidth
            ? css`
                  min-width: ${sizeToCss(minWidth)};
              `
            : ''}
    ${({ minHeight }) =>
        minHeight
            ? css`
                  min-height: ${sizeToCss(minHeight)};
              `
            : ''}

    ${({ padding }) =>
        padding
            ? css`
                  padding: ${themeVars.spacing[padding]};
              `
            : ''}
    ${({ paddingTop }) =>
        paddingTop
            ? css`
                  padding-top: ${themeVars.spacing[paddingTop]};
              `
            : ''}
    ${({ paddingRight }) =>
        paddingRight
            ? css`
                  padding-right: ${themeVars.spacing[paddingRight]};
              `
            : ''}
    ${({ paddingBottom }) =>
        paddingBottom
            ? css`
                  padding-bottom: ${themeVars.spacing[paddingBottom]};
              `
            : ''}
    ${({ paddingLeft }) =>
        paddingLeft
            ? css`
                  padding-left: ${themeVars.spacing[paddingLeft]};
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

    ${({ alignItems }) =>
        alignItems
            ? css`
                  align-items: ${alignItems};
              `
            : ''}

    ${({ justifyContent }) =>
        justifyContent
            ? css`
                  justify-content: ${justifyContent};
              `
            : ''}

    ${({ grow }) =>
        grow !== undefined
            ? css`
                  flex-grow: ${grow};
              `
            : ''}

    ${({ shrink }) =>
        shrink !== undefined
            ? css`
                  flex-shrink: ${shrink};
              `
            : ''}
`;

export type BoxProps = PropsWithChildren<{
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    padding?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl';
    paddingTop?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl';
    paddingRight?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl';
    paddingBottom?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl';
    paddingLeft?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl';
    overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowX?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowY?: 'hidden' | 'visible' | 'scroll' | 'auto';
    display?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    grow?: number;
    shrink?: number;
}>;

export const Box = forwardRef((props: BoxProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <StyledBox {...props} ref={ref} />;
});
