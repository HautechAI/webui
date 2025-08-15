import { fn } from '@storybook/test';

import { LayerTreeItemParent } from '../../../components/LayerTreeItemParent/src';
import { FolderIcon } from '../../../components/Icon/src';

export default {
    title: 'Compositions/LayerTreeItemParent',
    component: LayerTreeItemParent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { 
        onExpandToggle: fn() as any,
        onClick: fn() as any 
    },
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