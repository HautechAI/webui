import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextInput } from '../../../components/TextInput/src';
import { IconButton } from '../../../components/IconButton/src';

export default {
    title: 'Input/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder: 'Any text',
        type: 'text',
        variation: 'filled',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={300}>
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
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const WithIconButton = {
    args: {
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithError = {
    args: {
        hasError: true,
    },
};

export const Disabled = {
    args: {
        disabled: true,
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithCustomClass = {
    args: {
        className: 'custom-text-input',
    },
};

export const Small = {
    args: {
        size: 'small',
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const WithHoverControls = {
    args: {
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};

export const WithHoverControlsAndIcons = {
    args: {
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};

export const SmallWithHoverControls = {
    args: {
        size: 'small',
        hoverControls: (
            <>
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
            </>
        ),
    },
};
