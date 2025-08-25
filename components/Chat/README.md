# Chat

## Purpose

A conversational interface component for displaying messages between users and agents, with support for typing indicators and diverse avatar styles.

## Parameters

| Parameter | Type          | Description                                           |
| --------- | ------------- | ----------------------------------------------------- |
| messages  | ChatMessage[] | Array of chat messages to display in the conversation |
| className | string        | Optional CSS class name for custom styling            |

### ChatMessage

| Parameter | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| id        | string  | Unique identifier for the message                       |
| author    | Author  | Information about the message author                    |
| content   | string  | Optional message text content (not used for typing)     |
| isTyping  | boolean | Optional flag indicating the author is currently typing |

### Author

| Parameter | Type             | Description                                        |
| --------- | ---------------- | -------------------------------------------------- |
| name      | string           | Display name of the message author                 |
| initials  | string           | Optional initials for avatar display               |
| gradient  | [string, string] | Optional two colors for gradient avatar background |
| avatarSrc | string           | Optional URL for avatar image                      |

## Usage Example

```tsx
// Basic conversation
const messages = [
    {
        id: '1',
        author: {
            name: 'You',
            initials: 'J',
            gradient: ['#517D89', '#C5D8DC'],
        },
        content: 'Hello, how can I help you today?',
    },
    {
        id: '2',
        author: {
            name: 'Agent',
            avatarSrc: '/path/to/avatar.jpg',
        },
        content: 'I am here to assist you with your questions.',
    },
];

<Chat messages={messages} />;

// With typing indicator
const messagesWithTyping = [
    ...messages,
    {
        id: '3',
        author: {
            name: 'Agent',
            avatarSrc: '/path/to/avatar.jpg',
        },
        isTyping: true,
    },
];

<Chat messages={messagesWithTyping} />;
```
