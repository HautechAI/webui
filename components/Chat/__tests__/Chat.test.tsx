import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Chat, ChatMessage } from '../src/Chat';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={testTheme}>{component}</ThemeProvider>);
};

describe('Chat', () => {
    const mockMessages: ChatMessage[] = [
        {
            id: '1',
            author: {
                name: 'John Doe',
                initials: 'JD',
                gradient: ['#ff6b6b', '#4ecdc4'],
            },
            content: 'Hello, how are you?',
        },
        {
            id: '2',
            author: {
                name: 'Agent',
                avatarSrc: 'https://example.com/avatar.jpg',
            },
            content: 'I am doing well, thank you for asking!',
        },
    ];

    const typingMessage: ChatMessage = {
        id: '3',
        author: {
            name: 'Agent',
            avatarSrc: 'https://example.com/avatar.jpg',
        },
        isTyping: true,
    };

    it('should render without crashing', () => {
        expect(() => {
            renderWithTheme(<Chat messages={[]} />);
        }).not.toThrow();
    });

    it('should render messages with content', () => {
        renderWithTheme(<Chat messages={mockMessages} />);

        expect(screen.getByText('John Doe')).toBeTruthy();
        expect(screen.getByText('Agent')).toBeTruthy();
        expect(screen.getByText('Hello, how are you?')).toBeTruthy();
        expect(screen.getByText('I am doing well, thank you for asking!')).toBeTruthy();
    });

    it('should render avatar with initials when provided', () => {
        renderWithTheme(<Chat messages={[mockMessages[0]]} />);

        expect(screen.getByText('JD')).toBeTruthy();
    });

    it('should render typing indicator when message is in typing state', () => {
        const { container } = renderWithTheme(<Chat messages={[typingMessage]} />);

        expect(screen.getByText('Agent')).toBeTruthy();
        // For typing state, content should not be rendered, but name should be
        expect(screen.queryByText('I am doing well, thank you for asking!')).toBeFalsy();
        // Check that DotsLoader is rendered (it creates div elements with data-dot attributes)
        const dots = container.querySelectorAll('[data-dot]');
        expect(dots).toHaveLength(3);
        expect(dots[0].getAttribute('data-dot')).toBe('1');
        expect(dots[1].getAttribute('data-dot')).toBe('2');
        expect(dots[2].getAttribute('data-dot')).toBe('3');
    });

    it('should not render message content for typing messages', () => {
        renderWithTheme(<Chat messages={[typingMessage]} />);

        expect(screen.queryByText('I am doing well, thank you for asking!')).toBeFalsy();
    });

    it('should handle multiple messages', () => {
        const multipleMessages = [
            ...mockMessages,
            {
                id: '4',
                author: {
                    name: 'John Doe',
                    initials: 'JD',
                },
                content: 'Great to hear!',
            },
        ];

        renderWithTheme(<Chat messages={multipleMessages} />);

        expect(screen.getByText('Hello, how are you?')).toBeTruthy();
        expect(screen.getByText('I am doing well, thank you for asking!')).toBeTruthy();
        expect(screen.getByText('Great to hear!')).toBeTruthy();
    });

    it('should apply custom className when provided', () => {
        const { container } = renderWithTheme(<Chat messages={[]} className="custom-chat" />);

        expect(container.querySelector('.custom-chat')).toBeTruthy();
    });

    it('should handle empty messages array', () => {
        expect(() => {
            renderWithTheme(<Chat messages={[]} />);
        }).not.toThrow();

        // Should not throw errors and should not have any message content
        renderWithTheme(<Chat messages={[]} />);
        expect(screen.queryByText('John Doe')).toBeFalsy();
    });

    it('should handle messages with different author configurations', () => {
        const diverseMessages: ChatMessage[] = [
            {
                id: '1',
                author: { name: 'User1', initials: 'U1' },
                content: 'Message with initials only',
            },
            {
                id: '2',
                author: { name: 'User2', avatarSrc: 'avatar.jpg' },
                content: 'Message with avatar source',
            },
            {
                id: '3',
                author: { name: 'User3', initials: 'U3', gradient: ['#red', '#blue'] },
                content: 'Message with initials and gradient',
            },
            {
                id: '4',
                author: { name: 'User4' },
                content: 'Message with name only',
            },
        ];

        renderWithTheme(<Chat messages={diverseMessages} />);

        expect(screen.getByText('User1')).toBeTruthy();
        expect(screen.getByText('User2')).toBeTruthy();
        expect(screen.getByText('User3')).toBeTruthy();
        expect(screen.getByText('User4')).toBeTruthy();
        expect(screen.getByText('U1')).toBeTruthy();
        expect(screen.getByText('U3')).toBeTruthy();
    });
});
