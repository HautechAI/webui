import React, { useState } from 'react';
import { fn } from '@storybook/test';

import { NodeGroup, NodeGroupItem } from '../../../components/NodeGroup/src';
import { Box } from '../../../components/Box/src';

// Placeholder icon component for the examples
const PlaceholderIcon = () => (
    <div style={{ 
        width: '16px', 
        height: '16px', 
        background: '#656565',
        borderRadius: '2px' 
    }} />
);

export default {
    title: 'Data Display/NodeGroup',
    component: NodeGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { 
        onToggle: fn() as any,
    },
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = {
    args: {
        label: 'Extract',
        collapsed: false,
        children: (
            <>
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="BoundingBox info"
                    subtitle="Extracts details (position, size) from a bounding box"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Image info"
                    subtitle="Extracts metadata or dimensions from an image"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Video info"
                    subtitle="Extracts duration, resolution, and other metadata from a video"
                />
            </>
        )
    },
};

export const Collapsed = {
    args: {
        label: 'Extract',
        collapsed: true,
        children: (
            <>
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="BoundingBox info"
                    subtitle="Extracts details (position, size) from a bounding box"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Image info"
                    subtitle="Extracts metadata or dimensions from an image"
                />
            </>
        )
    },
};

export const Interactive = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        
        return (
            <NodeGroup
                label="Interactive Group"
                collapsed={collapsed}
                onToggle={() => setCollapsed(!collapsed)}
            >
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="First Item"
                    subtitle="This is the first item in the group"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Second Item"
                    subtitle="This is the second item with a longer description"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Third Item"
                />
            </NodeGroup>
        );
    },
};

export const SingleItem = {
    args: {
        label: 'Single Item Group',
        collapsed: false,
        children: (
            <NodeGroupItem 
                icon={<PlaceholderIcon />}
                title="Only Item"
                subtitle="This group contains only one item"
            />
        )
    },
};

export const NoSubtitles = {
    args: {
        label: 'Simple Items',
        collapsed: false,
        children: (
            <>
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="First Item"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Second Item"
                />
                <NodeGroupItem 
                    icon={<PlaceholderIcon />}
                    title="Third Item"
                />
            </>
        )
    },
};