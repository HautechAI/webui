# VisualEditorSegmentedControl

## Purpose

Visual editor segmented control wrapper with port connectivity and keyframe timeline controls. Combines SegmentedControl primitive with external adjacent port and keyframe toggles cluster.

## Parameters

| Parameter        | Type                                            | Description                                                                        |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| isPort           | boolean                                         | Required port connection state - affects toggle visibility                        |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                                       |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                                   |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions                                 |
| options          | Array<{ value: string; label?: string; leadingIcon?: React.ReactNode; trailingIcon?: React.ReactNode }> | Required array of segmented control options |
| defaultValue     | string                                          | Optional default selected value                                                    |
| value            | string                                          | Optional controlled selected value                                                 |
| onChange         | (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void | Optional callback for value changes |
| material         | boolean                                         | Optional material design styling                                                   |
| whitespace       | keyof ThemeType['foundation']['spacing']       | Optional whitespace variant                                                        |
| stretch          | boolean                                         | Optional stretch to fill container                                                 |
| size             | 'default' \| 'small'                            | Optional size variant (defaults to 'default')                                      |
| disabled         | boolean                                         | Optional disabled state for the entire component                                   |
| className        | string                                          | Optional CSS class name for styling                                                |
| testId           | string                                          | Optional test identifier                                                           |

## Usage Example

```tsx
<VisualEditorSegmentedControl
    isPort={false}
    keyframesState="noKeyframes"
    options={[
        { value: "left", label: "Left" },
        { value: "center", label: "Center" },
        { value: "right", label: "Right" }
    ]}
    value="center"
    onChange={(event, value) => console.log('Value changed:', value)}
    onTogglePort={() => console.log('Port toggled')}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    size="default"
/>
```