import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { FileInput } from '../../../components/FileInput/src';

const meta: Meta<typeof FileInput> = {
    title: 'Input/FileInput',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() as (files: File[]) => void },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Main: Story = {
    args: {
        onChange: fn() as (files: File[]) => void,
    },
};

export const VariantButton: Story = {
    args: {
        variant: 'button',
    },
};

export const VariantButtonStretch: Story = {
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
