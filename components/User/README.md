# User

## Purpose

User profile display component showing avatar, title, subtitle, and optional action elements.

## Parameters

| Parameter | Type            | Description                                                       |
| --------- | --------------- | ----------------------------------------------------------------- |
| avatar    | string          | Optional URL for the user's profile image                         |
| title     | string          | Optional primary text typically showing the user's name           |
| subtitle  | string          | Optional secondary text for additional user information           |
| actions   | React.ReactNode | Optional action buttons or elements displayed alongside user info |

## Usage Example

```tsx
<User avatar="/path/to/avatar.jpg" title="John Doe" subtitle="Software Engineer" actions={<Button label="Edit" />} />
```
