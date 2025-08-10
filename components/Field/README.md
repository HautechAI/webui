# Field

## Purpose
Form field wrapper component providing label, error states, and validation feedback for form inputs.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| label | string | Optional text label displayed for the field |
| labelPosition | 'left' \| 'right' \| 'top' | Position of the label relative to the field content (defaults to 'top') |
| error | string | Optional error message displayed when field validation fails |
| caption | string | Optional help text or caption displayed below the field |
| locked | true | Optional flag indicating the field is locked/readonly |
| onLockedClick | () => void | Optional callback function when locked field is clicked |
| children | React.ReactNode | Field content (input, textarea, etc.) to be wrapped |

## Usage Example
```tsx
<Field 
  label="Email Address"
  error={emailError}
  caption="We'll never share your email"
>
  <TextInput value={email} onChange={setEmail} />
</Field>
```