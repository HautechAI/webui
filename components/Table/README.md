# Table

## Purpose

Data table component with sorting, selection, pagination, and customizable columns for displaying structured data.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.table

# npm
npm install @hautechai/webui.table

# yarn
yarn add @hautechai/webui.table
```

## Parameters

| Parameter  | Type                                        | Description                                                   |
| ---------- | ------------------------------------------- | ------------------------------------------------------------- |
| data       | array                                       | Required array of data objects to display in table rows       |
| columns    | array                                       | Required column configuration with headers and cell renderers |
| sortable   | boolean                                     | When true, enables column sorting functionality               |
| selectable | boolean                                     | When true, enables row selection with checkboxes              |
| pagination | object                                      | Optional pagination configuration                             |
| onSort     | (column: string, direction: string) => void | Optional sort change callback                                 |
| onSelect   | (selectedRows: any[]) => void               | Optional selection change callback                            |

May include additional parameters for filtering and custom cell rendering.

## Usage Example

```tsx
<Table
    data={tableData}
    columns={columnConfig}
    sortable={true}
    selectable={true}
    onSort={handleSort}
    onSelect={handleSelection}
/>
```
