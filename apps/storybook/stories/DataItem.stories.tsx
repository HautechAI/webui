import React from 'react';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { DataItem } from '../../../components/DataItem/src/DataItem';
import { IconButton } from '../../../components/IconButton/src';
import { fn } from '@storybook/test';

export default {
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

export const Column = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        direction: 'column',
    },
};

export const ColumnWithLeadingIcon = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        direction: 'column',
        leadingIcon: <PlaceholderIcon />,
    },
};

export const ColumnWithHint = {
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

export const SmallData = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'data',
        direction: 'column',
    },
};

export const MediumHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'medium',
        primary: 'heading',
        direction: 'column',
    },
};

export const SmallHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'heading',
        direction: 'column',
    },
};

export const Row = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
    },
};

export const RowWithIcon = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <PlaceholderIcon />,
    },
};

export const RowWithButton = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <IconButton size="small" variant="flat" icon={<PlaceholderIcon />} />,
    },
};

export const RowWithLongText = {
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
