# ImageInput

## Purpose

Specialized input component for image upload and preview with cropping and editing capabilities.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.imageinput

# npm
npm install @hautechai/webui.imageinput

# yarn
yarn add @hautechai/webui.imageinput
```

## Parameters

| Parameter   | Type                    | Description                                                       |
| ----------- | ----------------------- | ----------------------------------------------------------------- |
| value       | string                  | Optional current image URL or base64 data                         |
| onChange    | (image: string) => void | Optional callback function triggered when image changes           |
| placeholder | string                  | Optional placeholder text for empty state                         |
| accept      | string                  | Optional image file type restrictions (defaults to image formats) |
| disabled    | boolean                 | When true, disables image input interaction                       |

May include additional parameters for image processing, cropping, and size constraints.

## Usage Example

```tsx
<ImageInput
    value={currentImage}
    onChange={setCurrentImage}
    placeholder="Upload profile picture"
    disabled={isUploading}
/>
```
