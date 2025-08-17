# Card

## Purpose

Content container component displaying an image with label and action buttons for showcasing media or content items.

## Parameters

| Parameter     | Type                                 | Description                                             |
| ------------- | ------------------------------------ | ------------------------------------------------------- |
| label         | string                               | Text label displayed below the image                    |
| image         | string                               | Source URL for the card's main image                    |
| icon          | React.ReactNode                      | Optional icon overlay displayed on the image            |
| aspectRatio   | number                               | Optional aspect ratio to maintain for the image display |
| width         | number \| string                     | Optional fixed width for the card                       |
| height        | number \| string                     | Optional fixed height for the card                      |
| fullWidth     | boolean                              | When true, card expands to fill available width         |
| onDownload    | () => void                           | Optional callback function for download action          |
| onClick       | React.MouseEventHandler<HTMLElement> | Optional click handler for the entire card              |
| href          | string                               | Optional URL to make the card act as a link             |
| tileComponent | TileProps['component']               | Optional component override for the tile element        |

## Usage Example

```tsx
<Card
    label="Sample Image"
    image="/path/to/image.jpg"
    aspectRatio={16 / 9}
    onDownload={handleDownload}
    onClick={handleCardClick}
/>
```
