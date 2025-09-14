# Logo

## Purpose

Brand logo display component with variant options for different contexts and sizing needs.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.logo

# npm
npm install @hautechai/webui.logo

# yarn
yarn add @hautechai/webui.logo
```

## Parameters

| Parameter | Type                 | Description                                                                                                                                  |
| --------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | 'hautech' \| 'liana' | Optional brand name - 'hautech' for Hautech logo (default), 'liana' for Liana logo                                                           |
| variant   | 'full' \| 'icon'     | Optional logo variant - 'full' shows complete logo with text, 'icon' shows minimal icon only (note: Liana logo only supports 'full' variant) |

Inherits all standard SVG element properties through SVGProps<SVGSVGElement>.

## Usage Example

```tsx
<Logo name="hautech" variant="full" width={120} height={40} />
<Logo name="liana" width={92} height={26} />
```
