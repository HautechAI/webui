# Box

## Purpose

Flexible layout container component with configurable dimensions, spacing, and styling properties.

## Parameters

| Parameter      | Type                                                                        | Description                                     |
| -------------- | --------------------------------------------------------------------------- | ----------------------------------------------- |
| className      | string                                                                      | Optional CSS class name for custom styling      |
| id             | string                                                                      | Optional identifier for the box element         |
| style          | React.CSSProperties                                                         | Optional inline styles for the box              |
| width          | number \| string                                                            | Optional width dimension (pixels or CSS units)  |
| height         | number \| string                                                            | Optional height dimension (pixels or CSS units) |
| maxWidth       | number \| string                                                            | Optional maximum width constraint               |
| maxHeight      | number \| string                                                            | Optional maximum height constraint              |
| minWidth       | number \| string                                                            | Optional minimum width constraint               |
| minHeight      | number \| string                                                            | Optional minimum height constraint              |
| padding        | keyof ThemeType['foundation']['spacing']                                    | Optional padding using theme spacing values     |
| paddingTop     | keyof ThemeType['foundation']['spacing']                                    | Optional top padding using theme values         |
| paddingRight   | keyof ThemeType['foundation']['spacing']                                    | Optional right padding using theme values       |
| paddingBottom  | keyof ThemeType['foundation']['spacing']                                    | Optional bottom padding using theme values      |
| paddingLeft    | keyof ThemeType['foundation']['spacing']                                    | Optional left padding using theme values        |
| overflow       | 'hidden' \| 'visible' \| 'scroll' \| 'auto'                                 | Optional overflow behavior for content          |
| overflowX      | 'hidden' \| 'visible' \| 'scroll' \| 'auto'                                 | Optional horizontal overflow behavior           |
| overflowY      | 'hidden' \| 'visible' \| 'scroll' \| 'auto'                                 | Optional vertical overflow behavior             |
| display        | 'flex' \| 'block' \| 'inline-block' \| 'inline-flex'                        | Optional CSS display property                   |
| alignItems     | 'flex-start' \| 'flex-end' \| 'center' \| 'baseline' \| 'stretch'           | Optional flexbox align-items property           |
| justifyContent | 'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' | Optional flexbox justify-content property       |
| grow           | number                                                                      | Optional flex-grow value                        |
| shrink         | number                                                                      | Optional flex-shrink value                      |
| children       | React.ReactNode                                                             | Content to be displayed within the box          |

## Usage Example

```tsx
<Box width={300} height={200} padding="l" display="flex" alignItems="center" justifyContent="center">
    <Content />
</Box>
```
