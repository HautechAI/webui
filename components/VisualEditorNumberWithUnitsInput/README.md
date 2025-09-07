# VisualEditorNumberWithUnitsInput

## Purpose

Visual editor number with units input wrapper with port connectivity and keyframe timeline controls. Combines NumberWithUnitsInput primitive with external hover-based port and keyframe toggles.

## Parameters

| Parameter        | Type                                            | Description                                                   |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| isPort           | boolean                                         | Required port connection state - when true, input is disabled |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                  |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                              |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions            |
| value            | string                                          | Required input value                                          |
| onChange         | (value: string) => void                         | Optional callback for input value changes                     |
| units            | string                                          | Required current unit display (e.g., 'px', '%', 'em')         |
| availableUnits   | string[]                                        | Required array of available units for dropdown selection      |
| onChangeUnits    | (units: string) => void                         | Optional callback for unit selection changes                  |
| placeholder      | string                                          | Optional input placeholder text                               |
| disabled         | boolean                                         | Optional disabled state for the entire component              |
| size             | 'medium' \| 'small'                             | Optional size variant (defaults to 'small')                   |
| variation        | 'filled' \| 'outlined'                          | Optional input style variant (defaults to 'filled')           |
| leadingIcon      | React.ReactNode                                 | Optional icon element displayed at input start                |
| hasError         | boolean                                         | Optional error state styling                                  |
| className        | string                                          | Optional CSS class name for styling                           |
| testId           | string                                          | Optional test identifier                                      |

## Usage Example

```tsx
<VisualEditorNumberWithUnitsInput
    isPort={false}
    keyframesState="noKeyframes"
    value="100"
    units="px"
    availableUnits={['px', '%', 'em', 'rem']}
    onChange={(value) => console.log('Value changed:', value)}
    onChangeUnits={(units) => console.log('Units changed:', units)}
    onTogglePort={() => console.log('Port toggled')}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    variation="filled"
    size="small"
/>
```
