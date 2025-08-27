# NumberWithUnitsInput

## Purpose

Number input component with units selection and hover-based dropdown. Provides numeric input functionality with trailing units display that switches to a dropdown on hover for easy unit selection.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.numberwithunitsinput

# npm
npm install @hautechai/webui.numberwithunitsinput

# yarn
yarn add @hautechai/webui.numberwithunitsinput
```

## Parameters

| Parameter      | Type                    | Description                                              |
| -------------- | ----------------------- | -------------------------------------------------------- |
| value          | string                  | Required input value                                     |
| onChange       | (value: string) => void | Optional callback for input value changes                |
| units          | string                  | Required current unit display (e.g., 'px', '%', 'em')    |
| availableUnits | string[]                | Required array of available units for dropdown selection |
| onChangeUnits  | (units: string) => void | Optional callback for unit selection changes             |
| placeholder    | string                  | Optional input placeholder text                          |
| disabled       | boolean                 | Optional disabled state for the entire component         |
| size           | 'medium' \| 'small'     | Optional size variant (defaults to 'small')              |
| variation      | 'filled' \| 'outlined'  | Optional input style variant (defaults to 'filled')      |
| leadingIcon    | React.ReactNode         | Optional icon element displayed at input start           |
| hasError       | boolean                 | Optional error state styling                             |
| className      | string                  | Optional CSS class name for styling the input element    |

## Usage Example

```tsx
<NumberWithUnitsInput
    value="100"
    units="px"
    availableUnits={['px', '%', 'em', 'rem']}
    onChange={(value) => console.log('Value changed:', value)}
    onChangeUnits={(units) => console.log('Units changed:', units)}
    placeholder="Enter value"
    leadingIcon={<PlaceholderIcon />}
/>
```
