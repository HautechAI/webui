# Column

## Purpose
Vertical layout container component for stacking child components with configurable spacing and alignment options.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| className | string | Optional CSS class name for custom styling |
| spacing | keyof ThemeType['foundation']['spacing'] | Optional spacing between child elements using theme values |
| align | Align | Optional horizontal alignment of child elements |
| stretch | boolean | When true, stretches the column to fill available space |
| overflow | 'hidden' \| 'visible' \| 'scroll' \| 'auto' | Optional overflow behavior for content |
| overflowX | 'hidden' \| 'visible' \| 'scroll' \| 'auto' | Optional horizontal overflow behavior |
| overflowY | 'hidden' \| 'visible' \| 'scroll' \| 'auto' | Optional vertical overflow behavior |
| children | React.ReactNode | Child components to be stacked vertically |

## Usage Example
```tsx
<Column 
  spacing="l"
  align="center"
  stretch
>
  <Header />
  <Content />
  <Footer />
</Column>
```