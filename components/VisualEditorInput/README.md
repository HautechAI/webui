# VisualEditorInput

## Purpose

Visual editor input component with keyframe support, unit controls, and port connectivity. Combines text input functionality with keyframe timeline controls and dynamic trailing elements.

## Parameters

| Parameter        | Type                                            | Description                                                                        |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| value            | string                                          | Required input value                                                               |
| units            | string                                          | Required current unit display (e.g., 'px', '%', 'em')                              |
| availableUnits   | string[]                                        | Required array of available units for dropdown selection                           |
| isPort           | boolean                                         | Required port connection state - when true, input and keyframe toggle are disabled |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                                   |
| onChange         | (value: string) => void                         | Optional callback for input value changes                                          |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions                                 |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                                       |
| onChangeUnits    | (units: string) => void                         | Optional callback for unit selection changes                                       |
| className        | string                                          | Optional CSS class name for styling                                                |
| placeholder      | string                                          | Optional input placeholder text                                                    |
| disabled         | boolean                                         | Optional disabled state for the entire component                                   |
| leadingIcon      | React.ReactNode                                 | Optional icon element displayed at input start                                     |
| hasError         | boolean                                         | Optional error state styling                                                       |
| variation        | 'filled' \| 'outlined'                          | Optional input style variant (defaults to 'filled')                                |
| size             | 'medium' \| 'small'                             | Optional size variant (defaults to 'small')                                        |

## Usage Example

```tsx
<VisualEditorInput
    value="100"
    units="px"
    availableUnits={['px', '%', 'em', 'rem']}
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(value) => console.log('Value changed:', value)}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
    onChangeUnits={(units) => console.log('Units changed:', units)}
/>
```
