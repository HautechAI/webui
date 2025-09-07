import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { VisualEditorNumberWithUnitsInput } from '../../../components/VisualEditorNumberWithUnitsInput/src';

const availableUnits = ['px', '%', 'em', 'rem', 'vw', 'vh'];

export default {
    title: 'Input/VisualEditorNumberWithUnitsInput',
    component: VisualEditorNumberWithUnitsInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
        onTogglePort: fn() as () => void,
        onToggleKeyframe: fn() as () => void,
        value: '100',
        units: 'px',
        availableUnits,
        placeholder: 'Enter number...',
        variation: 'filled',
        size: 'small',
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
        value: '200',
        units: '%',
    },
};

export const WithKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: '150',
        units: 'em',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: '50',
        units: 'vh',
    },
};

export const WithIcon = {
    args: {
        leadingIcon: <PlaceholderIcon />,
        value: '75',
        units: 'rem',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: '300',
        units: 'px',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: '400',
        units: 'px',
    },
};

export const Outlined = {
    args: {
        variation: 'outlined',
        value: '250',
        units: 'px',
    },
};

export const Medium = {
    args: {
        size: 'medium',
        value: '180',
        units: 'px',
    },
};
