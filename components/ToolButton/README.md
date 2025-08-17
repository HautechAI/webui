# ToolButton

## Purpose

Icon button component with selected state functionality, designed for toolbar interfaces where users can toggle tool selection.

## Parameters

| Parameter | Type                                             | Description                                                             |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| icon      | React.ReactNode                                  | Required icon component to be displayed (size will be injected as 24px) |
| selected  | boolean                                          | Optional selected state of the button (defaults to false)               |
| disabled  | boolean                                          | When true, disables button interaction and applies disabled styling     |
| onClick   | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function                                   |

## Usage Example

```tsx
<ToolButton icon={<BrushIcon />} selected={currentTool === 'brush'} onClick={() => setCurrentTool('brush')} />
```
