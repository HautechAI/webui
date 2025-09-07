import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { NodeGroupHeader } from './NodeGroupHeader';

export interface NodeGroupProps {
    /** Text label for the group header */
    label: string;
    /** Whether the group is collapsed */
    collapsed?: boolean;
    /** Children to render when expanded */
    children: React.ReactNode;
    testId?: string;
    /** Handler for toggle state */
    onToggle?: () => void;
}

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

const ContentContainer = styled.div<{ $collapsed: boolean }>`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    overflow: hidden;
    max-height: ${({ $collapsed }) => ($collapsed ? '0px' : '100%')};
    opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
    transition:
        max-height 0.3s ease-out,
        opacity 0.15s ease-out;
`;

export const NodeGroup = (props: NodeGroupProps) => {
    const { label, collapsed = false, children, onToggle, testId } = props;

    return (
        <Container data-testid={testId}>
            <NodeGroupHeader label={label} collapsed={collapsed} onToggle={onToggle} />
            <ContentContainer $collapsed={collapsed} data-collapsed={collapsed}>
                {children}
            </ContentContainer>
        </Container>
    );
};
