# TextButton

## Purpose
Text-only button component optimized for minimal visual presence with hierarchy and icon support.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| hierarchy | 'primary' \| 'secondary' | Optional visual hierarchy affecting color and emphasis (defaults to 'primary') |
| size | 'medium' \| 'small' \| 'xsmall' | Optional size variant controlling typography and spacing (defaults to 'medium') |
| label | string | Required text content displayed on the button |
| leadingIcon | React.ReactNode | Optional icon displayed before the label text |
| trailingIcon | React.ReactNode | Optional icon displayed after the label text |
| disabled | boolean | When true, disables button interaction and applies disabled styling |
| onClick | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function |

## Usage Example
```tsx
<TextButton 
  hierarchy="primary"
  size="medium"
  label="Learn More"
  trailingIcon={<ArrowIcon />}
  onClick={handleLearnMore}
/>
```