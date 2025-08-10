# ThemeProvider

## Purpose
Context provider component for theme management, supplying theme values to all child components in the component tree.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| theme | ThemeType | Optional theme object to override default theme values |
| children | React.ReactNode | Required child components that will receive theme context |

## Usage Example
```tsx
import { ThemeProvider, Theme } from '@hautechai/webui.themeprovider';

<ThemeProvider theme={customTheme || Theme}>
  <App />
</ThemeProvider>
```