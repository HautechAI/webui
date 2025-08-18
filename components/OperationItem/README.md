# OperationItem

## Purpose

Component for displaying operation status, progress, and details with actions for ongoing or completed operations.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.operationitem

# npm
npm install @hautechai/webui.operationitem

# yarn
yarn add @hautechai/webui.operationitem
```

## Parameters

| Parameter   | Type            | Description                                       |
| ----------- | --------------- | ------------------------------------------------- |
| title       | string          | Required operation title or name                  |
| status      | string          | Required current status of the operation          |
| progress    | number          | Optional progress percentage (0-100)              |
| description | string          | Optional detailed description of the operation    |
| actions     | React.ReactNode | Optional action buttons or controls               |
| timestamp   | string          | Optional timestamp for operation start/completion |

May include additional parameters for status indicators and operation metadata.

## Usage Example

```tsx
<OperationItem
    title="File Upload"
    status="In Progress"
    progress={75}
    description="Uploading document.pdf"
    actions={<Button label="Cancel" />}
/>
```
