# Slider

## Purpose
Range input control component for selecting numeric values within a specified range with visual feedback.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| min | number | Minimum value of the slider range |
| max | number | Maximum value of the slider range |
| step | number | Optional increment step between values (defaults to 1) |
| value | number | Current selected value of the slider |
| onChange | (value: number) => void | Callback function triggered when slider value changes |

## Usage Example
```tsx
<Slider 
  min={0} 
  max={100} 
  step={5}
  value={currentValue}
  onChange={setCurrentValue}
/>
```