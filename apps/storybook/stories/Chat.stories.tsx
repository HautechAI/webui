import { Chat, ChatMessage } from '../../../components/Chat/src';

export default {
    title: 'Compositions/Chat',
    component: Chat,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ width: '400px', height: '600px', border: '1px solid #ccc' }}>
                <Story />
            </div>
        ),
    ],
};

// Sample messages for stories
const basicMessages: ChatMessage[] = [
    {
        id: '1',
        author: {
            name: 'You',
            initials: 'J',
            gradient: ['#517D89', '#C5D8DC'],
        },
        content: 'Build a workflow for image generation',
    },
    {
        id: '2',
        author: {
            name: 'Agent',
            avatarSrc: 'https://placehold.co/24x24',
        },
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas lacus a eleifend hendrerit. Donec consequat magna at ante interdum, in pretium ipsum dapibus. Sed consequat mattis quam, eu vehicula orci fringilla vitae. Phasellus eros est, gravida et tortor eget, vestibulum volutpat nulla.',
    },
    {
        id: '3',
        author: {
            name: 'You',
            initials: 'J',
            gradient: ['#517D89', '#C5D8DC'],
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas lacus a eleifend hendrerit.',
    },
    {
        id: '4',
        author: {
            name: 'Agent',
            avatarSrc: 'https://placehold.co/24x24',
        },
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas lacus a eleifend hendrerit. Donec consequat magna at ante interdum, in pretium ipsum dapibus. Sed consequat mattis quam, eu vehicula orci fringilla vitae.',
    },
];

const typingMessages: ChatMessage[] = [
    ...basicMessages.slice(0, 1),
    {
        id: '2',
        author: {
            name: 'Agent',
            avatarSrc: 'https://placehold.co/24x24',
        },
        isTyping: true,
    },
];

const diverseMessages: ChatMessage[] = [
    {
        id: '1',
        author: {
            name: 'Alice',
            initials: 'A',
            gradient: ['#ff6b6b', '#4ecdc4'],
        },
        content: 'Hey! How are you doing today?',
    },
    {
        id: '2',
        author: {
            name: 'Bob',
            initials: 'B',
            gradient: ['#667eea', '#764ba2'],
        },
        content: 'I am doing great, thanks for asking!',
    },
    {
        id: '3',
        author: {
            name: 'Charlie',
            avatarSrc: 'https://placehold.co/24x24/ff9f43/ffffff',
        },
        content: 'What are you working on?',
    },
    {
        id: '4',
        author: {
            name: 'Diana',
            initials: 'D',
        },
        content: 'Working on some React components. Very exciting stuff!',
    },
];

export const Empty = {
    args: {
        messages: [],
    },
};

export const BasicConversation = {
    args: {
        messages: basicMessages,
    },
};

export const WithTypingIndicator = {
    args: {
        messages: typingMessages,
    },
};

export const DiverseAuthors = {
    args: {
        messages: diverseMessages,
    },
};

export const SingleMessage = {
    args: {
        messages: [basicMessages[0]],
    },
};

export const LongMessage = {
    args: {
        messages: [
            {
                id: '1',
                author: {
                    name: 'User',
                    initials: 'U',
                    gradient: ['#ffecd2', '#fcb69f'],
                },
                content:
                    'This is a very long message to demonstrate how the chat component handles text wrapping and maintains proper layout structure when dealing with lengthy content that spans multiple lines. It should maintain readability and visual hierarchy throughout the entire message length.',
            },
        ],
    },
};

export const MultipleTypingUsers = {
    args: {
        messages: [
            basicMessages[0],
            {
                id: '2',
                author: {
                    name: 'Agent 1',
                    initials: 'A1',
                    gradient: ['#a8edea', '#fed6e3'],
                },
                isTyping: true,
            },
            {
                id: '3',
                author: {
                    name: 'Agent 2',
                    avatarSrc: 'https://placehold.co/24x24/6c5ce7/ffffff',
                },
                isTyping: true,
            },
        ],
    },
};

export const OnlyInitials = {
    args: {
        messages: [
            {
                id: '1',
                author: {
                    name: 'John Doe',
                    initials: 'JD',
                },
                content: 'Message with just initials, no gradient',
            },
            {
                id: '2',
                author: {
                    name: 'Jane Smith',
                    initials: 'JS',
                },
                content: 'Another message with initials only',
            },
        ],
    },
};

export const OnlyAvatars = {
    args: {
        messages: [
            {
                id: '1',
                author: {
                    name: 'User 1',
                    avatarSrc: 'https://placehold.co/24x24/e17055/ffffff',
                },
                content: 'Message with avatar image',
            },
            {
                id: '2',
                author: {
                    name: 'User 2',
                    avatarSrc: 'https://placehold.co/24x24/45b7d1/ffffff',
                },
                content: 'Another message with avatar image',
            },
        ],
    },
};

export const MixedAvatarTypes = {
    args: {
        messages: [
            {
                id: '1',
                author: {
                    name: 'Alice',
                    initials: 'A',
                    gradient: ['#ff9a9e', '#fecfef'],
                },
                content: 'Message with gradient initials',
            },
            {
                id: '2',
                author: {
                    name: 'Bob',
                    avatarSrc: 'https://placehold.co/24x24/96ceb4/ffffff',
                },
                content: 'Message with avatar image',
            },
            {
                id: '3',
                author: {
                    name: 'Charlie',
                    initials: 'C',
                },
                content: 'Message with plain initials',
            },
            {
                id: '4',
                author: {
                    name: 'Diana',
                },
                content: 'Message with no avatar fallback',
            },
        ],
    },
};
