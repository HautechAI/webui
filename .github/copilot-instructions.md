# GitHub Copilot Instructions for WebUI Component Library

## Documentation Maintenance Guidelines

When making changes to this WebUI component library, always ensure documentation stays current and accurate. Follow these guidelines:

### 1. Root README.md Maintenance

When **adding a new component**:
- Add an entry to the components table in `/README.md`
- Include the component name and a clear, concise description of its purpose
- Maintain alphabetical order in the table

When **removing a component**:
- Remove the corresponding entry from the components table in `/README.md`
- Delete the component's individual README file

When **modifying a component's core purpose**:
- Update the component description in the root README.md table
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

**Naming Convention:**
- Component README files must be named exactly `README.md` (uppercase)
- Use the exact component name as defined in the TypeScript interface

**Description Quality:**
- Keep component descriptions concise but informative (1-2 sentences)
- Focus on the component's primary purpose and use cases
- Avoid technical jargon unless necessary
- Use consistent terminology across all documentation

**Parameter Documentation:**
- List all public props from the component's TypeScript interface
- Include optional parameters and mark them as optional in the description
- Describe the expected behavior for each parameter
- Include default values when relevant

### 4. Automated Checks

Before committing changes:
- Verify all component directories have README.md files
- Ensure the root README.md table includes all existing components
- Check that component parameter tables match TypeScript prop definitions
- Confirm all documentation follows the established format

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
- [ ] Root README.md table is complete and accurate
- [ ] All components have individual README.md files
- [ ] Parameter tables match TypeScript definitions
- [ ] Descriptions are clear and consistent
- [ ] No broken links or formatting issues
- [ ] New components are properly documented

## Tools and Resources

- Component TypeScript files are located in `/components/[ComponentName]/src/`
- Use the existing README files as templates for consistency
- Reference Storybook stories in `/apps/storybook/stories/` for usage examples

Remember: Documentation is as important as the code itself. Well-maintained documentation ensures developers can effectively use and contribute to this component library.