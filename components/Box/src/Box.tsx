import { styled, css, themeVars } from '@hautechai/webui.themeprovider';
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
    padding?: keyof ThemeType['foundation']['spacing'];
    paddingTop?: keyof ThemeType['foundation']['spacing'];
    paddingRight?: keyof ThemeType['foundation']['spacing'];
    paddingBottom?: keyof ThemeType['foundation']['spacing'];
    paddingLeft?: keyof ThemeType['foundation']['spacing'];
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
