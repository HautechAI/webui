# SegmentedControl

## Purpose

Multi-option selector component with segmented button appearance for choosing between related options.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.segmentedcontrol

# npm
npm install @hautechai/webui.segmentedcontrol

# yarn
yarn add @hautechai/webui.segmentedcontrol
```

## Parameters

| Parameter    | Type                                       | Description                                                         |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------- |
| options      | Option[]                                   | Required array of selectable options with labels and values         |
| value        | string                                     | Optional controlled selected value                                  |
| defaultValue | string                                     | Optional default selected value                                     |
| onChange     | (event: MouseEvent, value: string) => void | Optional callback function when selection changes                   |
| material     | boolean                                    | When true, uses material design variant instead of HIG              |
| whitespace   | keyof ThemeType['foundation']['spacing']   | Optional spacing to add left/right padding to items                 |
| stretch      | boolean                                    | When true, component takes full width with evenly distributed items |
| size         | 'default' \| 'small'                       | Optional size variant - small has 28px total height                 |

## Usage Example

```tsx
<SegmentedControl
    options={[
        { label: 'List', value: 'list' },
        { label: 'Grid', value: 'grid' },
        { label: 'Cards', value: 'cards' },
    ]}
    value={viewMode}
    onChange={(event, value) => setViewMode(value)}
    stretch={true}
    whitespace="l"
/>
```
