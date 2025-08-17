import React from 'react';
import { styled } from '@linaria/react';
import { Typography } from '@hautechai/webui.typography';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeGroupItemProps {
    /** Icon to display at the start of the item */
    icon: React.ReactNode;
    /** Primary title text */
    title: string;
    /** Optional subtitle text */
    subtitle?: string;
    /** Whether the item is being dragged */
    isDragging?: boolean;
}

const Container = styled.div`
    align-self: stretch;
    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    border-radius: ${themeVars.cornerRadius.xs};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    transition: background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
                opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:hover {
        background-color: ${themeVars.layout.surfaceMid};
    }

    &[data-dragging="true"] {
        opacity: 0.30;
        background-color: ${themeVars.layout.surfaceMid};
    }
`;

const ItemRow = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${themeVars.spacing.s};
    display: inline-flex;
`;

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentColumn = styled.div`
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.s};
    display: flex;
`;

const TextContent = styled.div`
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

const TitleRow = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    display: inline-flex;
`;

export const NodeGroupItem = (props: NodeGroupItemProps) => {
    const { icon, title, subtitle, isDragging = false } = props;

    return (
        <Container data-dragging={isDragging}>
            <ItemRow>
                <IconContainer>{icon}</IconContainer>
                <ContentColumn>
                    <TextContent>
                        <TitleRow>
                            <Typography 
                                variant="LabelSmallRegular" 
                                color="layout.onSurface.primary"
                            >
                                {title}
                            </Typography>
                        </TitleRow>
                        {subtitle && (
                            <Typography 
                                variant="CaptionRegular" 
                                color="layout.onSurface.tertiary"
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </TextContent>
                </ContentColumn>
            </ItemRow>
        </Container>
    );
};