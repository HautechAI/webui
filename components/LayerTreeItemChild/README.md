# LayerTreeItemChild

## Purpose

Child item component for layer trees with editable label and optional input field. Companion component to LayerTreeItemParent for displaying nested layer items.

## Parameters

| Parameter | Type                    | Description                                                                 |
| --------- | ----------------------- | --------------------------------------------------------------------------- |
| label     | string                  | Required text label to display                                              |
| selected  | boolean                 | Optional flag indicating if the item is in selected state (affects styling) |
| input     | React.ReactNode         | Optional React Node to display/edit value on the right side                 |
| onChange  | (value: string) => void | Optional handler called when the label text is changed via editing          |
| onSelect  | () => void              | Optional handler called when the item is selected                           |

## Usage Example

```tsx
<LayerTreeItemChild
    label="Child Item"
    selected={false}
    input={<VisualEditorInput value="100" units="px" />}
    onChange={(newLabel) => setLabel(newLabel)}
    onSelect={() => setSelected(true)}
/>
```
