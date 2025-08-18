# Tile

## Purpose

Content tile component with image/video background, overlay content, and flexible sizing options.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.tile

# npm
npm install @hautechai/webui.tile

# yarn
yarn add @hautechai/webui.tile
```

## Parameters

| Parameter   | Type                      | Description                                                        |
| ----------- | ------------------------- | ------------------------------------------------------------------ |
| className   | string                    | Optional CSS class name for custom styling                         |
| icon        | React.ReactNode           | Optional icon overlay displayed on the tile                        |
| src         | string                    | Optional source URL for image or video content                     |
| selected    | boolean                   | When true, applies selected state styling                          |
| size        | TileSize                  | Optional predefined size variant                                   |
| width       | number \| string          | Optional custom width (mutually exclusive with size)               |
| height      | number \| string          | Optional custom height (mutually exclusive with size)              |
| aspectRatio | number                    | Optional aspect ratio constraint                                   |
| component   | 'div' \| 'img' \| 'video' | Optional HTML element type for the tile (defaults to 'div')        |
| alt         | string                    | Optional alt text for accessibility (when component is 'img')      |
| color       | IconColorProp             | Optional background color (theme path, currentColor, hex, or rgba) |

## Usage Example

```tsx
<Tile
    src="/path/to/image.jpg"
    icon={<PlayIcon />}
    aspectRatio={16 / 9}
    selected={isSelected}
    component="img"
    alt="Content preview"
    color="actions.primary"
/>

// Using hex color
<Tile
    icon={<PlayIcon />}
    size="medium"
    color="#ff6b35"
/>

// Using theme palette path
<Tile
    icon={<StarIcon />}
    color="layout.surfaceHigh"
/>
```
