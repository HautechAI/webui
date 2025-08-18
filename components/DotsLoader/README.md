# DotsLoader

## Purpose

Animated loading indicator with three dots that pulse in sequence to show loading or processing states.

## Parameters

| Parameter | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| className | string | Optional CSS class name for styling     |
| speed     | number | Animation speed in seconds (default: 3) |

## Usage Example

```tsx
<DotsLoader />
<DotsLoader speed={1} /> // Fast animation
<DotsLoader speed={5} /> // Slow animation
```
