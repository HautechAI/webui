# Previews

## Purpose
Component for displaying content previews or thumbnails with navigation and selection capabilities.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| items | array | Required array of preview items with URLs and metadata |
| selected | string \| number | Optional identifier of currently selected preview |
| onSelect | (item: any) => void | Optional callback function when preview is selected |
| layout | string | Optional layout style (grid, list, carousel) |
| size | string | Optional preview thumbnail size variant |

May include additional parameters for navigation controls and preview behavior.

## Usage Example
```tsx
<Previews 
  items={imageList}
  selected={selectedId}
  onSelect={handlePreviewSelect}
  layout="grid"
  size="medium"
/>
```