# HoverControls

## Purpose

Action buttons or controls that appear when hovering over a target element, providing contextual interactions.

## Parameters

| Parameter | Type            | Description                                            |
| --------- | --------------- | ------------------------------------------------------ |
| children  | React.ReactNode | Required target element that triggers hover controls   |
| controls  | React.ReactNode | Required control elements displayed on hover           |
| position  | string          | Optional positioning of controls relative to target    |
| delay     | number          | Optional delay in milliseconds before showing controls |

May include additional parameters for animation and interaction behavior.

## Usage Example

```tsx
<HoverControls
    controls={
        <>
            <IconButton icon={<EditIcon />} />
            <IconButton icon={<DeleteIcon />} />
        </>
    }
    position="top-right"
>
    <ContentCard />
</HoverControls>
```
