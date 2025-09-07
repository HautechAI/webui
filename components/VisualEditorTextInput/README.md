# VisualEditorTextInput

## Purpose

Visual editor text input wrapper with port connectivity and keyframe timeline controls. Combines TextInput primitive with hover-based port and keyframe toggles.

## Parameters

| Parameter        | Type                                            | Description                                                                        |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| isPort           | boolean                                         | Required port connection state - when true, input is disabled                     |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                                       |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                                   |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions                                 |
| value            | string                                          | Optional input value                                                               |
| onChange         | (e: React.ChangeEvent<HTMLInputElement>) => void | Optional callback for input value changes                                          |
| placeholder      | string                                          | Optional input placeholder text                                                    |
| disabled         | boolean                                         | Optional disabled state for the entire component                                   |
| leadingIcon      | React.ReactNode                                 | Optional icon element displayed at input start                                     |
| trailingIcon     | React.ReactNode                                 | Optional icon element displayed at input end                                       |
| hasError         | boolean                                         | Optional error state styling                                                       |
| variation        | 'filled' \| 'outlined'                          | Optional input style variant (defaults to 'filled')                                |
| size             | 'medium' \| 'small'                             | Optional size variant (defaults to 'medium')                                       |
| className        | string                                          | Optional CSS class name for styling                                                |
| testId           | string                                          | Optional test identifier                                                           |
| type             | 'text' \| 'password' \| 'email' \| 'number'     | Optional input type (defaults to 'text')                                           |
| step             | number                                          | Optional step value for number inputs                                              |

## Usage Example

```tsx
<VisualEditorTextInput
    isPort={false}
    keyframesState="noKeyframes"
    value="Sample text"
    onChange={(e) => console.log('Value changed:', e.target.value)}
    onTogglePort={() => console.log('Port toggled')}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    placeholder="Enter text..."
    variation="filled"
    size="medium"
/>
```