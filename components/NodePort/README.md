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

| Parameter         | Type                | Description                                                                          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------ |
| type              | 'input' \| 'output' | Specifies whether this is an input or output port, affecting positioning and styling |
| label             | string              | Optional label for the port, displayed using Typography component                    |
| interactiveHandle | ReactNode           | Optional interactive element rendered inside the port handle for custom interactions |

## Usage Example

```tsx
// Basic usage
<NodePort type="input" label="Input Port" />

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
```
