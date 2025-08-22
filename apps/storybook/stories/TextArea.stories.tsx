import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextArea } from '../../../components/TextArea/src';
import { IconButton } from '../../../components/IconButton/src';

export default {
    title: 'Input/TextArea',
    component: TextArea,
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

export const WithActionButton = {
    args: {
        actionButton: (
            <IconButton
                variant="flat"
                size="small"
                icon={<PlaceholderIcon />}
                onClick={fn() as React.MouseEventHandler<HTMLButtonElement>}
            />
        ),
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
        actionButton: (
            <IconButton
                variant="flat"
                size="small"
                icon={<PlaceholderIcon />}
                disabled
                onClick={fn() as React.MouseEventHandler<HTMLButtonElement>}
            />
        ),
    },
};

export const WithCustomClass = {
    args: {
        className: 'custom-textarea',
    },
};

export const WithActionButtonInside = {
    args: {
        actionButton: (
            <IconButton
                variant="flat"
                size="small"
                icon={<PlaceholderIcon />}
                onClick={fn() as React.MouseEventHandler<HTMLButtonElement>}
            />
        ),
        actionButtonInside: true,
    },
};

export const WithMinMaxRows = {
    args: {
        minRows: 3,
        maxRows: 6,
        placeholder: 'Type here...',
    },
};
