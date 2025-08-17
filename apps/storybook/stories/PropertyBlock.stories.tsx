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
    argTypes: {},
    decorators: [
        (Story: React.ComponentType<any>) => (
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
