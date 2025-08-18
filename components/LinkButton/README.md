# LinkButton

## Purpose

Button component styled as a hyperlink with minimal visual presence and navigation capabilities.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.linkbutton

# npm
npm install @hautechai/webui.linkbutton

# yarn
yarn add @hautechai/webui.linkbutton
```

## Parameters

| Parameter    | Type                                             | Description                                                                    |
| ------------ | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| size         | 'small' \| 'xsmall'                              | Optional size variant controlling typography and spacing (defaults to 'small') |
| label        | string                                           | Required text content displayed on the button                                  |
| leadingIcon  | React.ReactNode                                  | Optional icon displayed before the label text                                  |
| trailingIcon | React.ReactNode                                  | Optional icon displayed after the label text                                   |
| disabled     | boolean                                          | When true, disables button interaction and applies disabled styling            |
| onClick      | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function                                          |

## Usage Example

```tsx
<LinkButton size="small" label="View Details" trailingIcon={<ExternalLinkIcon />} onClick={handleViewDetails} />
```
