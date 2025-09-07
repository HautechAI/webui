import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { VisualEditorTextInput } from '../../../components/VisualEditorTextInput/src';

export default {
    title: 'Input/VisualEditorTextInput',
    component: VisualEditorTextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
        onTogglePort: fn() as () => void,
        onToggleKeyframe: fn() as () => void,
        placeholder: 'Enter text...',
        type: 'text',
        variation: 'filled',
        size: 'medium',
        isPort: false,
        keyframesState: 'noKeyframes',
        value: 'Sample text',
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
        value: 'Connected to port',
    },
};

export const WithKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'Text with keyframes',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'This is a keyframe',
    },
};

export const WithIcons = {
    args: {
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        value: 'Text with icons',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'Disabled input',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'Text with error',
    },
};

export const Outlined = {
    args: {
        variation: 'outlined',
        value: 'Outlined variation',
    },
};

export const Small = {
    args: {
        size: 'small',
        value: 'Small size',
    },
};
