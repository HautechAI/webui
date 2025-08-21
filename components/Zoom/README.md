# Zoom

## Purpose

A zoom control component that displays zoom percentage with increment and decrement buttons. Provides an intuitive interface for adjusting zoom levels in applications.

## Parameters

| Parameter | Type                    | Description                                      |
| --------- | ----------------------- | ------------------------------------------------ |
| value     | number                  | The current zoom value (e.g., 100 for 100%)      |
| onChange  | (value: number) => void | Callback function called when zoom value changes |

## Usage Example

```tsx
import { Zoom } from '@hautechai/webui.zoom';

const [zoomLevel, setZoomLevel] = useState(100);

<Zoom value={zoomLevel} onChange={setZoomLevel} />;
```
