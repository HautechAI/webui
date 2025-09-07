import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { VisualEditorSegmentedControl } from '../../../components/VisualEditorSegmentedControl/src';

const alignmentOptions = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
];

const iconOptions = [
    { value: 'bold', leadingIcon: <PlaceholderIcon /> },
    { value: 'italic', leadingIcon: <PlaceholderIcon /> },
    { value: 'underline', leadingIcon: <PlaceholderIcon /> },
];

export default {
    title: 'Input/VisualEditorSegmentedControl',
    component: VisualEditorSegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onTogglePort: fn() as () => void,
        onToggleKeyframe: fn() as () => void,
        options: alignmentOptions,
        value: 'center',
        size: 'default',
        isPort: false,
        keyframesState: 'noKeyframes',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={400}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = {
    args: {},
};

export const WithPort = {
    args: {
        isPort: true,
        value: 'left',
    },
};

export const WithKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'right',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'center',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'left',
    },
};

export const WithIcons = {
    args: {
        options: iconOptions,
        value: 'bold',
    },
};

export const Small = {
    args: {
        size: 'small',
        value: 'center',
    },
};

export const Material = {
    args: {
        material: true,
        value: 'center',
    },
};

export const Stretched = {
    args: {
        stretch: true,
        value: 'center',
    },
};
