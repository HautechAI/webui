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

| Parameter | Type                | Description                                                                          |
| --------- | ------------------- | ------------------------------------------------------------------------------------ |
| type      | 'input' \| 'output' | Specifies whether this is an input or output port, affecting positioning and styling |
| label     | string              | Optional label for the port, displayed using Typography component                    |
