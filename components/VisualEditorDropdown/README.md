# VisualEditorDropdown

## Purpose

Visual editor dropdown wrapper with port connectivity and keyframe timeline controls. Combines Dropdown primitive with hover-based port and keyframe toggles.

## Parameters

| Parameter        | Type                                            | Description                                                      |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| isPort           | boolean                                         | Required port connection state - when true, dropdown is disabled |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                     |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                 |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions               |
| label            | string                                          | Optional dropdown label                                          |
| disabled         | boolean                                         | Optional disabled state for the entire component                 |
| type             | 'filled' \| 'outlined' \| 'flat'                | Optional dropdown style variant                                  |
| size             | 'xsmall' \| 'small' \| 'medium'                 | Optional size variant                                            |
| collapsed        | boolean                                         | Optional collapsed state                                         |
| value            | string                                          | Optional selected value                                          |
| options          | Array<{ label: string; value: string }>         | Required array of dropdown options                               |
| onChange         | (value: string) => void                         | Optional callback for value changes                              |
| hasError         | boolean                                         | Optional error state styling                                     |
| testId           | string                                          | Optional test identifier                                         |

## Usage Example

```tsx
<VisualEditorDropdown
    isPort={false}
    keyframesState="noKeyframes"
    value="option1"
    options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ]}
    onChange={(value) => console.log('Value changed:', value)}
    onTogglePort={() => console.log('Port toggled')}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    type="filled"
    size="medium"
/>
```
