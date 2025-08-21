# TimelineToolbar

## Purpose

Timeline toolbar component with playback controls and time display for timeline interfaces. Provides standard media controls including play/pause, seek, and repeat functionality.

## Parameters

| Parameter       | Type       | Description                                                       |
| --------------- | ---------- | ----------------------------------------------------------------- |
| currentTime     | number     | Current playback time in seconds                                  |
| repeatEnabled   | boolean    | Whether repeat is enabled                                         |
| isPlaying       | boolean    | Optional. Whether the player is currently playing (default false) |
| onSkipToStart   | () => void | Optional callback when skip to start button is clicked            |
| onRewindBack    | () => void | Optional callback when rewind back button is clicked              |
| onPlayPause     | () => void | Optional callback when play/pause button is clicked               |
| onRewindForward | () => void | Optional callback when rewind forward button is clicked           |
| onSkipToEnd     | () => void | Optional callback when skip to end button is clicked              |
| onRepeatToggle  | () => void | Optional callback when repeat button is toggled                   |

## Usage Example

```tsx
<TimelineToolbar
    currentTime={125}
    repeatEnabled={false}
    isPlaying={true}
    onSkipToStart={() => console.log('Skip to start')}
    onRewindBack={() => console.log('Rewind back')}
    onPlayPause={() => console.log('Play/pause')}
    onRewindForward={() => console.log('Rewind forward')}
    onSkipToEnd={() => console.log('Skip to end')}
    onRepeatToggle={() => console.log('Toggle repeat')}
/>
```
