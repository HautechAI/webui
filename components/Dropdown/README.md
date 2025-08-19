# Dropdown

## Purpose

Select input component with customizable options and styling variants for choosing from predefined values.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.dropdown

# npm
npm install @hautechai/webui.dropdown

# yarn
yarn add @hautechai/webui.dropdown
```

## Parameters

| Parameter | Type                                    | Description                                                                                                           |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| label     | string                                  | Optional label displayed above or within the dropdown                                                                 |
| disabled  | boolean                                 | When true, disables dropdown interaction and applies disabled styling                                                 |
| type      | 'filled' \| 'outlined' \| 'flat'        | Optional visual style variant (defaults to standard appearance)                                                       |
| size      | 'xsmall' \| 'small' \| 'medium'         | Optional size (defaults to 'medium'). xsmall mirrors small sizing (16px icon) but uses tighter padding when collapsed |
| collapsed | boolean                                 | When true, renders only the toggle icon (no label) for ultra-compact UI                                               |
| value     | string                                  | Optional controlled selected value                                                                                    |
| options   | Array<{ label: string; value: string }> | Required array of selectable options with label and value properties                                                  |
| onChange  | (value: string) => void                 | Optional callback function triggered when selection changes                                                           |
| hasError  | boolean                                 | When true, applies error styling to indicate validation failure                                                       |

## Usage Example

```tsx
<Dropdown
    label="Select Country"
    type="filled"
    size="small"
    collapsed={false}
    value={selectedCountry}
    options={[
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
    ]}
    onChange={setSelectedCountry}
    hasError={!!countryError}
/>
```
