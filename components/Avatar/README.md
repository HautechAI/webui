# Avatar

## Purpose

User profile image or initials display component for representing users in interfaces.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.avatar

# npm
npm install @hautechai/webui.avatar

# yarn
yarn add @hautechai/webui.avatar
```

## Parameters

| Parameter | Type      | Description                                                   |
| --------- | --------- | ------------------------------------------------------------- |
| src       | string    | Optional URL for the user's profile image                     |
| initials  | string    | Optional text initials to display when image is not available |
| icon      | ReactNode | Optional icon component to display as fallback                |

## Usage Example

```tsx
<Avatar src="/path/to/avatar.jpg" initials="JD" icon={<UserIcon />} />
```
