import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { DataItem } from '../../../components/DataItem/src/DataItem';
import { IconButton } from '../../../components/IconButton/src';
import { fn } from '@storybook/test';

const meta: Meta<typeof DataItem> = {
    title: 'Data Display/DataItem',
    component: DataItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof DataItem>;

export const Column: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        direction: 'column',
    },
};

export const ColumnWithLeadingIcon: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        direction: 'column',
        leadingIcon: <PlaceholderIcon />,
    },
};

export const ColumnWithHint: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        direction: 'column',
        hintProps: {
            hint: 'Here hides the hint',
            position: 'right',
            buttonLabel: 'Link',
            onClick: () => fn(),
        },
    },
};

export const SmallData: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'data',
        direction: 'column',
    },
};

export const MediumHeading: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'medium',
        primary: 'heading',
        direction: 'column',
    },
};

export const SmallHeading: Story = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'heading',
        direction: 'column',
    },
};

export const Row: Story = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
    },
};

export const RowWithIcon: Story = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <PlaceholderIcon />,
    },
};

export const RowWithButton: Story = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <IconButton size="small" variant="flat" icon={<PlaceholderIcon />} />,
    },
};

export const RowWithLongText: Story = {
    args: {
        label: 'Heading',
        value: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        direction: 'row',
        trailingIcon: <IconButton size="small" variant="flat" icon={<PlaceholderIcon />} />,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ width: '300px', overflow: 'hidden' }}>
                <Story />
            </div>
        ),
    ],
};
