# VerticalAlignmentControl

## Purpose

Multi-option alignment selector for vertical alignment with icon-only interface using top, middle, and bottom alignment options.

## Parameters

| Parameter | Type                                                              | Description                                                 |
| --------- | ----------------------------------------------------------------- | ----------------------------------------------------------- |
| value     | 'top' \| 'middle' \| 'bottom'                                     | Optional controlled selected alignment value                |
| onChange  | (event: MouseEvent, value: 'top' \| 'middle' \| 'bottom') => void | Optional callback function when alignment selection changes |
| size      | 'default' \| 'small'                                              | Optional size variant - small has reduced height            |

## Usage Example

```tsx
<VerticalAlignmentControl value={alignment} onChange={(event, value) => setAlignment(value)} size="default" />
```
