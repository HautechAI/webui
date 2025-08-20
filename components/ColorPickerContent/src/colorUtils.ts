// Color utility functions for ColorPickerContent

export interface HSVColor {
    h: number; // 0-360
    s: number; // 0-100
    v: number; // 0-100
    a: number; // 0-1
}

export interface RGBColor {
    r: number; // 0-255
    g: number; // 0-255
    b: number; // 0-255
    a: number; // 0-1
}

export interface HSLColor {
    h: number; // 0-360
    s: number; // 0-100
    l: number; // 0-100
    a: number; // 0-1
}

// Convert HSV to RGB
export function hsvToRgb(h: number, s: number, v: number): { r: number; g: number; b: number } {
    const c = (v / 100) * (s / 100);
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v / 100 - c;

    let r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}

// Convert RGB to HSV
export function rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h *= 60;
    }
    if (h < 0) h += 360;

    const s = max === 0 ? 0 : (delta / max) * 100;
    const v = max * 100;

    return { h, s, v };
}

// Convert RGB to HSL
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    const l = (max + min) / 2;

    let h = 0;
    let s = 0;

    if (delta !== 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h *= 60;
    }

    if (h < 0) h += 360;

    return { h, s: s * 100, l: l * 100 };
}

// Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}

// Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Convert HEX to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

// Validate HEX color
export function isValidHex(hex: string): boolean {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

// Clamp value between min and max
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

// Get hue color as RGB for a given hue value
export function getHueColor(hue: number): string {
    const { r, g, b } = hsvToRgb(hue, 100, 100);
    return `rgb(${r}, ${g}, ${b})`;
}
