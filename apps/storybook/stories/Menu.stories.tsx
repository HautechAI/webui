import { fn } from '@storybook/test';

import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { Menu } from '../../../components/Menu/src';

export default {
    title: 'Data Display/Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        options: [
            { label: 'Option1', value: 'op1' },
            { label: 'Option2 very long option', value: 'op2' },
            { label: 'Any text', value: 'op3' },
            { label: 'Any text', value: 'op4' },
            { label: 'Option5 very long option', value: 'op5' },
            { label: 'Option6 very very long option', value: 'op6' },
        ],
        onChange: fn() as any,
    },
    decorators: [
        (Story: any) => (
            <Box width={150}>
                <Story />
            </Box>
        ),
    ],
};

export const Main = {
    args: {},
};

export const WithIcons = {
    args: {
        options: [
            { label: 'Option1', value: 'op1', leadingIcon: <PlaceholderIcon />, trailingIcon: <PlaceholderIcon /> },
            { label: 'Option2 very long option', value: 'op2', leadingIcon: <PlaceholderIcon /> },
            { label: 'Option3 very long option', value: 'op3', trailingIcon: <PlaceholderIcon /> },
            { label: 'Any text', value: 'op4' },
        ],
    },
};

export const WithSelectedOption = {
    args: {
        value: 'op2',
    },
};
