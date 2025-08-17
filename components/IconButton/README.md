# IconButton

## Purpose

Button component optimized for displaying icons with customizable variants, sizes, and styling options.

## Parameters

| Parameter        | Type                                             | Description                                                                |
| ---------------- | ------------------------------------------------ | -------------------------------------------------------------------------- |
| variant          | 'filled' \| 'outlined' \| 'flat'                 | Optional visual style variant (defaults to 'filled')                       |
| size             | 'medium' \| 'small' \| 'xsmall'                  | Optional size variant controlling button dimensions (defaults to 'medium') |
| icon             | React.ReactNode                                  | Required icon component to be displayed                                    |
| disabled         | boolean                                          | When true, disables button interaction and applies disabled styling        |
| onClick          | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function                                      |
| customBackground | string                                           | Optional custom background color override                                  |

## Usage Example

```tsx
<IconButton variant="outlined" size="xsmall" icon={<PlusIcon />} onClick={handleAddItem} />
```
