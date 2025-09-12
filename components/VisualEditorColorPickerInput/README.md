# VisualEditorColorPickerInput

## Purpose

A visual editor color picker input component that combines color selection with keyframe support and port connectivity for timeline-based editing interfaces. It extends ColorPickerInput with hover controls for port toggle and keyframes management.

## Parameters

| Parameter        | Type                                            | Description                                                 |
| ---------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| value            | string                                          | The current color value (hex, rgb, etc.)                    |
| isPort           | boolean                                         | Whether this input is currently connected as a port         |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | The current keyframe state of the input                     |
| onChange         | (color: string) => void                         | Callback when the color value changes                       |
| onToggleKeyframe | () => void                                      | Callback when the keyframe toggle button is clicked         |
| onTogglePort     | () => void                                      | Callback when the port toggle button is clicked             |
| className        | string                                          | Additional CSS class names for the container                |
| placeholder      | string                                          | Placeholder text for the input field                        |
| disabled         | boolean                                         | Whether the input is disabled                               |
| hasError         | boolean                                         | Whether the input has an error state                        |
| variation        | 'filled' \| 'outlined'                          | Visual style variation of the input                         |
| size             | 'medium' \| 'small'                             | Size of the input component                                 |
| testId           | string                                          | Test identifier for the component                           |
| alphaEnabled     | boolean                                         | Whether to enable alpha channel support in the color picker |

## Usage Example

```tsx
import { VisualEditorColorPickerInput } from '@hautechai/webui.visualeditorcolorpickerinput';

<VisualEditorColorPickerInput
    value="#ff6b35"
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(color) => console.log('Color changed:', color)}
    onToggleKeyframe={() => console.log('Toggle keyframe')}
    onTogglePort={() => console.log('Toggle port')}
    alphaEnabled={true}
    placeholder="Choose color"
/>;
```
