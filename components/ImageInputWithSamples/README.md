# ImageInputWithSamples

## Purpose

Enhanced image input component that includes predefined sample images for quick selection alongside upload functionality.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.imageinputwithsamples

# npm
npm install @hautechai/webui.imageinputwithsamples

# yarn
yarn add @hautechai/webui.imageinputwithsamples
```

## Parameters

| Parameter   | Type                    | Description                                             |
| ----------- | ----------------------- | ------------------------------------------------------- |
| value       | string                  | Optional current image URL or base64 data               |
| onChange    | (image: string) => void | Optional callback function triggered when image changes |
| samples     | string[]                | Optional array of sample image URLs for quick selection |
| placeholder | string                  | Optional placeholder text for empty state               |
| disabled    | boolean                 | When true, disables input interaction                   |

May include additional parameters for customizing sample layout and upload options.

## Usage Example

```tsx
<ImageInputWithSamples
    value={selectedImage}
    onChange={setSelectedImage}
    samples={['/sample1.jpg', '/sample2.jpg', '/sample3.jpg']}
    placeholder="Choose or upload an image"
/>
```
