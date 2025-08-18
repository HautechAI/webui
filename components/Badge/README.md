# Badge

## Purpose

Small notification indicator component to highlight status, notifications, or count information with color coding.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.badge

# npm
npm install @hautechai/webui.badge

# yarn
yarn add @hautechai/webui.badge
```

## Parameters

| Parameter | Type                           | Description                                                    |
| --------- | ------------------------------ | -------------------------------------------------------------- |
| color     | 'success' \| 'error' \| 'info' | Required color variant indicating the badge's semantic meaning |
| label     | string                         | Required text content displayed within the badge               |

## Usage Example

```tsx
<Badge color="success" label="Active" />
```
