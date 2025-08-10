# Logo

## Purpose
Brand logo display component with variant options for different contexts and sizing needs.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| variant | 'full' \| 'icon' | Optional logo variant - 'full' shows complete logo with text, 'icon' shows minimal icon only |

Inherits all standard SVG element properties through SVGProps<SVGSVGElement>.

## Usage Example
```tsx
<Logo 
  variant="full"
  width={120}
  height={40}
/>
```