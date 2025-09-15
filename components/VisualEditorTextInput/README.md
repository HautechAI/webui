# VisualEditorTextInput

## Purpose

Visual editor text input component with keyframe support and port connectivity. Combines text input functionality with keyframe timeline controls and port connection management for visual editing interfaces.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.visualeditortextinput

# npm
npm install @hautechai/webui.visualeditortextinput

# yarn
yarn add @hautechai/webui.visualeditortextinput
```

## Parameters

| Parameter        | Type                                            | Description                                                                        |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| value            | string                                          | Required input value                                                               |
| isPort           | boolean                                         | Required port connection state - when true, input and keyframe toggle are disabled |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                                   |
| onChange         | (value: string) => void                         | Optional callback for input value changes                                          |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions                                 |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                                       |
| className        | string                                          | Optional CSS class name for styling                                                |
| placeholder      | string                                          | Optional input placeholder text                                                    |
| disabled         | boolean                                         | Optional disabled state for the entire component                                   |
| leadingIcon      | React.ReactNode                                 | Optional icon element displayed at input start                                     |
| trailingIcon     | React.ReactNode                                 | Optional icon element displayed at input end (hidden when port controls visible)   |
| hasError         | boolean                                         | Optional error state styling                                                       |
| variation        | 'filled' \| 'outlined'                          | Optional input style variant (defaults to 'filled')                                |
| size             | 'medium' \| 'small'                             | Optional size variant (defaults to 'small')                                        |
| type             | 'text' \| 'password' \| 'email'                 | Optional input type (defaults to 'text')                                           |

## Usage Example

```tsx
<VisualEditorTextInput
    value="Hello World"
    isPort={false}
    keyframesState="noKeyframes"
    onChange={(value) => console.log('Value changed:', value)}
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
    placeholder="Enter text"
    type="text"
/>
```
