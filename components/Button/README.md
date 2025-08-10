# Button

## Purpose
Primary action button component with customizable variants, hierarchies, icons, and styling options for user interactions.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id | string | Optional identifier for the button element |
| variant | 'filled' \| 'outlined' | Visual style variant - filled (solid background) or outlined (border only) |
| hierarchy | 'primary' \| 'secondary' | Button importance level affecting color scheme and visual prominence |
| size | 'medium' \| 'small' | Size variant controlling padding, font size, and overall dimensions |
| label | string | Text content displayed on the button |
| leadingIcon | React.ReactNode | Optional icon displayed before the label text |
| trailingIcon | React.ReactNode | Optional icon displayed after the label text |
| disabled | boolean | When true, disables button interaction and applies disabled styling |
| onClick | (e: React.MouseEvent<HTMLButtonElement>) => void | Click event handler function |
| stretch | boolean | When true, button expands to fill available width |

## Usage Example
```tsx
<Button 
  variant="filled" 
  hierarchy="primary" 
  label="Save Changes"
  onClick={handleSave}
/>
```