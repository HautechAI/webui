import React from 'react';
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
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
                size: 'small',
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
                size: 'small',
            },
            {
                label: 'Option3 very very long option',
                trailingIcon: <PlaceholderIcon />,
                onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
                size: 'medium',
            },
            { label: 'Any text', onClick: fn() as React.MouseEventHandler<HTMLButtonElement>, size: 'medium' },
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

export const Uncontrolled = {
    args: {},
};

export const Controlled = {
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
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
    },
};

export const WithSelectedOption = {
    args: {
        options: [
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                isSelected: true,
                onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
            },
        ],
    },
};

export const Popover = {
    args: {
        trigger: () => <button>Open Popover Menu</button>,
        contentPositions: ['top'],
    },
};
