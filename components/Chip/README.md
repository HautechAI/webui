# Chip

## Purpose
Compact element component for displaying tags, filters, or selection indicators with optional icons and popover content.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| icon | ReactNode | Optional icon displayed before the label |
| image | string | Optional image URL displayed as chip avatar |
| label | string | Required text content displayed on the chip |
| maxWidth | number | Optional maximum width constraint for the chip |
| showPopover | boolean | When true, enables popover interaction on chip hover/click |

## Usage Example
```tsx
<Chip 
  icon={<TagIcon />}
  label="React"
  maxWidth={120}
  showPopover={true}
/>
```