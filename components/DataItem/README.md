# DataItem

## Purpose

Structured display component for key-value data pairs with flexible layout options and visual hierarchy.

## Parameters

| Parameter    | Type                | Description                                                                                          |
| ------------ | ------------------- | ---------------------------------------------------------------------------------------------------- |
| label        | string              | Required label text for the data item                                                                |
| value        | string              | Required value text for the data item                                                                |
| primary      | 'data' \| 'heading' | Optional emphasis setting - 'data' emphasizes value, 'heading' emphasizes label (defaults to 'data') |
| size         | 'medium' \| 'small' | Optional size variant controlling typography and spacing (defaults to 'medium')                      |
| stretch      | boolean             | When true, item expands to fill available width                                                      |
| direction    | 'row' \| 'column'   | Optional layout direction - row for horizontal, column for vertical                                  |
| trailingIcon | React.ReactNode     | Optional icon displayed at the end (only available in row direction)                                 |
| leadingIcon  | React.ReactNode     | Optional icon displayed at the beginning (only available in column direction)                        |
| hintProps    | HintProps           | Optional hint configuration (only available in column direction)                                     |

## Usage Example

```tsx
<DataItem
    label="Email"
    value="user@example.com"
    direction="row"
    primary="data"
    size="medium"
    trailingIcon={<EditIcon />}
/>
```
