# TimelineTrack

## Purpose

Visual timeline track component for representing when elements are visible in a composition, with draggable and resizable functionality. Also includes TimelineTrackKeyframes for displaying keyframe data on timeline.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.timelinetrack

# npm
npm install @hautechai/webui.timelinetrack

# yarn
yarn add @hautechai/webui.timelinetrack
```

## Components

### TimelineTrack

| Parameter       | Type                      | Description                                                              |
| --------------- | ------------------------- | ------------------------------------------------------------------------ |
| start           | number                    | Start time in seconds for the track position                             |
| duration        | number                    | Duration in seconds for the track length                                 |
| scale           | number                    | Scale in pixels per second for positioning calculations                  |
| selected        | boolean                   | Optional. Whether the track is in selected state (shows resize handlers) |
| startHandlerRef | React.Ref<HTMLDivElement> | Optional. Ref for the start resize handler                               |
| endHandlerRef   | React.Ref<HTMLDivElement> | Optional. Ref for the end resize handler                                 |
| bodyRef         | React.Ref<HTMLDivElement> | Optional. Ref for the body (draggable area)                              |
| className       | string                    | Optional. Additional CSS class for the container                         |

### TimelineTrackKeyframes

| Parameter | Type                                                 | Description                                                        |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| scale     | number                                               | Scale in pixels per second for positioning calculations            |
| selected  | boolean                                              | Optional. Whether the track is in selected state                   |
| keyframes | Array<{id: string, time: number, selected: boolean}> | Array of keyframe objects with id, time in seconds, and selection  |
| onMove    | (params: {id: string, time: number}) => void         | Optional. Called when a keyframe is dragged to a new time position |
| onClick   | (params: {id: string}) => void                       | Optional. Called when a keyframe or connection line is clicked     |
| className | string                                               | Optional. Additional CSS class for the container                   |

## Usage Examples

### TimelineTrack

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
/>;
```

### TimelineTrackKeyframes

```tsx
const keyframes = [
    { id: 'kf1', time: 1.5, selected: false },
    { id: 'kf2', time: 3.2, selected: true },
    { id: 'kf3', time: 5.8, selected: false },
];

<TimelineTrackKeyframes
    scale={50}
    keyframes={keyframes}
    selected={false}
    onClick={(params) => console.log('Clicked keyframe:', params.id)}
    onMove={(params) => console.log('Moved keyframe:', params.id, 'to time:', params.time)}
/>;
```
