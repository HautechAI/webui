import React from 'react';
import { Row } from '@hautechai/webui.row';
import { Avatar } from '@hautechai/webui.avatar';
import { DotsLoader } from '@hautechai/webui.dotsloader';
import { Typography } from '@hautechai/webui.typography';
import { themeVars } from '@hautechai/webui.themeprovider';
import ReactMarkdown, { Components } from 'react-markdown';
import styled from '@emotion/styled';

// Styled components for markdown elements
const StyledH1 = styled.h1`
    color: ${themeVars.layout.onSurface.primary};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin: ${themeVars.spacing.m} 0 ${themeVars.spacing.s} 0;
`;

const StyledH2 = styled.h2`
    color: ${themeVars.layout.onSurface.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    margin: ${themeVars.spacing.s} 0 ${themeVars.spacing.xs} 0;
`;

const StyledH3 = styled.h3`
    color: ${themeVars.layout.onSurface.primary};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    margin: ${themeVars.spacing.s} 0 ${themeVars.spacing.xs} 0;
`;

const StyledParagraph = styled.p`
    color: ${themeVars.layout.onSurface.secondary};
    font-size: 14px;
    line-height: 1.4;
    margin: ${themeVars.spacing.xs} 0;
`;

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
    h1: ({ children }) => <StyledH1>{children}</StyledH1>,
    h2: ({ children }) => <StyledH2>{children}</StyledH2>,
    h3: ({ children }) => <StyledH3>{children}</StyledH3>,
    p: ({ children }) => <StyledParagraph>{children}</StyledParagraph>,
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
                        <Typography
                            variant="LabelSmallEmphasized"
                            color="layout.onSurface.primary"
                            noWrap
                            component="span"
                        >
                            {message.author.name}
                        </Typography>
                    </Row>
                    {message.isTyping ? (
                        <DotsLoader />
                    ) : (
                        message.content && (
                            <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
                                <ReactMarkdown components={markdownComponents}>{message.content}</ReactMarkdown>
                            </div>
                        )
                    )}
                </MessageContainer>
            ))}
        </div>
    );
};
