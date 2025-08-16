import React from 'react';
import { styled } from '@linaria/react';
import { NodeGroupHeader } from './NodeGroupHeader';

export interface NodeGroupProps {
    /** Text label for the group header */
    label: string;
    /** Whether the group is collapsed */
    collapsed?: boolean;
    /** Children to render when expanded */
    children: React.ReactNode;
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

const ContentContainer = styled.div<{ collapsed: boolean }>`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: ${props => props.collapsed ? 'none' : 'inline-flex'};
`;

export const NodeGroup = (props: NodeGroupProps) => {
    const { label, collapsed = false, children, onToggle } = props;

    return (
        <Container>
            <NodeGroupHeader 
                label={label} 
                collapsed={collapsed} 
                onToggle={onToggle} 
            />
            <ContentContainer collapsed={collapsed} data-collapsed={collapsed}>
                {children}
            </ContentContainer>
        </Container>
    );
};