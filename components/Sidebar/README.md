# Sidebar

## Purpose

Navigation panel component typically positioned on the page side with collapsible sections and navigation items.

## Parameters

| Parameter | Type              | Description                                              |
| --------- | ----------------- | -------------------------------------------------------- |
| children  | React.ReactNode   | Required navigation content and menu items               |
| collapsed | boolean           | Optional state controlling whether sidebar is collapsed  |
| onToggle  | () => void        | Optional callback function for collapse/expand actions   |
| position  | 'left' \| 'right' | Optional positioning side (typically defaults to 'left') |
| width     | number \| string  | Optional width when expanded                             |

May include additional parameters for animation and responsive behavior.

## Usage Example

```tsx
<Sidebar collapsed={isSidebarCollapsed} onToggle={toggleSidebar} position="left" width={250}>
    <NavigationMenu />
</Sidebar>
```
