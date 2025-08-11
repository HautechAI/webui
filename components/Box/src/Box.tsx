import { css } from '@linaria/core';
import { useTheme, ThemeType } from '@hautechai/webui.themeprovider';
import { forwardRef, PropsWithChildren, useMemo } from 'react';

const sizeToCss = (size: number | string) => {
    if (typeof size === 'string') {
        return size;
    }
    return `${size}px`;
};

const baseBoxClass = css`
    display: flex;
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

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    const {
        className,
        children,
        style,
        id,
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
        display,
        alignItems,
        justifyContent,
        grow,
        shrink,
        ...restProps
    } = props;

    const theme = useTheme();
    
    const inlineStyles = useMemo(() => {
        const styles: React.CSSProperties = {};
        
        if (display !== undefined) styles.display = display;
        if (width !== undefined) styles.width = sizeToCss(width);
        if (height !== undefined) styles.height = sizeToCss(height);
        if (maxWidth !== undefined) styles.maxWidth = sizeToCss(maxWidth);
        if (maxHeight !== undefined) styles.maxHeight = sizeToCss(maxHeight);
        if (minWidth !== undefined) styles.minWidth = sizeToCss(minWidth);
        if (minHeight !== undefined) styles.minHeight = sizeToCss(minHeight);
        
        if (padding !== undefined) styles.padding = `${theme.foundation.spacing[padding]}px`;
        if (paddingTop !== undefined) styles.paddingTop = `${theme.foundation.spacing[paddingTop]}px`;
        if (paddingRight !== undefined) styles.paddingRight = `${theme.foundation.spacing[paddingRight]}px`;
        if (paddingBottom !== undefined) styles.paddingBottom = `${theme.foundation.spacing[paddingBottom]}px`;
        if (paddingLeft !== undefined) styles.paddingLeft = `${theme.foundation.spacing[paddingLeft]}px`;
        
        if (overflow !== undefined) styles.overflow = overflow;
        if (overflowX !== undefined) styles.overflowX = overflowX;
        if (overflowY !== undefined) styles.overflowY = overflowY;
        
        if (alignItems !== undefined) styles.alignItems = alignItems;
        if (justifyContent !== undefined) styles.justifyContent = justifyContent;
        
        if (grow !== undefined) styles.flexGrow = grow;
        if (shrink !== undefined) styles.flexShrink = shrink;
        
        return { ...styles, ...style };
    }, [
        theme,
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
    ]);

    const combinedClassName = className ? `${baseBoxClass} ${className}` : baseBoxClass;

    return (
        <div
            ref={ref}
            className={combinedClassName}
            style={inlineStyles}
            id={id}
            {...restProps}
        >
            {children}
        </div>
    );
});
