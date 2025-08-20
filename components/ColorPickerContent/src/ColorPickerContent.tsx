import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Dropdown } from '@hautechai/webui.dropdown';
import { TextInput } from '@hautechai/webui.textinput';
import { Tooltip } from '@hautechai/webui.tooltip';
import { ColorPickerIcon } from '@hautechai/webui.icon';
import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import {
    HSVColor,
    RGBColor,
    HSLColor,
    hsvToRgb,
    rgbToHsv,
    rgbToHsl,
    hslToRgb,
    rgbToHex,
    hexToRgb,
    isValidHex,
    clamp,
    getHueColor,
} from './colorUtils';

// Export types for external use
export type { HSVColor, RGBColor, HSLColor };

// Main container
const Container = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.l};
    box-sizing: border-box;
`;

// Color palette section with SV panel and controls
const ColorPalette = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.m};
    box-sizing: border-box;
`;

// SV Panel - Saturation/Value 2D picker
const SVPanel = styled.div`
    position: relative;
    width: 100%;
    height: 160px;
    min-height: 160px;
    border-radius: ${themeVars.cornerRadius.s};
    cursor: crosshair;
    background:
        linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%),
        linear-gradient(90deg, white 0%, var(--hue-color, #ff0000) 100%);
    box-sizing: border-box;
    outline: none;
    user-select: none;

    &:focus {
        outline: none;
    }
`;

// SV Panel handle
const SVHandle = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 4px solid ${themeVars.layout.surfaceLow};
    background: var(--handle-color, #ff0000);
    box-shadow: ${themeVars.elevation.one};
    pointer-events: none;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
`;

// Controls container for eyedropper and sliders
const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.m};
    box-sizing: border-box;
`;

// Eyedropper button
const EyedropperButton = styled.button`
    padding: ${themeVars.spacing.m};
    border-radius: ${themeVars.cornerRadius.m};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background: ${themeVars.layout.surfaceMid};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
            background: transparent;
        }
    }
`;

// Sliders container
const Sliders = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.m};
    box-sizing: border-box;
`;

// Base slider track styling
const SliderTrack = styled.div`
    position: relative;
    height: 16px;
    border-radius: 32px;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    user-select: none;

    &:focus {
        outline: none;
    }
`;

// Hue slider with rainbow gradient
const HueSlider = styled(SliderTrack)`
    background: linear-gradient(
        90deg,
        #ff0000 0%,
        #ffd400 16.67%,
        #34ff00 33.33%,
        #00eaff 50%,
        #1700ff 66.67%,
        #ff00ea 83.33%,
        #ff0000 100%
    );
`;

// Alpha slider with checkerboard background
const AlphaSlider = styled(SliderTrack)`
    background:
        linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, var(--alpha-color, #ff0000) 100%),
        repeating-conic-gradient(${themeVars.layout.strokes} 0% 25%, transparent 0% 50%) 50% / 8px 8px;
`;

// Slider handle
const SliderHandle = styled.div`
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 4px solid ${themeVars.layout.surfaceLow};
    background: var(--handle-color, #ff0000);
    box-shadow: ${themeVars.elevation.one};
    pointer-events: none;
    transform: translate(-50%, 0);
    box-sizing: border-box;
`;

// Inputs section
const InputsSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.l};
    box-sizing: border-box;
`;

// Format dropdown container
const FormatSelect = styled.div`
    width: 80px;
    box-sizing: border-box;
`;

// Color inputs container
const ColorInputs = styled.div`
    flex: 1;
    display: flex;
    gap: ${themeVars.spacing.m};
    box-sizing: border-box;
`;

// Alpha input container
const AlphaInputContainer = styled.div`
    width: 52px;
    box-sizing: border-box;
`;

export interface ColorPickerContentProps {
    /** Current color value in HSV format */
    value?: HSVColor;
    /** Callback when color changes */
    onChange?: (color: HSVColor) => void;
    /** Whether to show alpha controls */
    withAlpha?: boolean;
}

type ColorFormat = 'HEX' | 'RGB' | 'HSL';

const formatOptions = [
    { label: 'HEX', value: 'HEX' as ColorFormat },
    { label: 'RGB', value: 'RGB' as ColorFormat },
    { label: 'HSL', value: 'HSL' as ColorFormat },
];

export const ColorPickerContent: React.FC<ColorPickerContentProps> = ({
    value = { h: 0, s: 100, v: 100, a: 1 },
    onChange,
    withAlpha = true,
}) => {
    const [colorFormat, setColorFormat] = useState<ColorFormat>('HEX');
    const [isDragging, setIsDragging] = useState<'sv' | 'hue' | 'alpha' | null>(null);
    const [inputValue, setInputValue] = useState('');

    const svPanelRef = useRef<HTMLDivElement>(null);
    const hueSliderRef = useRef<HTMLDivElement>(null);
    const alphaSliderRef = useRef<HTMLDivElement>(null);

    // Check if EyeDropper API is supported
    const isEyeDropperSupported = 'EyeDropper' in window;

    // Convert current HSV to other formats for display
    const currentRgb = useMemo(() => {
        const { r, g, b } = hsvToRgb(value.h, value.s, value.v);
        return { r, g, b, a: value.a };
    }, [value]);

    const currentHsl = useMemo(() => {
        const { h, s, l } = rgbToHsl(currentRgb.r, currentRgb.g, currentRgb.b);
        return { h, s, l, a: value.a };
    }, [currentRgb]);

    const currentHex = useMemo(() => {
        return rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);
    }, [currentRgb]);

    // Get colors for visual elements
    const hueColor = useMemo(() => getHueColor(value.h), [value.h]);
    const handleColor = useMemo(() => `rgba(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b}, 1)`, [currentRgb]);
    const alphaGradientColor = useMemo(() => `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`, [currentRgb]);

    // Update input value when color changes
    useEffect(() => {
        if (isDragging) return; // Don't update input while dragging

        switch (colorFormat) {
            case 'HEX': {
                setInputValue(currentHex);
                break;
            }
            case 'RGB': {
                setInputValue(`${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b}`);
                break;
            }
            case 'HSL': {
                setInputValue(
                    `${Math.round(currentHsl.h)}, ${Math.round(currentHsl.s)}%, ${Math.round(currentHsl.l)}%`,
                );
                break;
            }
        }
    }, [colorFormat, currentHex, currentRgb, currentHsl, isDragging]);

    // Handle SV panel interactions
    const handleSVPanelMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (!svPanelRef.current) return;

            setIsDragging('sv');
            const rect = svPanelRef.current.getBoundingClientRect();
            const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
            const y = clamp((e.clientY - rect.top) / rect.height, 0, 1);

            const newColor = {
                ...value,
                s: x * 100,
                v: (1 - y) * 100,
            };
            onChange?.(newColor);
        },
        [value, onChange],
    );

    // Handle hue slider interactions
    const handleHueSliderMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (!hueSliderRef.current) return;

            setIsDragging('hue');
            const rect = hueSliderRef.current.getBoundingClientRect();
            const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);

            const newColor = {
                ...value,
                h: x * 360,
            };
            onChange?.(newColor);
        },
        [value, onChange],
    );

    // Handle alpha slider interactions
    const handleAlphaSliderMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (!alphaSliderRef.current || !withAlpha) return;

            setIsDragging('alpha');
            const rect = alphaSliderRef.current.getBoundingClientRect();
            const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);

            const newColor = {
                ...value,
                a: x,
            };
            onChange?.(newColor);
        },
        [value, onChange, withAlpha],
    );

    // Handle mouse move during drag
    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            switch (isDragging) {
                case 'sv': {
                    if (!svPanelRef.current) return;
                    const svRect = svPanelRef.current.getBoundingClientRect();
                    const svX = clamp((e.clientX - svRect.left) / svRect.width, 0, 1);
                    const svY = clamp((e.clientY - svRect.top) / svRect.height, 0, 1);
                    onChange?.({ ...value, s: svX * 100, v: (1 - svY) * 100 });
                    break;
                }

                case 'hue': {
                    if (!hueSliderRef.current) return;
                    const hueRect = hueSliderRef.current.getBoundingClientRect();
                    const hueX = clamp((e.clientX - hueRect.left) / hueRect.width, 0, 1);
                    onChange?.({ ...value, h: hueX * 360 });
                    break;
                }

                case 'alpha': {
                    if (!alphaSliderRef.current) return;
                    const alphaRect = alphaSliderRef.current.getBoundingClientRect();
                    const alphaX = clamp((e.clientX - alphaRect.left) / alphaRect.width, 0, 1);
                    onChange?.({ ...value, a: alphaX });
                    break;
                }
            }
        };

        const handleMouseUp = () => {
            setIsDragging(null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, value, onChange]);

    // Handle eyedropper
    const handleEyedropper = useCallback(async () => {
        if (!isEyeDropperSupported) return;

        try {
            // @ts-ignore - EyeDropper is not in TypeScript types yet
            const eyeDropper = new EyeDropper();
            const result = await eyeDropper.open();
            const hex = result.sRGBHex;
            const rgb = hexToRgb(hex);

            if (rgb) {
                const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
                onChange?.({ h: hsv.h, s: hsv.s, v: hsv.v, a: value.a });
            }
        } catch {
            // User cancelled or error occurred - silently handle
        }
    }, [isEyeDropperSupported, onChange, value.a]);

    // Handle input value changes
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setInputValue(newValue);

            switch (colorFormat) {
                case 'HEX': {
                    if (isValidHex(newValue)) {
                        const rgb = hexToRgb(newValue);
                        if (rgb) {
                            const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
                            onChange?.({ h: hsv.h, s: hsv.s, v: hsv.v, a: value.a });
                        }
                    }
                    break;
                }

                case 'RGB': {
                    const rgbMatch = newValue.match(/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/);
                    if (rgbMatch) {
                        const r = clamp(parseInt(rgbMatch[1]), 0, 255);
                        const g = clamp(parseInt(rgbMatch[2]), 0, 255);
                        const b = clamp(parseInt(rgbMatch[3]), 0, 255);
                        const hsv = rgbToHsv(r, g, b);
                        onChange?.({ h: hsv.h, s: hsv.s, v: hsv.v, a: value.a });
                    }
                    break;
                }

                case 'HSL': {
                    const hslMatch = newValue.match(/^\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*$/);
                    if (hslMatch) {
                        const h = clamp(parseInt(hslMatch[1]), 0, 360);
                        const s = clamp(parseInt(hslMatch[2]), 0, 100);
                        const l = clamp(parseInt(hslMatch[3]), 0, 100);
                        const rgb = hslToRgb(h, s, l);
                        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
                        onChange?.({ h: hsv.h, s: hsv.s, v: hsv.v, a: value.a });
                    }
                    break;
                }
            }
        },
        [colorFormat, onChange, value.a],
    );

    // Handle alpha input changes
    const handleAlphaChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const alphaValue = e.target.value.replace('%', '');
            const numValue = parseFloat(alphaValue);
            if (!isNaN(numValue)) {
                const alpha = clamp(numValue / 100, 0, 1);
                onChange?.({ ...value, a: alpha });
            }
        },
        [value, onChange],
    );

    // Calculate positions for handles
    const svHandlePosition = {
        left: `${value.s}%`,
        top: `${100 - value.v}%`,
    };

    const hueHandlePosition = {
        left: `${(value.h / 360) * 100}%`,
    };

    const alphaHandlePosition = {
        left: `${value.a * 100}%`,
    };

    return (
        <Container>
            <ColorPalette>
                <SVPanel
                    ref={svPanelRef}
                    style={{ ['--hue-color' as string]: hueColor }}
                    onMouseDown={handleSVPanelMouseDown}
                    tabIndex={0}
                >
                    <SVHandle
                        style={{
                            ...svHandlePosition,
                            ['--handle-color' as string]: handleColor,
                        }}
                    />
                </SVPanel>

                <Controls>
                    {isEyeDropperSupported ? (
                        <EyedropperButton onClick={handleEyedropper} aria-label="Pick color from screen">
                            <ColorPickerIcon size={20} />
                        </EyedropperButton>
                    ) : (
                        <Tooltip text="Eyedropper not supported in this browser">
                            <EyedropperButton disabled aria-label="Eyedropper not supported">
                                <ColorPickerIcon size={20} />
                            </EyedropperButton>
                        </Tooltip>
                    )}

                    <Sliders>
                        <HueSlider ref={hueSliderRef} onMouseDown={handleHueSliderMouseDown} tabIndex={0}>
                            <SliderHandle
                                style={{
                                    ...hueHandlePosition,
                                    ['--handle-color' as string]: hueColor,
                                }}
                            />
                        </HueSlider>

                        {withAlpha && (
                            <AlphaSlider
                                ref={alphaSliderRef}
                                style={{ ['--alpha-color' as string]: alphaGradientColor }}
                                onMouseDown={handleAlphaSliderMouseDown}
                                tabIndex={0}
                            >
                                <SliderHandle
                                    style={{
                                        ...alphaHandlePosition,
                                        ['--handle-color' as string]: handleColor,
                                    }}
                                />
                            </AlphaSlider>
                        )}
                    </Sliders>
                </Controls>
            </ColorPalette>

            <InputsSection>
                <FormatSelect>
                    <Dropdown
                        size="small"
                        options={formatOptions}
                        value={colorFormat}
                        onChange={(format) => setColorFormat(format as ColorFormat)}
                    />
                </FormatSelect>

                <ColorInputs>
                    <TextInput type="text" value={inputValue} onChange={handleInputChange} size="small" />

                    {withAlpha && (
                        <AlphaInputContainer>
                            <TextInput
                                type="text"
                                value={`${Math.round(value.a * 100)}%`}
                                onChange={handleAlphaChange}
                                size="small"
                            />
                        </AlphaInputContainer>
                    )}
                </ColorInputs>
            </InputsSection>
        </Container>
    );
};
