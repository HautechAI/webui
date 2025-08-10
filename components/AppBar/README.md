# AppBar

## Purpose
Top navigation bar component with configurable left, center, and right content areas for application headers.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| hierarchy | 'mid' \| 'low' | Visual hierarchy level affecting background color and styling prominence (defaults to 'mid') |
| left | React.ReactNode | Optional content displayed in the left section of the app bar |
| center | React.ReactNode | Optional content displayed in the center section of the app bar |
| right | React.ReactNode | Optional content displayed in the right section of the app bar |

## Usage Example
```tsx
<AppBar 
  hierarchy="mid"
  left={<Logo />}
  center={<SearchBar />}
  right={<UserMenu />}
/>
```