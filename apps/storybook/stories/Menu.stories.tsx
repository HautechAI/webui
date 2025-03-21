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
                onClick: fn() as any,
                size: 'small',
            },
            {
                label: 'Option2 very long option',
                leadingIcon: <PlaceholderIcon />,
                onClick: fn() as any,
                size: 'small',
            },
            {
                label: 'Option3 very very long option',
                trailingIcon: <PlaceholderIcon />,
                onClick: fn() as any,
                size: 'medium',
            },
            { label: 'Any text', onClick: fn() as any, size: 'medium' },
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

export const WithSelectedOption = {
    args: {
        options: [
            {
                label: 'Option1',
                leadingIcon: <PlaceholderIcon />,
                trailingIcon: <PlaceholderIcon />,
                isSelected: true,
                onClick: fn() as any,
            },
            { label: 'Option2 very long option', leadingIcon: <PlaceholderIcon />, onClick: fn() as any },
        ],
    },
};

export const Popover = {
    args: {
        trigger: () => <button>Open Popover Menu</button>,
        contentPositions: ['top'],
    },
};
