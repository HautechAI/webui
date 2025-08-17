# SegmentedControl

## Purpose

Multi-option selector component with segmented button appearance for choosing between related options.

## Parameters

| Parameter | Type                    | Description                                                 |
| --------- | ----------------------- | ----------------------------------------------------------- |
| options   | array                   | Required array of selectable options with labels and values |
| value     | string                  | Optional controlled selected value                          |
| onChange  | (value: string) => void | Optional callback function when selection changes           |
| size      | string                  | Optional size variant controlling appearance and spacing    |
| disabled  | boolean                 | When true, disables all option selection                    |

May include additional parameters for styling and layout customization.

## Usage Example

```tsx
<SegmentedControl
    options={[
        { label: 'List', value: 'list' },
        { label: 'Grid', value: 'grid' },
        { label: 'Cards', value: 'cards' },
    ]}
    value={viewMode}
    onChange={setViewMode}
/>
```
