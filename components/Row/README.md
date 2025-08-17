# Row

## Purpose

Horizontal layout container component for arranging child components in a row with flexible spacing and alignment options.

## Parameters

| Parameter  | Type                                     | Description                                                |
| ---------- | ---------------------------------------- | ---------------------------------------------------------- |
| className  | string                                   | Optional CSS class name for custom styling                 |
| children   | React.ReactNode                          | Child components to be arranged horizontally               |
| spacing    | keyof ThemeType['foundation']['spacing'] | Optional spacing between child elements using theme values |
| wrap       | boolean                                  | When true, allows items to wrap to new lines when needed   |
| reverse    | boolean                                  | When true, reverses the order of child elements            |
| stretch    | boolean                                  | When true, stretches the row to fill available space       |
| align      | Align                                    | Optional vertical alignment of child elements              |
| justify    | Justify                                  | Optional horizontal distribution of child elements         |
| fullHeight | boolean                                  | When true, row takes full available height                 |
| noOverflow | boolean                                  | When true, prevents content overflow                       |

## Usage Example

```tsx
<Row spacing="m" align="center" justify="space-between">
    <Button label="Cancel" />
    <Button label="Save" />
</Row>
```
