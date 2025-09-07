import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { VisualEditorDropdown } from '../../../components/VisualEditorDropdown/src';

const mockOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
];

export default {
    title: 'Input/VisualEditorDropdown',
    component: VisualEditorDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn() as (value: string) => void,
        onTogglePort: fn() as () => void,
        onToggleKeyframe: fn() as () => void,
        options: mockOptions,
        value: 'option1',
        type: 'filled',
        size: 'medium',
        isPort: false,
        keyframesState: 'noKeyframes',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={300}>
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
        value: 'option2',
    },
};

export const WithKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'option2',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'option3',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'option2',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'option2',
    },
};

export const Outlined = {
    args: {
        type: 'outlined',
        value: 'option2',
    },
};

export const Flat = {
    args: {
        type: 'flat',
        value: 'option2',
    },
};

export const Small = {
    args: {
        size: 'small',
        value: 'option2',
    },
};

export const Collapsed = {
    args: {
        collapsed: true,
        value: 'option2',
    },
};

export const WithLabel = {
    args: {
        label: 'Select Option',
        value: 'option2',
    },
};
