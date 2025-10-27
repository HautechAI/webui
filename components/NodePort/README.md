# NodePort

## Purpose

Port component for input and output connections on nodes. Uses Typography component for consistent label styling and includes visual port handles.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.nodeport

# npm
npm install @hautechai/webui.nodeport

# yarn
yarn add @hautechai/webui.nodeport
```

## Parameters

| Parameter         | Type                                          | Description                                                                                                                                                   |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type              | 'input' \| 'output'                           | Specifies whether this is an input or output port, affecting positioning and styling                                                                          |
| label             | string                                        | Optional label for the port, displayed using Typography component                                                                                             |
| interactiveHandle | ReactNode                                     | Optional interactive element rendered inside the port handle for custom interactions                                                                          |
| state             | 'normal' \| 'warning' \| 'error' \| 'success' | Optional state of the port. Warning state shows warning icon next to label, error state colors the port handle red, success state uses actions.success tokens |

## Usage Example

```tsx
// Basic usage
<NodePort type="input" label="Input Port" />

// Warning state with icon
<NodePort type="input" label="Warning Port" state="warning" />

// Error state with red port handle
<NodePort type="input" label="Error Port" state="error" />

// Success state with themed success tokens (no icon)
<NodePort type="input" label="Success Port" state="success" />

// With interactive handle
<NodePort
    type="output"
    label="Output Port"
    interactiveHandle={
        <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'transparent',
            border: '1px solid red',
            cursor: 'pointer'
        }} />
    }
/>

## Theming

Success state styling uses the following theme tokens:
- actions.success (background)
- actions.onSuccess (border and text color)
```
