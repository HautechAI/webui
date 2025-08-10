# Checkbox

## Purpose
Input control for boolean selection with visual checkmark indicator and controlled/uncontrolled modes.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| checked | boolean | Optional controlled state value for the checkbox |
| onChange | (checked: boolean) => void | Optional callback function triggered when checkbox state changes |
| readOnly | boolean | When true, prevents user interaction while maintaining visual state |
| children | React.ReactNode | Optional content (typically label text) displayed alongside the checkbox |

## Usage Example
```tsx
<Checkbox 
  checked={isAccepted}
  onChange={setIsAccepted}
>
  I agree to the terms and conditions
</Checkbox>
```