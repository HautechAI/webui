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
- **Create comprehensive tests** in `components/[ComponentName]/__tests__/` covering component functionality, props, and edge cases
- **Create Storybook stories** in `apps/storybook/stories/[ComponentName].stories.tsx` demonstrating all component states and variations

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

| Parameter   | Type              | Description                                    |
| ----------- | ----------------- | ---------------------------------------------- |
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
- [ ] New components include comprehensive test coverage
- [ ] New components include Storybook stories demonstrating all states and variations

## Tools and Resources

- Component TypeScript files are located in `/components/[ComponentName]/src/`
- Use the existing README files as templates for consistency
- Reference Storybook stories in `/apps/storybook/stories/` for usage examples

## Component Development Requirements

### Testing Requirements

Every new component **must** include comprehensive test coverage:

- Create tests in `components/[ComponentName]/__tests__/` directory
- Cover all component functionality, props, and edge cases
- Test user interactions and event handlers
- Include accessibility testing where applicable
- Follow existing test patterns in the codebase

### Storybook Requirements

Every new component **must** include Storybook stories:

- Create stories in `apps/storybook/stories/[ComponentName].stories.tsx`
- Demonstrate all component states and variations
- Include examples with different prop combinations
- Show interactive features and edge cases (long text, etc.)
- Use consistent story naming and organization patterns
- Follow the existing story structure with proper categories

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

## Development Workflow & Git Hooks

### Git Hooks Configuration

This repository has Git hooks configured using Husky that automatically run quality checks before commits. **To avoid commit errors**, always ensure your code passes linting and tests before attempting to commit.

### Required Commands Before Committing

Always run these commands before committing changes:

```bash
pnpm lint      # Run ESLint, Prettier, and TypeScript checks
pnpm test:run  # Run all tests
```

### Fixing Common Issues

**Formatting Issues**: Many linting issues (mainly related to code formatting) can be automatically fixed:

```bash
pnpm lint:fix  # Automatically fix ESLint and Prettier issues
```

**Other Issues**: All remaining issues should be fixed manually on a case-by-case basis before committing.

### What the Git Hooks Do

The pre-commit hook automatically runs:

1. `pnpm lint` - Validates code style, formatting, and TypeScript compilation
2. `pnpm test:run` - Ensures all tests pass

If either command fails, the commit will be rejected. Fix all issues before attempting to commit again.

### Recommended Workflow

1. Make your code changes
2. Run `pnpm lint:fix` to auto-fix formatting issues
3. Run `pnpm lint` to check for remaining issues
4. Fix any remaining issues manually
5. Run `pnpm test:run` to ensure tests pass
6. Commit your changes (hooks will run automatically)

## Component Change Requirements

### Mandatory Updates for Significant Changes

**Every significant change to a component must include updates to all three areas:**

1. **Tests** - Add or update test cases in `components/[ComponentName]/__tests__/`
2. **Documentation** - Update the component's `README.md` file
3. **Storybook** - Add or update stories in `apps/storybook/stories/`

### What Constitutes a "Significant Change"

A significant change includes any of the following:

- **New Feature**: Adding new functionality or behavior to a component
- **New Prop**: Adding a new parameter/prop to the component interface
- **Changed Behavior**: Modifying existing functionality or prop behavior
- **New Variant**: Adding new visual variants, states, or styling options
- **Breaking Change**: Any change that affects the component's public API

### Test Coverage Guidelines

**When adding new features or props:**

- Add specific test cases that verify the new functionality works correctly
- Test different prop combinations if the new feature interacts with existing props
- Include edge cases and error conditions where applicable
- Follow the existing test pattern:
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { render } from '@testing-library/react';
    import React from 'react';
    import { YourComponent } from '../src/YourComponent';
    import { ThemeProvider } from '../../ThemeProvider/src';
    import { testTheme } from '../../test-theme';
    ```

**When modifying existing behavior:**

- Update existing tests to reflect the new behavior
- Ensure all tests continue to pass
- Add new tests if the behavior change introduces new scenarios to test

### Storybook Story Guidelines

**When adding new features or props:**

- Create new stories that demonstrate the new functionality
- Use descriptive story names that clearly indicate what the story demonstrates
- Include the new props in existing stories where they make sense
- Follow the existing story pattern with proper categorization (Input, Layout, etc.)

**When adding new variants:**

- Create dedicated stories for each new variant
- Ensure stories cover all combinations of the new variant with existing options
- Use clear naming conventions: `[Variant][Size]`, `With[Feature]`, etc.

### Documentation Update Guidelines

**When adding new props:**

- Add the new prop to the Parameters table with correct TypeScript type
- Include clear description of the prop's purpose and behavior
- Mark optional props appropriately
- Include default values when relevant

**When changing existing props:**

- Update the prop description to reflect new behavior
- Update TypeScript types if they changed
- Update usage examples if they no longer work

**When adding new features:**

- Update the Purpose section if the component's primary purpose expanded
- Add new usage examples that demonstrate the new feature
- Update the description to mention new capabilities

### Validation Checklist

Before submitting component changes:

- [ ] Tests added/updated for new functionality
- [ ] All tests pass (`pnpm test:run`)
- [ ] Storybook stories added/updated for new features
- [ ] Storybook builds without errors (`pnpm dev`)
- [ ] Component README.md updated with new props/behavior
- [ ] Root README.md updated if component purpose changed significantly
- [ ] Changes follow existing patterns and conventions

## Styling Guidelines

### CSS-in-JS with Emotion

**Key principles:**

- Use `styled` components for all styling needs
- **Prefer data attributes over styled component props** for conditional styling (e.g., `data-selected`, `data-variant`)
- Use CSS attribute selectors like `&[data-selected="true"]` instead of prop-based conditional styles
- Handle interactive states (hover, focus, active) via CSS pseudo-selectors, not JavaScript props
- Use theme variables from `@hautechai/webui.themeprovider` for consistent theming
- Avoid conditional rendering of elements for visual states - render elements and control visibility/appearance with CSS

## Import Guidelines

### Component Import Rules

- **Inside components/**/src\*\*: Import other components only by package name:
    ```typescript
    import { Button } from '@hautechai/webui.button';
    import { Typography } from '@hautechai/webui.typography';
    ```
- **Inside components/**/\*\*: You can import current Component and Theme by relative path:
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
