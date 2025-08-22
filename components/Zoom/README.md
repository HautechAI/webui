# Zoom

## Purpose

A zoom control component that displays zoom percentage with increment and decrement buttons. Provides an intuitive interface for adjusting zoom levels in applications. The buttons automatically round values to the previous or next step multiples.

## Parameters

| Parameter | Type                    | Description                                                                                                              |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| value     | number                  | The current zoom value (e.g., 100 for 100%)                                                                              |
| onChange  | (value: number) => void | Callback function called when zoom value changes                                                                         |
| step      | number                  | Optional. The step value for increment/decrement (default: 10). Buttons round to the nearest step multiple when clicked. |

## Usage Example

```tsx
import { Zoom } from '@hautechai/webui.zoom';

const [zoomLevel, setZoomLevel] = useState(100);

// Default step (10) - buttons will round to nearest 10
<Zoom value={zoomLevel} onChange={setZoomLevel} />

// Custom step (25) - buttons will round to nearest 25
<Zoom value={zoomLevel} onChange={setZoomLevel} step={25} />

// Example behavior with step=10:
// If value is 123.7, minus button changes to 120, plus button changes to 130
```
