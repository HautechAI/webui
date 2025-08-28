# ColorPickerInput

## Purpose

Color picker input component based on TextInput with popover color selection, supporting hex color values with optional alpha channel.

## Parameters

| Parameter        | Type                                             | Description                                                                   |
| ---------------- | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| alphaEnabled     | boolean                                          | Optional whether to enable alpha channel support (default: false)             |
| popoverDirection | PopoverPosition[]                                | Optional popover positioning directions (default: bottom, top, left, right)   |
| onColorChange    | (color: string) => void                          | Optional callback when color value changes                                    |
| value            | string                                           | Optional hex color value (default: #000000)                                   |
| onChange         | (e: React.ChangeEvent<HTMLInputElement>) => void | Optional input change handler                                                 |
| size             | 'medium' \| 'small'                              | Optional input size (default: medium)                                         |
| placeholder      | string                                           | Optional placeholder text                                                     |
| disabled         | boolean                                          | Optional disabled state                                                       |
| className        | string                                           | Optional CSS class name                                                       |
| hasError         | boolean                                          | Optional error state                                                          |
| variation        | 'filled' \| 'outlined'                           | Optional input style variation (default: filled)                              |
| hoverControls    | React.ReactNode                                  | Optional controls displayed on hover/focus with xs gap from trailing elements |

## Usage Example

```tsx
import { ColorPickerInput } from '@hautechai/webui.colorpickerinput';

const MyComponent = () => {
    const [color, setColor] = useState('#FF0000');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onColorChange={(color) => setColor(color)}
            alphaEnabled={true}
            placeholder="Select a color"
        />
    );
};
```
