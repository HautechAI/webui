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

| Parameter | Type                             | Description                                                         |
| --------- | -------------------------------- | ------------------------------------------------------------------- |
| src       | string                           | Optional URL for the user's profile image                           |
| initials  | string                           | Optional text initials to display when image is not available       |
| icon      | ReactNode                        | Optional icon component to display as fallback                      |
| size      | 'small' \| 'medium' \| 'large'   | Optional size variant. 'small' (24x24), 'medium' (40x40, default), 'large' (60x60) |
| gradient  | [string, string]                 | Optional two colors for vertical gradient background                 |

## Usage Example

```tsx
// Basic usage with different sizes
<Avatar src="/path/to/avatar.jpg" size="small" />
<Avatar initials="JD" size="medium" />
<Avatar icon={<UserIcon />} size="large" />

// With gradient background
<Avatar initials="AB" gradient={['#ff6b6b', '#4ecdc4']} />
<Avatar icon={<UserIcon />} size="large" gradient={['#667eea', '#764ba2']} />
```
