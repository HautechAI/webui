# Panel

## Purpose

Content container component with configurable hierarchy, sizing, and visual styling options.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.panel

# npm
npm install @hautechai/webui.panel

# yarn
yarn add @hautechai/webui.panel
```

## Parameters

| Parameter   | Type                     | Description                                                                            |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------- |
| className   | string                   | Optional CSS class name for custom styling                                             |
| children    | React.ReactNode          | Optional content to be displayed within the panel                                      |
| hierarchy   | 'mid' \| 'low' \| 'high' | Optional visual hierarchy level affecting background and elevation (defaults to 'mid') |
| size        | 'small' \| 'medium'      | Optional size variant controlling padding and dimensions (defaults to 'medium')        |
| stretch     | boolean                  | When true, panel expands to fill available space                                       |
| highlighted | boolean                  | When true, applies highlighted styling to draw attention                               |

## Usage Example

```tsx
<Panel hierarchy="high" size="medium" highlighted={true} stretch={false}>
    <ContentArea />
</Panel>
```
