# Modal

## Purpose
Overlay dialog component for focused user interactions with backdrop and positioning controls.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| open | boolean | Optional flag controlling the visibility state of the modal |
| onClose | () => void | Optional callback function triggered when modal backdrop is clicked |
| children | React.ReactNode | Content to be displayed within the modal |
| contentPosition | object | Optional positioning object with left, top, right, bottom number values |
| backdropStyle | React.CSSProperties | Optional custom styles for the backdrop overlay |

## Usage Example
```tsx
<Modal 
  open={isOpen}
  onClose={handleClose}
  contentPosition={{ top: 50, left: 50 }}
>
  <ModalContent>
    <DialogForm />
  </ModalContent>
</Modal>
```