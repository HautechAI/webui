import React from 'react';
import { Box } from '@hautechai/webui.box';
import { Avatar } from '@hautechai/webui.avatar';
import { Typography } from '@hautechai/webui.typography';
import { DotsLoader } from '@hautechai/webui.dotsloader';
import { themeVars } from '@hautechai/webui.themeprovider';

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

export const Chat = (props: ChatProps) => {
    const { messages, className } = props;

    return (
        <Box className={className} width="100%" height="100%" padding="m" overflow="hidden" display="flex">
            <Box
                display="flex"
                style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1, gap: themeVars.spacing.xl }}
            >
                {messages.map((message) => (
                    <Box
                        key={message.id}
                        style={{
                            maxWidth: '324px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: themeVars.spacing.s,
                        }}
                    >
                        <Box
                            style={{ width: '100px', display: 'flex', alignItems: 'center', gap: themeVars.spacing.s }}
                        >
                            <Avatar
                                src={message.author.avatarSrc}
                                initials={message.author.initials}
                                gradient={message.author.gradient}
                                size="small"
                            />
                            <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                                {message.author.name}
                            </Typography>
                        </Box>
                        {message.isTyping ? (
                            <DotsLoader />
                        ) : (
                            message.content && (
                                <Typography variant="Body" color="layout.onSurface.secondary">
                                    {message.content}
                                </Typography>
                            )
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
