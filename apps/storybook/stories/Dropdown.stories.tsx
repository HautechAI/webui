import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../../../components/Box/src';
import { Dropdown } from '../../../components/Dropdown/src';
import { IconButton } from '../../../components/IconButton/src';
import { PlaceholderIcon } from '../../../components/Icon/src';

const meta: Meta<typeof Dropdown> = {
    title: 'Input/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as (value: string) => void,
        options: [
            { label: 'Option1', value: 'op1' },
            { label: 'Option2 very long option', value: 'op2' },
            { label: 'Any text', value: 'op3' },
            { label: 'Any text', value: 'op4' },
            { label: 'Option5 very long option', value: 'op5' },
            { label: 'Option6 very very long option', value: 'op6' },
        ],
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={200} alignItems="flex-start" display="flex">
                <Story />
            </Box>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Filled: Story = {
    args: {},
};

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Any text',
        disabled: true,
    },
};

export const Error: Story = {
    args: {
        label: 'Label',
        hasError: true,
    },
};

export const WithSelectedOption: Story = {
    args: {
        value: 'op2',
    },
};

export const Outlined: Story = {
    args: {
        type: 'outlined',
    },
};

export const OutlinedWithSelectedOption: Story = {
    args: {
        value: 'op2',
        type: 'outlined',
    },
};

export const Flat: Story = {
    args: {
        label: 'Label',
        type: 'flat',
    },
};

export const FlatDisabled: Story = {
    args: {
        label: 'Any text',
        disabled: true,
        type: 'flat',
    },
};

export const FlatError: Story = {
    args: {
        label: 'Label',
        hasError: true,
        type: 'flat',
    },
};

export const Short: Story = {
    args: {
        options: [
            { label: '%', value: '%' },
            { label: 'px', value: 'px' },
        ],
        value: 'px',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                <Story />
            </div>
        ),
    ],
};

// New size and collapsed variants
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Label',
    },
};

export const SmallOutlined: Story = {
    args: {
        size: 'small',
        type: 'outlined',
        label: 'Label',
    },
};

export const SmallFlat: Story = {
    args: {
        size: 'small',
        type: 'flat',
        label: 'Label',
    },
};

export const Collapsed: Story = {
    args: {
        collapsed: true,
    },
};

export const CollapsedSmall: Story = {
    args: {
        size: 'small',
        collapsed: true,
    },
};

export const WithHoverControls: Story = {
    args: {
        label: 'Dropdown with hover controls',
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};

export const CollapsedWithHoverControls: Story = {
    args: {
        collapsed: true,
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};

export const SmallWithHoverControls: Story = {
    args: {
        size: 'small',
        label: 'Small dropdown with hover controls',
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};

export const OutlinedWithHoverControls: Story = {
    args: {
        type: 'outlined',
        label: 'Outlined dropdown with hover controls',
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};
