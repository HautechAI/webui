import React from 'react';
import { Row } from '@hautechai/webui.row';
import { Avatar } from '@hautechai/webui.avatar';
import { DotsLoader } from '@hautechai/webui.dotsloader';
import { Typography } from '@hautechai/webui.typography';
import { themeVars } from '@hautechai/webui.themeprovider';
import ReactMarkdown, { Components } from 'react-markdown';
import styled from '@emotion/styled';

// Styled components for markdown elements

const StyledCode = styled.code`
    background-color: ${themeVars.layout.surfaceMid};
    color: ${themeVars.layout.onSurface.primary};
    padding: ${themeVars.spacing.xs} ${themeVars.spacing.s};
    border-radius: ${themeVars.cornerRadius.s};
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 13px;
`;

const StyledPre = styled.pre`
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
`;

const StyledBlockquote = styled.blockquote`
    border-left: 4px solid ${themeVars.layout.strokes};
    margin: ${themeVars.spacing.s} 0;
    padding-left: ${themeVars.spacing.m};
    color: ${themeVars.layout.onSurface.secondary};
    font-style: italic;
`;

const StyledList = styled.ul`
    margin: ${themeVars.spacing.s} 0;
    padding-left: ${themeVars.spacing.l};
    color: ${themeVars.layout.onSurface.secondary};

    li {
        margin: ${themeVars.spacing.xs} 0;
    }
`;

const StyledOrderedList = styled.ol`
    margin: ${themeVars.spacing.s} 0;
    padding-left: ${themeVars.spacing.l};
    color: ${themeVars.layout.onSurface.secondary};

    li {
        margin: ${themeVars.spacing.xs} 0;
    }
`;

const StyledStrong = styled.strong`
    color: ${themeVars.layout.onSurface.primary};
    font-weight: 600;
`;

const StyledEm = styled.em`
    font-style: italic;
    color: ${themeVars.layout.onSurface.secondary};
`;

const StyledLink = styled.a`
    color: ${themeVars.actions.primary};
    text-decoration: none;

    &:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`;

// React Markdown components mapping
const markdownComponents: Components = {
    h1: ({ children }) => (
        <Typography variant="H1" color="layout.onSurface.primary" data-testid={props.testId}>
            {children}
        </Typography>
    ),
    h2: ({ children }) => (
        <Typography variant="H2" color="layout.onSurface.primary">
            {children}
        </Typography>
    ),
    h3: ({ children }) => (
        <Typography variant="H3" color="layout.onSurface.primary">
            {children}
        </Typography>
    ),
    p: ({ children }) => (
        <Typography variant="Body" color="layout.onSurface.secondary">
            {children}
        </Typography>
    ),
    strong: ({ children }) => <StyledStrong>{children}</StyledStrong>,
    em: ({ children }) => <StyledEm>{children}</StyledEm>,
    code: ({ children }) => <StyledCode>{children}</StyledCode>,
    pre: ({ children }) => <StyledPre>{children}</StyledPre>,
    blockquote: ({ children }) => <StyledBlockquote>{children}</StyledBlockquote>,
    ul: ({ children }) => <StyledList>{children}</StyledList>,
    ol: ({ children }) => <StyledOrderedList>{children}</StyledOrderedList>,
    a: ({ children, ...props }) => <StyledLink {...props}>{children}</StyledLink>,
};

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
    testId?: string;
};

const MessageContainer = styled.div`
    max-width: 324px;
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.s};
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
                    <Row spacing="m" align="center">
                        <Avatar
                            src={message.author.avatarSrc}
                            initials={message.author.initials}
                            gradient={message.author.gradient}
                            size="small"
                        />
                        {message.isTyping ? (
                            <DotsLoader />
                        ) : (
                            <Typography
                                variant="LabelSmallEmphasized"
                                color="layout.onSurface.primary"
                                noWrap
                                component="span"
                            >
                                {message.author.name}
                            </Typography>
                        )}
                    </Row>
                    {!message.isTyping && message.content && (
                        <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
                            <ReactMarkdown components={markdownComponents}>{message.content}</ReactMarkdown>
                        </div>
                    )}
                </MessageContainer>
            ))}
        </div>
    );
};
