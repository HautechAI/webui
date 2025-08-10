# BottomSheet

## Purpose
Slide-up modal panel component optimized for mobile-first interfaces and contextual actions.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| open | boolean | Optional flag controlling the visibility state of the bottom sheet |
| onClose | () => void | Optional callback function triggered when the bottom sheet should close |
| children | React.ReactNode | Content to be displayed within the bottom sheet |
| inset | object | Optional positioning insets with top, left, right, bottom number values |
| zIndex | number | Optional z-index value for layering control |
| backdropStyle | React.CSSProperties | Optional custom styles for the backdrop overlay |

## Usage Example
```tsx
<BottomSheet 
  open={isOpen}
  onClose={handleClose}
  inset={{ bottom: 20 }}
>
  <ActionMenu />
</BottomSheet>
```