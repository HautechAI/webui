# Tile

## Purpose
Content tile component with image/video background, overlay content, and flexible sizing options.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| className | string | Optional CSS class name for custom styling |
| icon | React.ReactNode | Optional icon overlay displayed on the tile |
| src | string | Optional source URL for image or video content |
| selected | boolean | When true, applies selected state styling |
| size | TileSize | Optional predefined size variant |
| width | number \| string | Optional custom width (mutually exclusive with size) |
| height | number \| string | Optional custom height (mutually exclusive with size) |
| aspectRatio | number | Optional aspect ratio constraint |
| component | 'div' \| 'img' \| 'video' | Optional HTML element type for the tile (defaults to 'div') |
| alt | string | Optional alt text for accessibility (when component is 'img') |

## Usage Example
```tsx
<Tile 
  src="/path/to/image.jpg"
  icon={<PlayIcon />}
  aspectRatio={16/9}
  selected={isSelected}
  component="img"
  alt="Content preview"
/>
```