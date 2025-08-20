# Timeline

## Purpose

Timeline component that provides a 2x2 grid layout for video editing interfaces with tracks and keyframes. Combines track visualization with keyframe editing capabilities in a structured timeline layout.

## Parameters

| Parameter        | Type                                       | Description                                                         |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------------- |
| height           | number                                     | Optional. Height of the timeline component in pixels (default: 250) |
| scale            | number                                     | Required. Scale in pixels per second for timeline display           |
| tracks           | TimelineTrackData[]                        | Required. Array of track data with keyframe properties              |
| onSelectTrack    | (trackId: string) => void                  | Optional. Called when a track is selected                           |
| onSelectKeyframe | (keyframeId: string) => void               | Optional. Called when a keyframe is selected                        |
| onMoveKeyframe   | (keyframeId: string, time: number) => void | Optional. Called when a keyframe is moved                           |

### TimelineTrackData Interface

| Property      | Type               | Description                                 |
| ------------- | ------------------ | ------------------------------------------- |
| id            | string             | Unique identifier for the track             |
| title         | string             | Display title for the track                 |
| start         | number             | Start time in seconds                       |
| duration      | number             | Duration in seconds                         |
| selected      | boolean            | Whether the track is currently selected     |
| keyframeProps | KeyframeProperty[] | Array of keyframe properties for this track |

### KeyframeProperty Interface

| Property  | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| id        | string     | Unique identifier for the keyframe property |
| label     | string     | Display label for the keyframe property     |
| keyframes | Keyframe[] | Array of keyframes for this property        |

### Keyframe Interface

| Property | Type    | Description                                |
| -------- | ------- | ------------------------------------------ |
| id       | string  | Unique identifier for the keyframe         |
| time     | number  | Time position in seconds                   |
| selected | boolean | Whether the keyframe is currently selected |

## Usage Example

```tsx
const tracks = [
    {
        id: 'track1',
        title: 'Video Layer',
        start: 0,
        duration: 10,
        selected: false,
        keyframeProps: [
            {
                id: 'opacity',
                label: 'Opacity',
                keyframes: [
                    { id: 'kf1', time: 2.5, selected: false },
                    { id: 'kf2', time: 7.0, selected: true },
                ],
            },
            {
                id: 'scale',
                label: 'Scale',
                keyframes: [{ id: 'kf3', time: 1.0, selected: false }],
            },
        ],
    },
];

<Timeline
    height={300}
    scale={50}
    tracks={tracks}
    onSelectTrack={(trackId) => console.log('Selected track:', trackId)}
    onSelectKeyframe={(keyframeId) => console.log('Selected keyframe:', keyframeId)}
    onMoveKeyframe={(keyframeId, time) => console.log('Moved keyframe:', keyframeId, 'to time:', time)}
/>;
```
