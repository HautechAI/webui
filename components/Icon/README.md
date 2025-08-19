# Icon

## Purpose

Scalable icon component providing various icon options with consistent sizing and styling.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.icon

# npm
npm install @hautechai/webui.icon

# yarn
yarn add @hautechai/webui.icon
```

## Parameters

This component provides a collection of icon components. Each specific icon has its own props for size and styling customization. Common parameters include:

| Parameter | Type                 | Description                                                          |
| --------- | -------------------- | -------------------------------------------------------------------- |
| size      | number               | Optional size dimension for the icon (typically in pixels)           |
| color     | IconColorProp        | Optional color for the icon (theme path, currentColor, hex, or rgba) |
| style     | 'outlined' \| 'bold' | Optional style variant for supported icons (defaults to 'outlined')  |

Individual icon components may have additional specific properties.

## Style Variants

Some icons support both `outlined` and `bold` style variants:

- **GenerateIcon** - Supports `outlined` (default) and `bold` styles
- **SettingsIcon** - Supports `outlined` (default) and `bold` styles
- **PlayIcon** - Supports `outlined` (default) and `bold` styles
- **PauseIcon** - Supports `outlined` (default) and `bold` styles
- **SkipToStartIcon** - Supports `outlined` (default) and `bold` styles
- **SkipToEndIcon** - Supports `outlined` (default) and `bold` styles
- **RewindBackIcon** - Supports `outlined` (default) and `bold` styles
- **RewindForwardIcon** - Supports `outlined` (default) and `bold` styles
- **StopIcon** - Supports `outlined` (default) and `bold` styles

## Usage Example

```tsx
import {
  SearchIcon,
  PlayIcon,
  PauseIcon,
  SettingsIcon,
  PlaySquareIcon,
  WIcon,
  HIcon,
  AngleIcon,
  OptionsIcon
  XIcon,
  YIcon
} from '@hautechai/webui.icon';

// Basic usage
<SearchIcon size={24} />
<RepeatIcon size={20} />
<XIcon size={24} />
<YIcon size={24} />

// Using style variants
<PlayIcon size={24} style="outlined" />
<PlayIcon size={24} style="bold" />
<SettingsIcon size={20} style="bold" />

// Renamed icon
<PlaySquareIcon size={24} />

// New icons
<WIcon size={24} />
<HIcon size={24} />
<AngleIcon size={24} />
<OptionsIcon size={24} />
```
