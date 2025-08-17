import React from 'react';
import { fn } from '@storybook/test';

import { LayerTreeItemParent } from '../../../components/LayerTreeItemParent/src';
import { FolderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';

export default {
    title: 'Visual Editor/LayerTreeItemParent',
    component: LayerTreeItemParent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onExpandToggle: fn() as any,
        onClick: fn() as any,
        onChange: fn() as any,
    },
    decorators: [
        (Story: React.ComponentType<any>) => (
            <Box width={200}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Layer Folder',
        selected: false,
        expanded: false,
    },
};

export const Selected = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Selected Layer',
        selected: true,
        expanded: false,
    },
};

export const Expanded = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Expanded Layer',
        selected: false,
        expanded: true,
    },
};

export const SelectedAndExpanded = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Selected & Expanded',
        selected: true,
        expanded: true,
    },
};

export const LongLabel = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'This is a very long layer name that should demonstrate text wrapping or truncation behavior',
        selected: false,
        expanded: false,
    },
};

export const Editable = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Editable Layer',
        selected: false,
        expanded: false,
        editable: true,
    },
};

export const EditableSelected = {
    args: {
        icon: <FolderIcon size={14} />,
        label: 'Editable Selected Layer',
        selected: true,
        expanded: false,
        editable: true,
    },
};
