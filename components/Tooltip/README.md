# Tooltip

## Purpose

Contextual popup component providing additional information or help text with flexible positioning and sizing options.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.tooltip

# npm
npm install @hautechai/webui.tooltip

# yarn
yarn add @hautechai/webui.tooltip
```

## Parameters

| Parameter       | Type                                   | Description                                                                  |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| text            | string                                 | Required tooltip content text to display                                     |
| children        | React.ReactNode                        | Required trigger element that activates the tooltip on hover                 |
| position        | 'right' \| 'left' \| 'top' \| 'bottom' | Optional tooltip positioning relative to trigger element                     |
| reposition      | boolean                                | Optional flag to enable automatic repositioning when tooltip goes off-screen |
| boundaryElement | HTMLElement                            | Optional boundary element for repositioning calculations                     |
| size            | 'small' \| 'medium'                    | Optional size variant affecting padding and appearance                       |
| buttonLabel     | string                                 | Optional button label (only available when size is 'medium')                 |
| onClick         | () => void                             | Optional click handler for button (only available when size is 'medium')     |

## Usage Example

```tsx
<Tooltip
    text="This is helpful information"
    position="top"
    size="medium"
    buttonLabel="Learn More"
    onClick={handleLearnMore}
>
    <Button label="Hover me" />
</Tooltip>
```
