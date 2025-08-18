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
    cursor: grab;
    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:hover {
        background-color: ${themeVars.layout.surfaceMid};
    }

    &[data-dragging='true'] {
        opacity: 0.3;
        background-color: ${themeVars.layout.surfaceMid};
        cursor: grabbing;
    }
`;

const ItemRow = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${themeVars.spacing.s};
    display: inline-flex;
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

const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        width: 16px;
        height: 16px;
    }
`;

export const NodeGroupItem = (props: NodeGroupItemProps) => {
    const { icon, title, subtitle, isDragging = false } = props;

    return (
        <Container data-dragging={isDragging}>
            <ItemRow>
                <IconWrapper>{icon}</IconWrapper>
                <ContentColumn>
                    <TextContent>
                        <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="CaptionRegular" color="layout.onSurface.tertiary">
                                {subtitle}
                            </Typography>
                        )}
                    </TextContent>
                </ContentColumn>
            </ItemRow>
        </Container>
    );
};
