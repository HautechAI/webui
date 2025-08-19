import React from 'react';
import { Box } from '../../../components/Box/src';
import { PropertyBlock } from '../../../components/PropertyBlock/src';

export default {
    title: 'Data Display/PropertyBlock',
    component: PropertyBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onToggle: { action: 'toggled' },
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = {
    args: {
        children: 'This is custom content inside the property block.',
    },
};

export const WithPlaceholder = {
    args: {},
};

export const Removable = {
    args: {
        removable: true,
        children: 'This property block can be removed.',
        onToggle: () => alert('Toggle button clicked!'),
    },
};

export const Removed = {
    args: {
        removable: true,
        removed: true,
    },
};

export const NotRemovable = {
    args: {
        removable: false,
        children: 'This property block cannot be removed.',
    },
};

export const CustomLabel = {
    args: {
        label: 'Custom Property Name',
        children: 'This property block has a custom label.',
    },
};

export const CustomLabelRemovable = {
    args: {
        label: 'Image Settings',
        removable: true,
        children: 'A custom labeled property that can be removed.',
        onToggle: () => alert('Image Settings toggled'),
    },
};

export const WithToggleCallback = {
    args: {
        label: 'Interactive Property',
        removable: true,
        children: 'Click the minus button to see the onToggle callback in action.',
        onToggle: () => alert('onToggle callback executed!'),
    },
};
