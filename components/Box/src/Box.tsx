import { themeVars } from '@hautechai/webui.themeprovider';
import { forwardRef, PropsWithChildren } from 'react';

const sizeToCss = (size: number | string) => {
    if (typeof size === 'string') {
        return size;
    }
    return `${size}px`;
};

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
    padding?: keyof typeof themeVars.spacing;
    paddingTop?: keyof typeof themeVars.spacing;
    paddingRight?: keyof typeof themeVars.spacing;
    paddingBottom?: keyof typeof themeVars.spacing;
    paddingLeft?: keyof typeof themeVars.spacing;
    overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowX?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowY?: 'hidden' | 'visible' | 'scroll' | 'auto';
    display?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    grow?: number;
    shrink?: number;

    testId?: string;
}>;

export const Box = forwardRef((props: BoxProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
        display,
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        overflow,
        overflowX,
        overflowY,
        alignItems,
        justifyContent,
        grow,
        shrink,
        style,
        testId,
        ...rest
    } = props;

    const styleInline: React.CSSProperties = {
        display: display ?? 'flex',
        width: width !== undefined ? sizeToCss(width) : undefined,
        height: height !== undefined ? sizeToCss(height) : undefined,
        maxWidth: maxWidth !== undefined ? sizeToCss(maxWidth) : undefined,
        maxHeight: maxHeight !== undefined ? sizeToCss(maxHeight) : undefined,
        minWidth: minWidth !== undefined ? sizeToCss(minWidth) : undefined,
        minHeight: minHeight !== undefined ? sizeToCss(minHeight) : undefined,
        padding: padding ? themeVars.spacing[padding] : undefined,
        paddingTop: paddingTop ? themeVars.spacing[paddingTop] : undefined,
        paddingRight: paddingRight ? themeVars.spacing[paddingRight] : undefined,
        paddingBottom: paddingBottom ? themeVars.spacing[paddingBottom] : undefined,
        paddingLeft: paddingLeft ? themeVars.spacing[paddingLeft] : undefined,
        overflow: overflow,
        overflowX: overflowX,
        overflowY: overflowY,
        alignItems,
        justifyContent,
        flexGrow: grow,
        flexShrink: shrink,
        ...style,
    };

    return <div {...rest} ref={ref} style={styleInline} data-testid={testId} />;
});
