import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { Zoom } from '../../../components/Zoom/src';

export default {
    title: 'Input/Zoom',
    component: Zoom,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn() as (value: number) => void,
        value: 100,
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

export const At50Percent = {
    args: {
        value: 50,
    },
};

export const At200Percent = {
    args: {
        value: 200,
    },
};

export const WithDecimal = {
    args: {
        value: 123.7,
    },
};

export const Interactive = {
    render: () => {
        const [zoom, setZoom] = useState(100);
        return <Zoom value={zoom} onChange={setZoom} />;
    },
};
