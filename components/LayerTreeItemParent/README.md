# LayerTreeItemParent

## Purpose
Header component for layer tree items with expandable/collapsible functionality, icon, and label. Works as the parent header for LayerTreeFolder components.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| icon | React.ReactNode | Required icon component to display next to the label |
| label | string | Required text label to display |
| selected | boolean | Optional flag indicating if the item is in selected state (affects styling) |
| expanded | boolean | Optional flag indicating if the item is expanded (rotates arrow 90 degrees clockwise) |
| onExpandToggle | () => void | Optional click handler for the expand/collapse arrow button |
| onClick | () => void | Optional click handler for the item content area |

## Usage Example
```tsx
<LayerTreeItemParent
  icon={<FolderIcon />}
  label="My Folder"
  selected={false}
  expanded={true}
  onExpandToggle={() => setExpanded(!expanded)}
  onClick={() => setSelected(true)}
/>
```