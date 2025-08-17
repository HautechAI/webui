import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { Counter } from '../../../components/Counter/src';

export default {
    title: 'Input/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
        min: 0,
        max: 5,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={200}>
                <Story />
            </Box>
        ),
    ],
};

export const Main = {
    args: {},
};

export const WithNoLimits = {
    args: {
        min: undefined,
        max: undefined,
    },
};
