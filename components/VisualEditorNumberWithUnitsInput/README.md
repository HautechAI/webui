# VisualEditorNumberWithUnitsInput

## Purpose

A visual editor number input component that combines the number input functionality with units selection, port management, and keyframe support. This component allows users to enter numeric values with units while providing visual editor features like keyframe animation controls and port connectivity for visual programming interfaces.

## Parameters

| Parameter        | Type                                            | Description                                                        |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| value            | string                                          | The current input value                                            |
| onChange         | (value: string) => void                         | Callback fired when the input value changes                        |
| units            | string                                          | The currently selected units                                       |
| availableUnits   | string[]                                        | Array of available unit options for the dropdown                   |
| onChangeUnits    | (units: string) => void                         | Callback fired when units selection changes                        |
| isPort           | boolean                                         | Whether the input is in port mode (connected to another component) |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Current state of keyframe animation                                |
| onToggleKeyframe | () => void                                      | Callback fired when keyframe toggle button is clicked              |
| onTogglePort     | () => void                                      | Callback fired when port toggle button is clicked                  |
| placeholder      | string                                          | Placeholder text for the input field                               |
| disabled         | boolean                                         | Whether the input is disabled                                      |
| size             | 'medium' \| 'small'                             | Size variant of the input (defaults to 'small')                    |
| variation        | 'filled' \| 'outlined'                          | Visual style variant (defaults to 'filled')                        |
| leadingIcon      | React.ReactNode                                 | Icon to display at the beginning of the input                      |
| hasError         | boolean                                         | Whether the input has an error state                               |
| className        | string                                          | Additional CSS class name                                          |
| testId           | string                                          | Test identifier for automated testing                              |

## Usage Example

```tsx
import { VisualEditorNumberWithUnitsInput } from '@hautechai/webui.visualeditornumberwithunitsinput';

<VisualEditorNumberWithUnitsInput
    value="100"
    units="px"
    availableUnits={['px', '%', 'em', 'rem']}
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(value) => console.log('Value changed:', value)}
    onChangeUnits={(units) => console.log('Units changed:', units)}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
    placeholder="Enter numeric value"
/>;
```
