# Typography

## Purpose

Text rendering component with various predefined styles, variants, and color options for consistent typography.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.typography

# npm
npm install @hautechai/webui.typography

# yarn
yarn add @hautechai/webui.typography
```

## Parameters

| Parameter | Type                                              | Description                                                          |
| --------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| className | string                                            | Optional CSS class name for custom styling                           |
| variant   | keyof typeof variants                             | Required text style variant from predefined typography system        |
| children  | React.ReactNode                                   | Text content to be rendered                                          |
| color     | Paths<ThemeType['palette'], { leavesOnly: true }> | Optional color from theme palette (e.g., 'layout.onSurface.primary') |
| textAlign | TextAlign                                         | Optional text alignment: 'left', 'right', 'center', or 'inherit'     |
| noWrap    | boolean                                           | When true, prevents text wrapping to multiple lines                  |
| overflow  | 'auto' \| 'hidden' \| 'ellipsis'                  | Optional overflow behavior for text content                          |

## Usage Example

```tsx
<Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary" textAlign="center">
    Welcome to the application
</Typography>
```
