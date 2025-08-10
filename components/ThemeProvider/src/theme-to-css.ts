import { ThemeType } from './ThemeProvider';

// Utility to convert nested theme object to CSS custom properties
const flattenTheme = (obj: any, prefix = '--theme'): Record<string, string> => {
    const result: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(obj)) {
        const cssKey = `${prefix}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        
        if (typeof value === 'object' && value !== null) {
            Object.assign(result, flattenTheme(value, cssKey));
        } else {
            result[cssKey] = String(value);
        }
    }
    
    return result;
};

export const themeToCssProperties = (theme: ThemeType): Record<string, string> => {
    return flattenTheme(theme);
};

// Utility to get CSS custom property name from theme path
export const cssVar = (path: string): string => {
    const cssPath = path.replace(/\./g, '-').replace(/([A-Z])/g, '-$1').toLowerCase();
    return `var(--theme-${cssPath})`;
};

// Helper functions for common theme access patterns
export const themeVars = {
    // Foundation
    cornerRadius: {
        xs: cssVar('foundation.cornerRadius.xs'),
        s: cssVar('foundation.cornerRadius.s'),
        m: cssVar('foundation.cornerRadius.m'),
        l: cssVar('foundation.cornerRadius.l'),
        xl: cssVar('foundation.cornerRadius.xl'),
        xxl: cssVar('foundation.cornerRadius.xxl'),
    },
    spacing: {
        xs: cssVar('foundation.spacing.xs'),
        s: cssVar('foundation.spacing.s'),
        m: cssVar('foundation.spacing.m'),
        ml: cssVar('foundation.spacing.ml'),
        l: cssVar('foundation.spacing.l'),
        xl: cssVar('foundation.spacing.xl'),
        xxl: cssVar('foundation.spacing.xxl'),
        xxxl: cssVar('foundation.spacing.xxxl'),
    },
    stroke: {
        thin: cssVar('foundation.stroke.thin'),
        standard: cssVar('foundation.stroke.standard'),
        thick: cssVar('foundation.stroke.thick'),
        xthick: cssVar('foundation.stroke.xthick'),
    },
    animation: {
        duration: {
            fast: cssVar('foundation.animation.duration.fast'),
            normal: cssVar('foundation.animation.duration.normal'),
            slow: cssVar('foundation.animation.duration.slow'),
        },
        timing: {
            ease: cssVar('foundation.animation.timing.ease'),
            easeOut: cssVar('foundation.animation.timing.ease-out'),
            easeInOut: cssVar('foundation.animation.timing.ease-in-out'),
            customBounce: cssVar('foundation.animation.timing.custom-bounce'),
        },
    },
    elevation: {
        one: cssVar('foundation.elevation.one'),
        two: cssVar('foundation.elevation.two'),
    },
    // Palette
    layout: {
        surfaceLow: cssVar('palette.layout.surface-low'),
        surfaceMid: cssVar('palette.layout.surface-mid'),
        surfaceHigh: cssVar('palette.layout.surface-high'),
        strokes: cssVar('palette.layout.strokes'),
        skrim: cssVar('palette.layout.skrim'),
        onSurface: {
            primary: cssVar('palette.layout.on-surface.primary'),
            secondary: cssVar('palette.layout.on-surface.secondary'),
            tertiary: cssVar('palette.layout.on-surface.tertiary'),
        },
    },
    actions: {
        primary: cssVar('palette.actions.primary'),
        onPrimary: cssVar('palette.actions.on-primary'),
        secondary: cssVar('palette.actions.secondary'),
        onSecondary: cssVar('palette.actions.on-secondary'),
        tertiary: cssVar('palette.actions.tertiary'),
        onTertiary: cssVar('palette.actions.on-tertiary'),
        neutral: cssVar('palette.actions.neutral'),
        onNeutral: cssVar('palette.actions.on-neutral'),
        success: cssVar('palette.actions.success'),
        onSuccess: cssVar('palette.actions.on-success'),
        error: cssVar('palette.actions.error'),
        onError: cssVar('palette.actions.on-error'),
    },
};