# Counter

## Purpose

Numeric display component with increment/decrement controls for selecting numeric values within optional constraints.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.counter

# npm
npm install @hautechai/webui.counter

# yarn
yarn add @hautechai/webui.counter
```

## Parameters

| Parameter | Type                    | Description                                                     |
| --------- | ----------------------- | --------------------------------------------------------------- |
| min       | number                  | Optional minimum value constraint                               |
| max       | number                  | Optional maximum value constraint                               |
| step      | number                  | Optional increment/decrement step value (defaults to 1)         |
| value     | number                  | Optional controlled current value (defaults to 0)               |
| onChange  | (value: number) => void | Required callback function triggered when counter value changes |

## Usage Example

```tsx
<Counter min={0} max={100} step={5} value={currentCount} onChange={setCurrentCount} />
```
