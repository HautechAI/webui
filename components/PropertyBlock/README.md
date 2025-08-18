# PropertyBlock

## Purpose

A flexible container component for displaying property information with optional remove/add functionality and collapsible content.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.propertyblock

# npm
npm install @hautechai/webui.propertyblock

# yarn
yarn add @hautechai/webui.propertyblock
```

## Parameters

| Parameter | Type            | Description                                                                                                   |
| --------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| children  | React.ReactNode | Optional content to be displayed within the property block                                                    |
| removable | boolean         | When true, displays a remove/add button (defaults to false)                                                   |
| removed   | boolean         | When true, hides content and shows add button, when false shows content and remove button (defaults to false) |
| className | string          | Optional CSS class name for custom styling                                                                    |

## Usage Example

```tsx
<PropertyBlock removable>
    <div>Custom property content</div>
</PropertyBlock>
```
