# WebUI Component Library

A comprehensive React component library built with TypeScript, providing reusable UI components for modern web applications.

## Components

The library includes the following components organized by category:

### Layout

| Component | Description |
|-----------|-------------|
| [**Box**](components/Box/README.md) | Flexible layout container with configurable dimensions and styling |
| [**Column**](components/Column/README.md) | Vertical layout container for stacking components |
| [**Masonry**](components/Masonry/README.md) | Grid layout that arranges items in a masonry-style layout |
| [**Row**](components/Row/README.md) | Horizontal layout container for arranging components |

### Input

| Component | Description |
|-----------|-------------|
| [**Button**](components/Button/README.md) | Primary action button with variants, icons, and different hierarchies |
| [**ButtonBase**](components/ButtonBase/README.md) | Base button component providing common button functionality |
| [**Checkbox**](components/Checkbox/README.md) | Input control for boolean selection with custom styling |
| [**Counter**](components/Counter/README.md) | Numeric display with increment/decrement controls |
| [**Dropdown**](components/Dropdown/README.md) | Select input with customizable options and styling |
| [**Field**](components/Field/README.md) | Form field wrapper with label, error, and validation states |
| [**FileInput**](components/FileInput/README.md) | File upload control with drag-and-drop support |
| [**IconButton**](components/IconButton/README.md) | Button component optimized for displaying icons |
| [**ImageInput**](components/ImageInput/README.md) | Specialized input for image upload and preview |
| [**LinkButton**](components/LinkButton/README.md) | Button styled as a hyperlink with navigation capabilities |
| [**SegmentedControl**](components/SegmentedControl/README.md) | Multi-option selector with segmented button appearance |
| [**Slider**](components/Slider/README.md) | Range input control for selecting numeric values |
| [**Switch**](components/Switch/README.md) | Toggle control for boolean on/off states |
| [**TextArea**](components/TextArea/README.md) | Multi-line text input with resizing capabilities |
| [**TextButton**](components/TextButton/README.md) | Button component optimized for text-only labels |
| [**TextInput**](components/TextInput/README.md) | Single-line text input with validation and styling |

### Data Display

| Component | Description |
|-----------|-------------|
| [**Avatar**](components/Avatar/README.md) | User profile image or initials display component |
| [**Badge**](components/Badge/README.md) | Small notification indicator to highlight status or count |
| [**Chip**](components/Chip/README.md) | Compact element for tags, filters, or selection indicators |
| [**DataItem**](components/DataItem/README.md) | Structured display for key-value data pairs |
| [**Divider**](components/Divider/README.md) | Visual separator line between content sections |
| [**Hint**](components/Hint/README.md) | Tooltip-like component for providing contextual help |
| [**Logo**](components/Logo/README.md) | Brand logo display component with sizing options |
| [**Menu**](components/Menu/README.md) | Dropdown menu container for navigation or actions |
| [**MenuItem**](components/MenuItem/README.md) | Individual item within a menu component |
| [**Modal**](components/Modal/README.md) | Overlay dialog for focused user interactions |
| [**Panel**](components/Panel/README.md) | Collapsible content container with header and body |
| [**Previews**](components/Previews/README.md) | Component for displaying content previews or thumbnails |
| [**Price**](components/Price/README.md) | Formatted display for pricing information |
| [**Progress**](components/Progress/README.md) | Visual indicator for task or loading progress |
| [**Table**](components/Table/README.md) | Data table component with sorting and selection |
| [**Tile**](components/Tile/README.md) | Content tile with image background and overlay content |
| [**Tooltip**](components/Tooltip/README.md) | Contextual popup with information or help text |
| [**Typography**](components/Typography/README.md) | Text rendering component with various styles and variants |
| [**User**](components/User/README.md) | User profile display with avatar and information |

### Navigation

| Component | Description |
|-----------|-------------|
| [**ContextMenu**](components/ContextMenu/README.md) | Right-click or long-press activated menu with actions |
| [**Pagination**](components/Pagination/README.md) | Navigation control for paginated content |

### Surfaces

| Component | Description |
|-----------|-------------|
| [**AppBar**](components/AppBar/README.md) | Top navigation bar with configurable left, center, and right content areas |
| [**AppBarMobile**](components/AppBarMobile/README.md) | Mobile-optimized version of the app bar with responsive behavior |
| [**BottomSheet**](components/BottomSheet/README.md) | Slide-up modal panel for mobile-first interfaces |
| [**FloatingPanel**](components/FloatingPanel/README.md) | Draggable overlay panel that floats above content |
| [**FullScreen**](components/FullScreen/README.md) | Component wrapper that enables fullscreen mode |
| [**Sidebar**](components/Sidebar/README.md) | Navigation panel typically positioned on page side |

### Compositions

| Component | Description |
|-----------|-------------|
| [**AspectRatio**](components/AspectRatio/README.md) | Container that maintains a specific aspect ratio for its content |
| [**Card**](components/Card/README.md) | Content container with image, label, and action buttons |
| [**ImageInputWithSamples**](components/ImageInputWithSamples/README.md) | Image input with predefined sample options |
| [**OperationItem**](components/OperationItem/README.md) | Component for displaying operation status and details |
| [**UserBalance**](components/UserBalance/README.md) | Specialized component for displaying user account balance |

### Interaction

| Component | Description |
|-----------|-------------|
| [**HoverControls**](components/HoverControls/README.md) | Action buttons that appear on hover interactions |
| [**KeyframeToggle**](components/KeyframeToggle/README.md) | Toggle button component for keyframe interactions in timeline interfaces |
| [**Popover**](components/Popover/README.md) | Floating content container positioned relative to trigger |

### Tabs

| Component | Description |
|-----------|-------------|
| [**TileTabGroup**](components/TileTabGroup/README.md) | Tab container using tile-based visual style |
| [**TileTabItem**](components/TileTabItem/README.md) | Individual tab item within a tile tab group |

### Icons

| Component | Description |
|-----------|-------------|
| [**Icon**](components/Icon/README.md) | Scalable icon component with various icon options |

### VisualEditor

| Component | Description |
|-----------|-------------|
| [**TimelineTrack**](components/TimelineTrack/README.md) | Visual timeline track component for representing when elements are visible in a composition, with draggable and resizable functionality |

### System

| Component | Description |
|-----------|-------------|
| [**Theme**](components/Theme/README.md) | Theme configuration and styling definitions |
| [**ThemeProvider**](components/ThemeProvider/README.md) | Context provider for theme management across components |

## Getting Started

Each component has its own documentation with detailed parameter descriptions and usage examples. Navigate to the individual component directories under `/components` to find specific documentation for each component.

## Development

This project uses:
- TypeScript for type safety
- Lerna for monorepo management
- pnpm for package management  
- Storybook for component development and documentation

To start development:
```bash
pnpm install
pnpm dev
```
