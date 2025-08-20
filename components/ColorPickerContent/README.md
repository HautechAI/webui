# ColorPickerContent

## Purpose

Color picker content component with SV panel, hue/alpha sliders, eyedropper, and format inputs for comprehensive color selection.

## Parameters

| Parameter | Type                      | Description                                             |
| --------- | ------------------------- | ------------------------------------------------------- |
| value     | HSVColor                  | Optional current color value in HSV format              |
| onChange  | (color: HSVColor) => void | Optional callback when color changes                    |
| withAlpha | boolean                   | Optional whether to show alpha controls (default: true) |

## Usage Example

```tsx
import { ColorPickerContent } from '@hautechai/webui.colorpickercontent';

const MyComponent = () => {
    const [color, setColor] = useState({ h: 0, s: 100, v: 100, a: 1 });

    return <ColorPickerContent value={color} onChange={setColor} withAlpha={true} />;
};
```

## Features

- **SV Panel**: 2D gradient square for saturation and value selection with draggable handle
- **Hue Slider**: Horizontal rainbow gradient (0-360°) with draggable handle
- **Alpha Slider**: Horizontal checkerboard background with color gradient (0-100% alpha) and draggable handle
- **Eyedropper Button**: Uses browser EyeDropper API if available, disabled with tooltip if not supported
- **Color Format Inputs**:
    - Format dropdown with HEX, RGB, HSL options
    - Color value input with format-specific validation
    - Alpha percentage input (0-100%)
- **Two Modes**: With or without alpha channel controls
- **Accessibility**: Proper focus management, keyboard navigation, and ARIA labels
