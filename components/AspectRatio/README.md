# AspectRatio

## Purpose
Component for selecting and managing aspect ratios with predefined options and custom ratio calculation.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| options | string[] | Array of available aspect ratio options |
| defaultOptions | [string, string, string] | Tuple of three default aspect ratio options |
| sizeForRatio | (aspectRatio: string) => { width: number; height: number } | Function that calculates dimensions for a given aspect ratio |
| value | string | Optional controlled selected aspect ratio value |
| onChange | (aspectRatio: string) => void | Optional callback function triggered when aspect ratio changes |

## Usage Example
```tsx
<AspectRatio 
  options={["16:9", "4:3", "1:1", "3:2"]}
  defaultOptions={["16:9", "4:3", "1:1"]}
  sizeForRatio={(ratio) => calculateSize(ratio)}
  value={selectedRatio}
  onChange={setSelectedRatio}
/>
```