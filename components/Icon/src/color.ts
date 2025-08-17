import { resolveColor, type IconColorProp } from '@hautechai/webui.themeprovider';

// Shared color prop type for all icons
export { IconColorProp };

/**
 * Resolve a color variable or value for icon fills/strokes.
 * This function delegates to the shared resolveColor utility in ThemeProvider.
 *
 * @param color - Color value (theme path, hex, rgba, or currentColor)
 * @returns Resolved color value, defaults to 'currentColor' for icons
 */
export function resolveIconColor(color?: IconColorProp): string {
    return resolveColor(color, 'currentColor');
}
