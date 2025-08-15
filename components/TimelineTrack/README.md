# TimelineTrack

## Purpose
Visual timeline track component for representing when elements are visible in a composition, with draggable and resizable functionality.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| start | number | Start time in seconds for the track position |
| duration | number | Duration in seconds for the track length |
| scale | number | Scale in pixels per second for positioning calculations |
| selected | boolean | Optional. Whether the track is in selected state |
| hovered | boolean | Optional. Whether the track is in hovered state |
| startHandlerRef | React.Ref<HTMLDivElement> | Optional. Ref for the start resize handler |
| endHandlerRef | React.Ref<HTMLDivElement> | Optional. Ref for the end resize handler |
| bodyRef | React.Ref<HTMLDivElement> | Optional. Ref for the body (draggable area) |
| className | string | Optional. Additional CSS class for the container |

## Usage Example
```tsx
const startHandlerRef = useRef<HTMLDivElement>(null);
const endHandlerRef = useRef<HTMLDivElement>(null);
const bodyRef = useRef<HTMLDivElement>(null);

<TimelineTrack
  start={2}
  duration={5}
  scale={50}
  selected={true}
  startHandlerRef={startHandlerRef}
  endHandlerRef={endHandlerRef}
  bodyRef={bodyRef}
/>
```