import React from 'react';
import { Row } from '@hautechai/webui.row';
import { Avatar } from '@hautechai/webui.avatar';
import { DotsLoader } from '@hautechai/webui.dotsloader';
import { themeVars } from '@hautechai/webui.themeprovider';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

// Styled markdown container with theme integration
const MarkdownContainer = styled.div`
    max-width: 100%;
    word-wrap: break-word;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: ${themeVars.spacing.s} 0;
        color: ${themeVars.layout.onSurface.primary};
        font-family: inherit;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2;
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.3;
    }

    h3 {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.4;
    }

    p {
        margin: ${themeVars.spacing.s} 0;
        color: ${themeVars.layout.onSurface.secondary};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }

    strong {
        color: ${themeVars.layout.onSurface.primary};
        font-weight: 600;
    }

    em {
        font-style: italic;
        color: ${themeVars.layout.onSurface.secondary};
    }

    code {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.primary};
        padding: ${themeVars.spacing.xs} ${themeVars.spacing.s};
        border-radius: ${themeVars.cornerRadius.s};
        font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
    }

    pre {
        background-color: ${themeVars.layout.surfaceMid};
        border: 1px solid ${themeVars.layout.strokes};
        border-radius: ${themeVars.cornerRadius.m};
        padding: ${themeVars.spacing.m};
        margin: ${themeVars.spacing.s} 0;
        overflow-x: auto;

        code {
            background-color: transparent;
            padding: 0;
            border-radius: 0;
        }
    }

    blockquote {
        border-left: 4px solid ${themeVars.layout.strokes};
        margin: ${themeVars.spacing.s} 0;
        padding-left: ${themeVars.spacing.m};
        color: ${themeVars.layout.onSurface.secondary};
        font-style: italic;
    }

    ul,
    ol {
        margin: ${themeVars.spacing.s} 0;
        padding-left: ${themeVars.spacing.l};
        color: ${themeVars.layout.onSurface.secondary};
    }

    li {
        margin: ${themeVars.spacing.xs} 0;
    }

    a {
        color: ${themeVars.actions.primary};
        text-decoration: none;

        &:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
    }
`;

export type ChatMessage = {
    id: string;
    author: {
        name: string;
        initials?: string;
        gradient?: [string, string];
        avatarSrc?: string;
    };
    content?: string;
    isTyping?: boolean;
};

export type ChatProps = {
    messages: ChatMessage[];
    className?: string;
};

const MessageContainer = styled.div`
    max-width: 324px;
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.s};
`;

const AuthorText = styled.span`
    white-space: nowrap;
    color: ${themeVars.layout.onSurface.primary};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
`;

export const Chat = (props: ChatProps) => {
    const { messages, className } = props;

    return (
        <div
            className={className}
            style={{
                width: '100%',
                height: '100%',
                padding: themeVars.spacing.m,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: themeVars.spacing.xl,
            }}
        >
            {messages.map((message) => (
                <MessageContainer key={message.id}>
                    <Row spacing="s" align="center">
                        <Avatar
                            src={message.author.avatarSrc}
                            initials={message.author.initials}
                            gradient={message.author.gradient}
                            size="small"
                        />
                        <AuthorText>{message.author.name}</AuthorText>
                    </Row>
                    {message.isTyping ? (
                        <DotsLoader />
                    ) : (
                        message.content && (
                            <MarkdownContainer>
                                <ReactMarkdown>{message.content}</ReactMarkdown>
                            </MarkdownContainer>
                        )
                    )}
                </MessageContainer>
            ))}
        </div>
    );
};
