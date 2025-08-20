# NodeContainer

## Purpose

Container component that provides the basic structure and styling for Node components in the node-based interface.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.nodecontainer

# npm
npm install @hautechai/webui.nodecontainer

# yarn
yarn add @hautechai/webui.nodecontainer
```

## Parameters

| Parameter | Type            | Description                                               |
| --------- | --------------- | --------------------------------------------------------- |
| children  | React.ReactNode | Child components to be rendered inside the node container |
| width     | number          | Optional width of the node container in pixels            |
| selected  | boolean         | Whether the node container is in selected state           |

## Usage Example

```tsx
// Basic node container
<NodeContainer>
    <NodeHeader label="My Node" />
    <NodeContent>Node content here</NodeContent>
</NodeContainer>

// Selected node container
<NodeContainer selected={true}>
    <NodeHeader label="Selected Node" />
    <NodeContent>This node is selected</NodeContent>
</NodeContainer>

// Node container with custom width
<NodeContainer width={400} selected={false}>
    <NodeHeader label="Custom Width Node" />
</NodeContainer>
```
