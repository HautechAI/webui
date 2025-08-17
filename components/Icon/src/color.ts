import type { Paths } from 'type-fest';
import { cssVar, type ThemeType, type IconColorProp } from '@hautechai/webui.themeprovider';

// Shared color prop type for all icons
export { IconColorProp };

/**
 * Resolve a color variable or value for icon fills/strokes.
 * - If `color` is a palette path, returns the value from theme.palette
 * - If `color` is a literal (hex/rgba/currentColor), returns it as-is
 * - If `color` is undefined, falls back to 'currentColor'
 */
export function resolveIconColor(color?: IconColorProp): string {
    if (!color) return 'currentColor';

    // Literal colors and currentColor pass through
    if (color === 'currentColor') return color;
    if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('rgba('))) return color;

    // Otherwise treat as a theme palette path
    return cssVar(`palette.${String(color)}`);
}
