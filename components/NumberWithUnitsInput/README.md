# NumberWithUnitsInput

## Purpose

Number input component with unit selection dropdown. Combines text input functionality with unit controls that appear on hover.

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

| Parameter            | Type                    | Description                                                           |
| -------------------- | ----------------------- | --------------------------------------------------------------------- |
| className            | string                  | Optional CSS class name for custom styling                            |
| placeholder          | string                  | Optional placeholder text displayed when input is empty               |
| disabled             | boolean                 | When true, disables input interaction and applies disabled styling    |
| leadingIcon          | React.ReactNode         | Optional icon displayed at the beginning of the input                 |
| value                | string                  | Required current input value                                          |
| units                | string                  | Required current unit display (e.g., 'px', '%', 'em')                 |
| availableUnits       | string[]                | Required array of available units for dropdown selection              |
| onChange             | (value: string) => void | Optional callback for input value changes                             |
| onChangeUnits        | (units: string) => void | Optional callback for unit selection changes                          |
| onToggleWorkflow     | () => void              | Optional callback for workflow button interactions                    |
| hasError             | boolean                 | When true, applies error styling to indicate validation failure       |
| variation            | 'filled' \| 'outlined'  | Optional input style variant (defaults to 'filled')                   |
| size                 | 'medium' \| 'small'     | Optional size variant (defaults to 'medium')                          |
| disableHoverControls | boolean                 | When true, disables hover controls (workflow icon and units dropdown) |

## Usage Example

```tsx
<NumberWithUnitsInput
    value="100"
    units="px"
    availableUnits={['px', '%', 'em', 'rem']}
    onChange={(value) => console.log('Value changed:', value)}
    onChangeUnits={(units) => console.log('Units changed:', units)}
    onToggleWorkflow={() => console.log('Workflow toggled')}
/>
```
