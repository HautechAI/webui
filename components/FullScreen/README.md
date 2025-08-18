# FullScreen

## Purpose

Component wrapper that enables fullscreen mode for its child content with toggle functionality.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.fullscreen

# npm
npm install @hautechai/webui.fullscreen

# yarn
yarn add @hautechai/webui.fullscreen
```

## Parameters

| Parameter | Type            | Description                                         |
| --------- | --------------- | --------------------------------------------------- |
| children  | React.ReactNode | Required content to be displayed in fullscreen mode |

May include additional parameters for controlling fullscreen behavior and exit functionality.

## Usage Example

```tsx
<FullScreen>
    <VideoPlayer />
</FullScreen>
```
