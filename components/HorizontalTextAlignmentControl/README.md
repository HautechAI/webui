# HorizontalTextAlignmentControl

## Purpose

Multi-option alignment selector for horizontal text alignment with icon-only interface using left, center, and right alignment options.

## Parameters

| Parameter | Type                                                              | Description                                                 |
| --------- | ----------------------------------------------------------------- | ----------------------------------------------------------- |
| value     | 'left' \| 'center' \| 'right'                                     | Optional controlled selected alignment value                |
| onChange  | (event: MouseEvent, value: 'left' \| 'center' \| 'right') => void | Optional callback function when alignment selection changes |
| size      | 'default' \| 'small'                                              | Optional size variant - small has reduced height            |

## Usage Example

```tsx
<HorizontalTextAlignmentControl value={alignment} onChange={(event, value) => setAlignment(value)} size="default" />
```
