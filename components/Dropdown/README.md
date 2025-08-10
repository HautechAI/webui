# Dropdown

## Purpose
Select input component with customizable options and styling variants for choosing from predefined values.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| label | string | Optional label displayed above or within the dropdown |
| disabled | boolean | When true, disables dropdown interaction and applies disabled styling |
| type | 'filled' \| 'outlined' \| 'flat' | Optional visual style variant (defaults to standard appearance) |
| value | string | Optional controlled selected value |
| options | Array<{ label: string; value: string }> | Required array of selectable options with label and value properties |
| onChange | (value: string) => void | Optional callback function triggered when selection changes |
| hasError | boolean | When true, applies error styling to indicate validation failure |

## Usage Example
```tsx
<Dropdown 
  label="Select Country"
  type="filled"
  value={selectedCountry}
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" }
  ]}
  onChange={setSelectedCountry}
  hasError={!!countryError}
/>
```