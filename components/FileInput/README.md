# FileInput

## Purpose

File upload control component with drag-and-drop support, file type validation, and preview capabilities.

## Parameters

| Parameter   | Type                      | Description                                                     |
| ----------- | ------------------------- | --------------------------------------------------------------- |
| accept      | string                    | Optional file type restrictions (e.g., "image/\*", ".pdf,.doc") |
| multiple    | boolean                   | When true, allows selection of multiple files                   |
| onChange    | (files: FileList) => void | Optional callback function triggered when files are selected    |
| disabled    | boolean                   | When true, disables file input interaction                      |
| placeholder | string                    | Optional placeholder text displayed in the input area           |

May include additional parameters for styling, validation, and preview options.

## Usage Example

```tsx
<FileInput
    accept="image/*"
    multiple={true}
    placeholder="Drop images here or click to browse"
    onChange={handleFileUpload}
/>
```
