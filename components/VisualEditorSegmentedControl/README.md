# VisualEditorSegmentedControl

## Purpose

A visual editor component that combines a segmented control with port and keyframe toggles. The port and keyframe controls are always visible, making them easily accessible for visual editing workflows.

## Parameters

| Parameter        | Type                                                                                                     | Description                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| options          | Array<{ label?: string; value: string; leadingIcon?: React.ReactNode; trailingIcon?: React.ReactNode; }> | Array of options for the segmented control                           |
| value            | string                                                                                                   | Currently selected value                                             |
| onChange         | (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void                             | Callback function called when selection changes                      |
| isPort           | boolean                                                                                                  | Whether the component is in port mode                                |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe'                                                          | Current keyframe state                                               |
| onToggleKeyframe | () => void                                                                                               | Callback function called when keyframe toggle is clicked             |
| onTogglePort     | () => void                                                                                               | Callback function called when port toggle is clicked                 |
| className        | string                                                                                                   | Additional CSS class name                                            |
| disabled         | boolean                                                                                                  | Whether the component is disabled                                    |
| size             | 'medium' \| 'small'                                                                                      | Size of the component (defaults to 'small')                          |
| material         | boolean                                                                                                  | Whether to use material design styling                               |
| whitespace       | keyof ThemeType['foundation']['spacing']                                                                 | Whitespace configuration                                             |
| stretch          | boolean                                                                                                  | Whether the segmented control should stretch to fill available space |
| testId           | string                                                                                                   | Test identifier for the component                                    |

## Usage Example

```tsx
import { VisualEditorSegmentedControl } from '@hautechai/webui.visualeditorsegmentedcontrol';

const options = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
];

<VisualEditorSegmentedControl
    options={options}
    value="center"
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(event, value) => console.log('Selected:', value)}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
/>;
```
