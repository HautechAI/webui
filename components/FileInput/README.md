# FileInput

## Purpose

File upload control component with drag-and-drop support, file type validation, and preview capabilities.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.fileinput

# npm
npm install @hautechai/webui.fileinput

# yarn
yarn add @hautechai/webui.fileinput
```

## Parameters

| Parameter               | Type                     | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange                | (files: File[]) => void  | Callback function that is called when files are selected                                                                                                                                                                                                                                                                                                                                          |
| accept                  | Record<string, string[]> | Set accepted file types. Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all |
| maxFiles                | number                   | Maximum number of files that can be selected                                                                                                                                                                                                                                                                                                                                                      |
| maxSize                 | number                   | Maximum file size (in bytes)                                                                                                                                                                                                                                                                                                                                                                      |
| label                   | string                   | Label for the file input                                                                                                                                                                                                                                                                                                                                                                          |
| labelDragActive         | string                   | Optional label to display when files are being dragged over the input                                                                                                                                                                                                                                                                                                                             |
| labelDragRejected       | string                   | Optional label to display when files are being dragged over the input                                                                                                                                                                                                                                                                                                                             |
| labelDragRejectedButton | string                   | Optional label to display when files are being dragged over the input                                                                                                                                                                                                                                                                                                                             |
| labelButton             | string                   | Optional label for upload button                                                                                                                                                                                                                                                                                                                                                                  |
| stopPropagation         | boolean                  | Whether to stop event propagation on drag events. Defaults to true to prevent interference with parent drag handlers                                                                                                                                                                                                                                                                              |
| variant                 | 'dropzone' \| 'button'   | Visual variant of the file input                                                                                                                                                                                                                                                                                                                                                                  |
| stretch                 | boolean                  | Whether to stretch the component to fill available width                                                                                                                                                                                                                                                                                                                                          |

## Usage Example

```tsx
<FileInput
    accept="image/*"
    multiple={true}
    placeholder="Drop images here or click to browse"
    onChange={handleFileUpload}
/>
```
