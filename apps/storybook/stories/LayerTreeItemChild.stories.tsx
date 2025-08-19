import React from 'react';
import { fn } from '@storybook/test';

import { LayerTreeItemChild } from '../../../components/LayerTreeItemChild/src';
import { Box } from '../../../components/Box/src';
import { Switch } from '../../../components/Switch/src';
import { TextInput } from '../../../components/TextInput/src';

export default {
    title: 'Visual Editor/LayerTreeItemChild',
    component: LayerTreeItemChild,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as (value: string) => void,
        onSelect: fn() as () => void,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={200}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = {
    args: {
        label: 'Child Layer',
        selected: false,
    },
};

export const Selected = {
    args: {
        label: 'Selected Child',
        selected: true,
    },
};

export const WithSwitch = {
    args: {
        label: 'Layer with Switch',
        selected: false,
        input: <Switch checked={true} onChange={() => {}} />,
    },
};

export const WithTextInput = {
    args: {
        label: 'Layer with Input',
        selected: false,
        input: <TextInput type="text" value="100%" placeholder="Value" />,
    },
};

export const SelectedWithInput = {
    args: {
        label: 'Selected with Input',
        selected: true,
        input: <Switch checked={false} onChange={() => {}} />,
    },
};

export const LongLabel = {
    args: {
        label: 'This is a very long child layer name that should demonstrate text wrapping or truncation behavior',
        selected: false,
    },
};

export const LongLabelSelected = {
    args: {
        label: 'This is a very long child layer name that is also selected',
        selected: true,
        input: <Switch checked={true} onChange={() => {}} />,
    },
};
