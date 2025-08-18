# ToggleIconButton

## Purpose

Toggle button component optimized for displaying icons with different color schemes and a checked state for toggle functionality.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.toggleiconbutton

# npm
npm install @hautechai/webui.toggleiconbutton

# yarn
yarn add @hautechai/webui.toggleiconbutton
```

## Parameters

| Parameter | Type                                             | Description                                                               |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| variant   | 'filled' \| 'outlined' \| 'flat' \| 'primary'    | Optional visual style variant (defaults to 'filled')                      |
| size      | 'medium' \| 'small' \| 'xsmall'                  | Optional size variant with fixed dimensions (defaults to 'medium')        |
| icon      | React.ReactNode                                  | Required icon component to be displayed                                   |
| checked   | boolean                                          | When true, applies alternate styling for toggle state (defaults to false) |
| disabled  | boolean                                          | When true, disables button interaction and applies disabled styling       |
| onClick   | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function                                     |

## Usage Example

```tsx
<ToggleIconButton variant="primary" size="medium" icon={<StarIcon />} checked={isStarred} onClick={handleToggle} />
```
