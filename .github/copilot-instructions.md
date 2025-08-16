# GitHub Copilot Instructions for WebUI Component Library

## Documentation Maintenance Guidelines

When making changes to this WebUI component library, always ensure documentation stays current and accurate. Follow these guidelines:

### 1. Root README.md Maintenance

When **adding a new component**:
- Add an entry to the appropriate category section in the components table in `/README.md`
- Include the component name as a markdown link to `components/[ComponentName]/README.md`
- Include a clear, concise description of its purpose
- Maintain alphabetical order within each category section
- Use the same categories as defined in Storybook: Layout, Input, Data Display, Navigation, Surfaces, Compositions, Interaction, Tabs, Icons, System

When **removing a component**:
- Remove the corresponding entry from the appropriate category section in the components table in `/README.md`
- Delete the component's individual README file

When **modifying a component's core purpose**:
- Update the component description in the appropriate category section of the root README.md table
- Update the component's individual README.md

### 2. Individual Component README.md Maintenance

Each component in `/components/[ComponentName]/` must have a `README.md` file with this exact structure:

```markdown
# [ComponentName]

## Purpose
[Brief description of what this component does and when to use it]

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| [paramName] | [TypeScript type] | [Clear description of the parameter's purpose] |

## Usage Example
[Optional: Brief code example showing basic usage]
```

**When modifying component props:**
- Always update the Parameters table in the component's README.md
- Ensure parameter types match the TypeScript definitions exactly
- Add descriptions for new parameters
- Remove obsolete parameters
- Update parameter descriptions if their behavior changes

### 3. Consistency Requirements

**Component Organization:**
- Components in the root README.md must be organized into categories matching Storybook structure: Layout, Input, Data Display, Navigation, Surfaces, Compositions, Interaction, Tabs, Icons, System
- Each category should have its own table section with clear header
- Components within each category should be listed alphabetically
- Component names must be formatted as markdown links: `[**ComponentName**](components/ComponentName/README.md)`

**Naming Convention:**
- Component README files must be named exactly `README.md` (uppercase)
- Use the exact component name as defined in the TypeScript interface
- Keep component descriptions concise but informative (1-2 sentences)
- Focus on the component's primary purpose and use cases
- Avoid technical jargon unless necessary
- Use consistent terminology across all documentation

**Description Quality:**
- List all public props from the component's TypeScript interface
- Include optional parameters and mark them as optional in the description
- Describe the expected behavior for each parameter
- Include default values when relevant

**Parameter Documentation:**

### 4. Automated Checks
Before committing changes:
- Verify all component directories have README.md files
- Ensure the root README.md table includes all existing components in properly organized category sections
- Verify component names are formatted as clickable markdown links
- Check that component parameter tables match TypeScript definitions
- Confirm all documentation follows the established format and category organization

### 5. Special Cases

**Complex Components:**
- For components with many parameters, group related parameters logically
- Consider adding usage examples for complex parameter combinations

**Deprecated Components:**
- Mark as deprecated in both root README and component README
- Include migration guidance when applicable

**Theme-related Components:**
- Ensure theme-specific parameters are clearly documented
- Reference theme structure when relevant

### 6. Review Checklist

When reviewing documentation changes:
- [ ] Root README.md table is complete and accurate with proper category organization
- [ ] All component names are formatted as clickable markdown links
- [ ] All components have individual README.md files
- [ ] Parameter tables match TypeScript definitions
- [ ] Descriptions are clear and consistent
- [ ] No broken links or formatting issues
- [ ] New components are properly documented in the correct category section

## Tools and Resources

- Component TypeScript files are located in `/components/[ComponentName]/src/`
- Use the existing README files as templates for consistency
- Reference Storybook stories in `/apps/storybook/stories/` for usage examples

## Icon Creation (Figma MCP)

When creating or updating icon components using Figma MCP (Dev Mode):

- Implement icons from the current Figma selection.
- Icons may expose parameters; map them to component props.
- Ignore any size parameter entirely (icons in this project have dynamic sizes).
- If there is a `Type` parameter with values `Outlined`/`Bold`, convert it to a `style` prop: `'outlined' | 'bold'`, with `outlined` as the default.
- Keep all other parameters as-is (names and types) and expose them as props without default values.
- Follow existing documentation rules: update the Icon component’s README parameters to include `style` and any other mapped props (omit size).
- Follow import/package rules in “Import Guidelines”.

## Theme Value Guidelines

### Use Only Theme Values
- **Never use hardcoded values** for dimensions, colors, animations, or other design tokens
- **Always use theme variables** from `themeVars` imported from ThemeProvider
- If a required value doesn't exist in the theme, request additional clarification before proceeding
- This ensures consistent design across all components and allows for theme customization

### Common Theme Value Mappings
- **Spacing**: Use `themeVars.spacing.{xs|s|m|ml|l|xl|xxl|xxxl}` for dimensions, padding, margins
- **Corner Radius**: Use `themeVars.cornerRadius.{xs|s|m|l|xl|xxl}` for border-radius values
- **Colors**: Use `themeVars.layout.*` or `themeVars.actions.*` for all color values
- **Animations**: Use `themeVars.animation.duration.*` and `themeVars.animation.timing.*`

### Exception Handling
- If a commonly used value (like opacity: 0.5 for disabled states) doesn't exist in theme, request clarification
- Document any exceptions and their rationale clearly

Remember: Documentation is as important as the code itself. Well-maintained documentation ensures developers can effectively use and contribute to this component library.

## Styling Guidelines

### CSS-in-JS with Linaria

This project uses `@linaria/react` for component styling. Follow these guidelines:

**Use `styled` components instead of `css` + className:**
- ✅ **Correct**: `import { styled } from '@linaria/react';`
- ❌ **Incorrect**: `import { css } from '@linaria/core';`

**Component styling pattern:**
```typescript
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

const StyledComponent = styled.div`
    // Base styles
    display: flex;
    background: ${themeVars.colors.surface};
    
    // Conditional styles using data attributes (preferred)
    &[data-selected="true"] {
        background: ${themeVars.colors.primary};
    }
    
    &[data-variant="outline"] {
        border: 1px solid ${themeVars.colors.border};
        background: transparent;
    }
    
    // Hover and other pseudo-selectors
    &:hover {
        background: ${themeVars.colors.hover};
    }
`;

// Usage in component:
// <StyledComponent data-selected={selected} data-variant={variant} />
```

**Key principles:**
- Use `styled` components for all styling needs
- **Prefer data attributes over styled component props** for conditional styling (e.g., `data-selected`, `data-variant`)
- Use CSS attribute selectors like `&[data-selected="true"]` instead of prop-based conditional styles
- Handle interactive states (hover, focus, active) via CSS pseudo-selectors, not JavaScript props
- Use theme variables from `@hautechai/webui.themeprovider` for consistent theming
- Avoid conditional rendering of elements for visual states - render elements and control visibility/appearance with CSS

## Import Guidelines

### Component Import Rules
- **Inside components/**/src**: Import other components only by package name:
  ```typescript
  import { Button } from '@hautechai/webui.button';
  import { Typography } from '@hautechai/webui.typography';
  ```
- **Inside components/**/**: You can import current Component and Theme by relative path:
  ```typescript
  import { MyComponent } from '../src/';
  import { themeVars } from '../ThemeProvider/src';
  ```

These rules ensure proper module resolution and maintain clean package boundaries while allowing relative imports for local components and testing.

## Package Resolution Guidelines

### Test Environment Setup
- **Do not add aliases** in test configuration files like `vitest.config.ts` to resolve workspace packages
- If a package cannot be resolved during testing, it should be added to the appropriate `package.json` dependencies and `pnpm install` should be executed
- This ensures proper dependency management and avoids masking real module resolution issues
- Test environments should mirror production module resolution as closely as possible