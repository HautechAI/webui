# KeyframeToggle

## Purpose

Toggle button component for keyframe interactions in timeline interfaces. Displays different visual states and styles based on keyframe status.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.keyframetoggle

# npm
npm install @hautechai/webui.keyframetoggle

# yarn
yarn add @hautechai/webui.keyframetoggle
```

## Parameters

| Parameter | Type                                             | Description                                                     |
| --------- | ------------------------------------------------ | --------------------------------------------------------------- |
| onClick   | (e: React.MouseEvent<HTMLButtonElement>) => void | Optional click event handler function                           |
| state     | 'noKeyframes' \| 'hasKeyframes' \| 'isKeyframe'  | Required state determining the visual appearance and icon style |
| disabled  | boolean                                          | Optional flag to disable interactions and apply disabled styles |

## Usage Example

```tsx
<KeyframeToggle state="noKeyframes" onClick={handleToggle} />
```
