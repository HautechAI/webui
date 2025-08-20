# TimelineRuler

## Purpose

A timeline ruler component that displays graduated time markers with both numbered and unnumbered graduations. The ruler automatically calculates appropriate time intervals based on scale and available space.

## Parameters

| Parameter                   | Type   | Description                                           |
| --------------------------- | ------ | ----------------------------------------------------- |
| scale                       | number | Pixels per second - determines the scale of the ruler |
| length                      | number | Total length of the timeline in seconds               |
| numberedGraduationsDistance | number | Distance between numbered graduations in pixels       |

## Usage Example

```tsx
<TimelineRuler scale={50} length={10} numberedGraduationsDistance={100} />
```
