# UserBalance

## Purpose
Specialized component for displaying user account balance information with formatting and action options.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| balance | number \| string | Required current balance amount |
| currency | string | Optional currency symbol or code (e.g., "$", "USD") |
| format | string | Optional number formatting style |
| actions | React.ReactNode | Optional action buttons (e.g., "Add Funds", "Withdraw") |
| pending | number \| string | Optional pending transaction amount |
| showHistory | boolean | Optional flag to show balance history link |

May include additional parameters for styling and transaction display.

## Usage Example
```tsx
<UserBalance 
  balance={1250.75}
  currency="$"
  format="currency"
  pending={25.00}
  actions={<Button label="Add Funds" />}
/>
```