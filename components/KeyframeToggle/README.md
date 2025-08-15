# KeyframeToggle

## Purpose
Toggle button component for keyframe interactions in timeline interfaces. Displays different visual states and styles based on keyframe status.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| onClick | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function |
| state | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe' | Required state determining the visual appearance and icon style |

## Usage Example
```tsx
<KeyframeToggle 
  state="noKeyframes"
  onClick={handleToggle}
/>
```