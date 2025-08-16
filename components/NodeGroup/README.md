# NodeGroup

## Purpose
A set of components for creating collapsible groups of items with headers. Provides a hierarchical organization structure for node-like data.

## Components

### NodeGroup
Main container component that provides collapsible functionality.

| Parameter | Type | Description |
|-----------|------|-------------|
| label | string | Text label for the group header |
| collapsed | boolean | Whether the group is collapsed (default: false) |
| children | React.ReactNode | Children to render when expanded |
| onToggle | () => void | Handler for toggle state |

### NodeGroupHeader
Header component with label and collapse/expand indicator.

| Parameter | Type | Description |
|-----------|------|-------------|
| label | string | Text label to display |
| collapsed | boolean | Whether the group is collapsed |
| onToggle | () => void | Handler for toggle state |

### NodeGroupItem
Individual item component with icon, title, and optional subtitle.

| Parameter | Type | Description |
|-----------|------|-------------|
| icon | React.ReactNode | Icon to display at the start of the item |
| title | string | Primary title text |
| subtitle | string | Optional subtitle text |

## Usage Example
```tsx
<NodeGroup 
    label="Extract" 
    collapsed={false}
    onToggle={() => setCollapsed(!collapsed)}
>
    <NodeGroupItem 
        icon={<MyIcon />}
        title="BoundingBox info"
        subtitle="Extracts details (position, size) from a bounding box"
    />
    <NodeGroupItem 
        icon={<MyIcon />}
        title="Image info"
        subtitle="Extracts metadata or dimensions from an image"
    />
</NodeGroup>
```