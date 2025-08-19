import { ThemeType } from './ThemeProvider';
import { Paths } from 'type-fest';

export type IconColorProp =
    | Paths<ThemeType['palette'], { leavesOnly: true }>
    | 'currentColor'
    | `#${string}`
    | `rgba(${string})`;

// Utility to convert nested theme object to CSS custom properties (no unit mutation)
const flattenTheme = (obj: Record<string, unknown>, prefix = '--theme'): Record<string, string> => {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        const cssKey = `${prefix}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;

        if (typeof value === 'object' && value !== null) {
            Object.assign(result, flattenTheme(value as Record<string, unknown>, cssKey));
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
    const cssPath = path
        .replace(/\./g, '-')
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase();
    return `var(--theme-${cssPath})`;
};

// Helper functions for common theme access patterns
export const themeVars = {
    // Foundation
    cornerRadius: {
        xs: `calc(${cssVar('foundation.cornerRadius.xs')} * 1px)`,
        s: `calc(${cssVar('foundation.cornerRadius.s')} * 1px)`,
        m: `calc(${cssVar('foundation.cornerRadius.m')} * 1px)`,
        l: `calc(${cssVar('foundation.cornerRadius.l')} * 1px)`,
        xl: `calc(${cssVar('foundation.cornerRadius.xl')} * 1px)`,
        xxl: `calc(${cssVar('foundation.cornerRadius.xxl')} * 1px)`,
    },
    spacing: {
        xs: `calc(${cssVar('foundation.spacing.xs')} * 1px)`,
        s: `calc(${cssVar('foundation.spacing.s')} * 1px)`,
        m: `calc(${cssVar('foundation.spacing.m')} * 1px)`,
        ml: `calc(${cssVar('foundation.spacing.ml')} * 1px)`,
        l: `calc(${cssVar('foundation.spacing.l')} * 1px)`,
        xl: `calc(${cssVar('foundation.spacing.xl')} * 1px)`,
        xxl: `calc(${cssVar('foundation.spacing.xxl')} * 1px)`,
        xxxl: `calc(${cssVar('foundation.spacing.xxxl')} * 1px)`,
    },
    stroke: {
        thin: `calc(${cssVar('foundation.stroke.thin')} * 1px)`,
        standard: `calc(${cssVar('foundation.stroke.standard')} * 1px)`,
        thick: `calc(${cssVar('foundation.stroke.thick')} * 1px)`,
        xthick: `calc(${cssVar('foundation.stroke.xthick')} * 1px)`,
    },
    animation: {
        duration: {
            fast: `calc(${cssVar('foundation.animation.duration.fast')} * 1s)`,
            normal: `calc(${cssVar('foundation.animation.duration.normal')} * 1s)`,
            slow: `calc(${cssVar('foundation.animation.duration.slow')} * 1s)`,
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

/**
 * Resolve a color variable or value for component styling.
 * This is a shared utility function for consistent color resolution across all components.
 *
 * @param color - Color value (theme path, hex, rgba, or currentColor)
 * @param fallback - Fallback color when color is undefined
 * @returns Resolved color value as CSS string
 */
export function resolveColor(color?: IconColorProp, fallback = 'currentColor'): string {
    if (!color) return fallback;

    // Literal colors and currentColor pass through
    if (color === 'currentColor') return color;
    if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('rgba('))) return color;

    // Otherwise treat as a theme palette path
    return cssVar(`palette.${String(color)}`);
}
