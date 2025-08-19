# TileTabItem

## Purpose

Individual tab item component within a TileTabGroup, representing a single content section with tile-based styling.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.tiletabitem

# npm
npm install @hautechai/webui.tiletabitem

# yarn
yarn add @hautechai/webui.tiletabitem
```

## Parameters

| Parameter | Type             | Description                                       |
| --------- | ---------------- | ------------------------------------------------- |
| value     | string \| number | Required unique identifier for this tab item      |
| label     | string           | Required text label displayed on the tab          |
| icon      | React.ReactNode  | Optional icon displayed alongside the label       |
| disabled  | boolean          | When true, disables tab selection and interaction |
| children  | React.ReactNode  | Optional content displayed when tab is active     |

May include additional parameters for custom styling and badges.

## Usage Example

```tsx
<TileTabItem value="settings" label="Settings" icon={<SettingsIcon />} disabled={!hasPermission}>
    <SettingsPanel />
</TileTabItem>
```
