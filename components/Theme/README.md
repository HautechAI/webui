# Theme

## Purpose

Theme configuration object containing all design system values including colors, spacing, typography, and styling constants.

## Parameters

This component exports a theme object with design system values and does not accept props. It provides:

- Foundation values (animation, corner radius, spacing, stroke, elevation)
- Color palette (layout, actions, semantic colors)
- Typography system
- Component-specific styling tokens

## Usage Example

```tsx
import { Theme } from '@hautechai/webui.theme';

// Access theme values
const primaryColor = Theme.palette.actions.primary;
const mediumSpacing = Theme.foundation.spacing.m;
```
