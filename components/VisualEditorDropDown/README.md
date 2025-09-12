# VisualEditorDropDown

## Purpose

A dropdown component for visual editors that provides option selection with keyframe timeline support and port state management. Based on the Dropdown component, it adds hover controls for workflow integration and keyframe toggle functionality.

## Parameters

| Parameter        | Type                                    | Description                                                      |
| ---------------- | --------------------------------------- | ---------------------------------------------------------------- |
| value            | string                                  | The currently selected option value                              |
| options          | Array<{ label: string; value: string }> | Array of selectable options                                      |
| isPort           | boolean                                 | Whether the component is in port mode (shows UnlinkIcon)         |
| keyframesState   | KeyframeToggleState                     | State of keyframes ('noKeyframes', 'hasKeyframes', 'isKeyframe') |
| onChange         | (value: string) => void                 | Callback when the selected value changes                         |
| onToggleKeyframe | () => void                              | Callback when the keyframe toggle is clicked                     |
| onTogglePort     | () => void                              | Callback when the port toggle button is clicked                  |
| label            | string                                  | Label text to display when no option is selected                 |
| disabled         | boolean                                 | Whether the dropdown is disabled                                 |
| hasError         | boolean                                 | Whether to display error styling                                 |
| type             | 'filled' \| 'outlined' \| 'flat'        | Visual style variant of the dropdown                             |
| size             | 'medium' \| 'small'                     | Size variant of the dropdown                                     |
| collapsed        | boolean                                 | Whether to show the dropdown in collapsed mode                   |
| className        | string                                  | Additional CSS classes                                           |
| testId           | string                                  | Test identifier for the component                                |

## Usage Example

```tsx
const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
];

<VisualEditorDropDown
    value="opt1"
    options={options}
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(value) => console.log('Selected:', value)}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
    label="Select an option"
/>;
```
