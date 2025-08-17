# FloatingPanel

## Purpose

Draggable overlay panel component that floats above content with positioning and resize capabilities.

## Parameters

| Parameter | Type            | Description                                          |
| --------- | --------------- | ---------------------------------------------------- |
| children  | React.ReactNode | Required content displayed within the floating panel |
| title     | string          | Optional panel title displayed in the header         |
| position  | object          | Optional initial position with x and y coordinates   |
| size      | object          | Optional initial size with width and height values   |
| resizable | boolean         | When true, allows panel resizing                     |
| draggable | boolean         | When true, allows panel dragging (typically default) |

May include additional parameters for styling and interaction constraints.

## Usage Example

```tsx
<FloatingPanel title="Settings" position={{ x: 100, y: 100 }} size={{ width: 400, height: 300 }} resizable={true}>
    <SettingsForm />
</FloatingPanel>
```
