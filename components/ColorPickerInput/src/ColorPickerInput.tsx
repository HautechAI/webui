import { styled } from '@hautechai/webui.themeprovider';
import { TextInput, TextInputProps } from '@hautechai/webui.textinput';
import { Popover } from '@hautechai/webui.popover';
import ColorPickerContent, { HSVColor } from '@hautechai/webui.colorpickercontent';
import React, { useState, useCallback, useMemo } from 'react';
import { PopoverPosition } from 'react-tiny-popover';

// Color swatch component for leadingIcon
const ColorSwatch = styled.div<{ color: string; size: 'medium' | 'small' | number }>`
    width: ${({ size }) => {
        if (typeof size === 'number') return `${size}px`;
        return size === 'small' ? '16px' : '20px';
    }};
    height: ${({ size }) => {
        if (typeof size === 'number') return `${size}px`;
        return size === 'small' ? '16px' : '20px';
    }};
    border: none;
    border-radius: 4px;
    background: ${({ color }) => color};
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0; /* Prevent compression that could cause aspect ratio issues */

    /* Checkered background for transparency */
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 4px;
        background: repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 8px 8px;
        z-index: -1;
    }
`;

// Color utility functions
const hexToHsv = (hex: string): HSVColor => {
    // Remove # if present
    const cleanHex = hex.replace('#', '');

    // Default to white if invalid
    if (!/^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(cleanHex)) {
        return { h: 0, s: 0, v: 100, a: 1 };
    }

    let r = 0,
        g = 0,
        b = 0,
        a = 1;

    if (cleanHex.length === 6) {
        r = parseInt(cleanHex.slice(0, 2), 16);
        g = parseInt(cleanHex.slice(2, 4), 16);
        b = parseInt(cleanHex.slice(4, 6), 16);
    } else if (cleanHex.length === 8) {
        r = parseInt(cleanHex.slice(0, 2), 16);
        g = parseInt(cleanHex.slice(2, 4), 16);
        b = parseInt(cleanHex.slice(4, 6), 16);
        a = parseInt(cleanHex.slice(6, 8), 16) / 255;
    }

    // Convert RGB to HSV
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        if (max === r) {
            h = 60 * (((g - b) / delta) % 6);
        } else if (max === g) {
            h = 60 * ((b - r) / delta + 2);
        } else {
            h = 60 * ((r - g) / delta + 4);
        }
    }
    if (h < 0) h += 360;

    const s = max === 0 ? 0 : (delta / max) * 100;
    const v = max * 100;

    return { h, s, v, a };
};

const hsvToHex = (hsv: HSVColor, withAlpha: boolean = false): string => {
    const { h, s, v, a } = hsv;

    // Convert HSV to RGB
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

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const toHex = (n: number) => n.toString(16).padStart(2, '0');

    if (withAlpha) {
        const alphaHex = Math.round(a * 255)
            .toString(16)
            .padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`;
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export interface ColorPickerInputProps extends Omit<TextInputProps, 'leadingIcon' | 'type'> {
    /** Whether to enable alpha channel support */
    alphaEnabled?: boolean;
    /** Popover positioning directions */
    popoverDirection?: PopoverPosition[];
    /** Callback when color value changes */
    onColorChange?: (color: string) => void;
}

export const ColorPickerInput = (props: ColorPickerInputProps) => {
    const {
        alphaEnabled = false,
        popoverDirection = ['bottom', 'top', 'left', 'right'],
        value = '#000000',
        onChange,
        onColorChange,
        size = 'medium',
        ...textInputProps
    } = props;

    const [_isPopoverOpen, setIsPopoverOpen] = useState(false);

    // Convert hex value to HSV for color picker
    const hsvValue = useMemo(() => hexToHsv(value || '#000000'), [value]);

    // Create color swatch for leadingIcon
    const colorSwatch = useMemo(() => <ColorSwatch color={value || '#000000'} size={size} />, [value, size]);

    // Handle color change from color picker
    const handleColorChange = useCallback(
        (color: HSVColor) => {
            const hexColor = hsvToHex(color, alphaEnabled);

            // Create synthetic event for TextInput onChange
            const syntheticEvent = {
                target: { value: hexColor },
                currentTarget: { value: hexColor },
            } as React.ChangeEvent<HTMLInputElement>;

            onChange?.(syntheticEvent);
            onColorChange?.(hexColor);
        },
        [onChange, onColorChange, alphaEnabled],
    );

    // Handle opening popover (triggered by popover)
    const handleOpenPopover = useCallback(() => {
        setIsPopoverOpen(true);
    }, []);

    // Handle input change - format hex value
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let formattedValue = e.target.value.trim();

            // Auto-add # if missing and value looks like hex
            if (formattedValue && !formattedValue.startsWith('#') && /^[0-9A-Fa-f]+$/.test(formattedValue)) {
                formattedValue = `#${formattedValue}`;

                const syntheticEvent = {
                    target: { value: formattedValue },
                    currentTarget: { value: formattedValue },
                } as React.ChangeEvent<HTMLInputElement>;

                onChange?.(syntheticEvent);
                onColorChange?.(formattedValue);
            } else {
                onChange?.(e);
                onColorChange?.(e.target.value);
            }
        },
        [onChange, onColorChange],
    );

    return (
        <Popover
            contentPositions={popoverDirection}
            trigger={() => (
                <div onClick={handleOpenPopover}>
                    <TextInput
                        {...textInputProps}
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        size={size}
                        leadingIcon={colorSwatch}
                    />
                </div>
            )}
            content={() => (
                <ColorPickerContent value={hsvValue} onChange={handleColorChange} withAlpha={alphaEnabled} />
            )}
        />
    );
};
