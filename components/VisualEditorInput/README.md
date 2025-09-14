# VisualEditorInput

## Purpose

A wrapper component that adds Port toggle and Keyframes toggle functionality to any input component. This component provides a consistent visual editor interface for inputs in the design system.

## Parameters

| Parameter        | Type                                            | Description                                                              |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| children         | React.ReactNode                                 | Required input component to wrap (e.g., TextInput, NumberWithUnitsInput) |
| isPort           | boolean                                         | Required port connection state - affects hover controls display          |
| keyframesState   | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required keyframe timeline state                                         |
| onToggleKeyframe | () => void                                      | Optional callback for keyframe toggle interactions                       |
| onTogglePort     | () => void                                      | Optional callback for port connection toggle                             |
| disabled         | boolean                                         | Optional disabled state for the entire component                         |
| size             | 'medium' \| 'small'                             | Optional size variant (defaults to 'small')                              |
| testId           | string                                          | Optional test identifier for testing                                     |

## Usage Example

```tsx
// With TextInput
<VisualEditorInput
    isPort={false}
    keyframesState="noKeyframes"
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
>
    <TextInput
        type="text"
        value="Sample text"
        placeholder="Enter text"
        onChange={(e) => setValue(e.target.value)}
    />
</VisualEditorInput>

// With NumberWithUnitsInput
<VisualEditorInput
    isPort={false}
    keyframesState="noKeyframes"
    onToggleKeyframe={() => console.log('Keyframe toggled')}
    onTogglePort={() => console.log('Port toggled')}
>
    <NumberWithUnitsInput
        value="100"
        units="px"
        availableUnits={['px', '%', 'em']}
        onChange={(value) => setValue(value)}
        onChangeUnits={(units) => setUnits(units)}
        placeholder="Enter value"
    />
</VisualEditorInput>
```
