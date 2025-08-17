# Switch

## Purpose

Toggle control component for boolean on/off states with visual feedback and controlled/uncontrolled modes.

## Parameters

| Parameter | Type                       | Description                                                         |
| --------- | -------------------------- | ------------------------------------------------------------------- |
| checked   | boolean                    | Optional controlled state value for the switch                      |
| onChange  | (checked: boolean) => void | Optional callback function triggered when switch state changes      |
| disabled  | boolean                    | When true, disables switch interaction and applies disabled styling |

## Usage Example

```tsx
<Switch checked={isEnabled} onChange={setIsEnabled} disabled={isLoading} />
```
