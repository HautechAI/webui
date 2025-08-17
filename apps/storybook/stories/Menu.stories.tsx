import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { Menu } from '../../../components/Menu/src';

const meta: Meta<typeof Menu> = {
    title: 'Data Display/Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        options: [
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                onClick: fn() as () => void,
                size: 'small',
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                onClick: fn() as () => void,
                size: 'small',
            },
            {
                label: 'Option3 very very long option',
                trailingIcon: <PlaceholderIcon />,
                onClick: fn() as () => void,
                size: 'medium',
            },
            { label: 'Any text', onClick: fn() as () => void, size: 'medium' },
        ],
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={150}>
                <Story />
            </Box>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Uncontrolled: Story = {
    args: {},
};

export const Controlled: Story = {
    args: {
        options: [
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                size: 'small',
                value: 'op1',
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                size: 'small',
                value: 'op2',
            },
        ],
        value: 'op2',
        onChange: fn() as (value: string) => void,
    },
};

export const WithSelectedOption: Story = {
    args: {
        options: [
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                isSelected: true,
                onClick: fn() as () => void,
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                onClick: fn() as () => void,
            },
        ],
    },
};

export const Popover: Story = {
    args: {
        trigger: () => <button>Open Popover Menu</button>,
        contentPositions: ['top'],
    },
};
