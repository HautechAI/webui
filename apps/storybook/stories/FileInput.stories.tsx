import React from 'react';
import { fn } from '@storybook/test';

import { FileInput } from '../../../components/FileInput/src';

export default {
    title: 'Input/FileInput',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void },
};

export const Main = {
    args: {
        onChange: () => fn(),
    },
};

export const VariantButton = {
    args: {
        variant: 'button',
    },
};

export const VariantButtonStretch = {
    args: {
        variant: 'button',
        stretch: true,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
                <Story />
            </div>
        ),
    ],
};
