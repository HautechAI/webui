# AppBarMobile

## Purpose

Mobile-optimized version of the app bar with responsive behavior and vertical content sections.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.appbarmobile

# npm
npm install @hautechai/webui.appbarmobile

# yarn
yarn add @hautechai/webui.appbarmobile
```

## Parameters

| Parameter | Type            | Description                                                                       |
| --------- | --------------- | --------------------------------------------------------------------------------- |
| hierarchy | 'mid' \| 'low'  | Optional visual hierarchy level affecting background color and styling prominence |
| top       | React.ReactNode | Optional content displayed in the top section of the mobile app bar               |
| center    | React.ReactNode | Optional content displayed in the center section of the mobile app bar            |
| bottom    | React.ReactNode | Optional content displayed in the bottom section of the mobile app bar            |

## Usage Example

```tsx
<AppBarMobile hierarchy="mid" top={<BackButton />} center={<Title />} bottom={<NavigationTabs />} />
```
