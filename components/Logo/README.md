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

| Parameter | Type                 | Description                                                                                                    |
| --------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| name      | 'hautech' \| 'liana' | Optional brand name - 'hautech' for Hautech logo (default), 'liana' for Liana logo                             |
| variant   | 'full' \| 'icon'     | Optional logo variant - 'full' shows complete logo with text, 'icon' shows minimal icon only (default: 'full') |

Inherits all standard SVG element properties through SVGProps<SVGSVGElement>.

## Usage Example

```tsx
// Hautech logos
<Logo name="hautech" variant="full" width={165} height={40} />
<Logo name="hautech" variant="icon" width={32} height={32} />

// Liana logos
<Logo name="liana" variant="full" width={92} height={26} />
<Logo name="liana" variant="icon" width={32} height={26} />

// Default behavior (Hautech full logo)
<Logo />
```
