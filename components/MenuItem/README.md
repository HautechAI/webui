# MenuItem

## Purpose

Individual menu item component with configurable appearance, icons, and interaction states.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.menuitem

# npm
npm install @hautechai/webui.menuitem

# yarn
yarn add @hautechai/webui.menuitem
```

## Parameters

| Parameter    | Type                | Description                                                                                |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------ |
| label        | string              | Required text content displayed in the menu item                                           |
| type         | 'main' \| 'CTA'     | Optional type affecting styling - 'main' for regular items, 'CTA' for call-to-action items |
| size         | 'medium' \| 'small' | Optional size variant (only available when type is 'main')                                 |
| isSelected   | boolean             | Optional flag indicating the item's selected state                                         |
| leadingIcon  | React.ReactNode     | Optional icon displayed before the label                                                   |
| trailingIcon | React.ReactNode     | Optional icon displayed after the label                                                    |
| onClick      | () => void          | Optional click event handler function                                                      |

## Usage Example

```tsx
<MenuItem
    label="Save Document"
    type="CTA"
    leadingIcon={<SaveIcon />}
    isSelected={isCurrentAction}
    onClick={handleSave}
/>
```
