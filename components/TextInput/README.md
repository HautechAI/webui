# TextInput

## Purpose
Single-line text input component with icon support, validation states, and various input types.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| className | string | Optional CSS class name for custom styling |
| placeholder | string | Optional placeholder text displayed when input is empty |
| disabled | boolean | When true, disables input interaction and applies disabled styling |
| leadingIcon | React.ReactNode | Optional icon displayed at the beginning of the input |
| trailingIcon | React.ReactNode | Optional icon displayed at the end of the input |
| value | string | Optional controlled value for the input |
| onChange | (e: React.ChangeEvent<HTMLInputElement>) => void | Optional callback function triggered when input value changes |
| step | number | Optional step value for numeric inputs |
| hasError | boolean | When true, applies error styling to indicate validation failure |
| type | 'text' \| 'password' \| 'email' \| 'number' | Required input type specification |

## Usage Example
```tsx
<TextInput 
  type="email"
  placeholder="Enter your email"
  leadingIcon={<EmailIcon />}
  value={email}
  onChange={handleEmailChange}
  hasError={!!emailError}
/>
```