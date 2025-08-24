import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { ImageInput } from '../../../components/ImageInput/src';

const meta: Meta<typeof ImageInput> = {
    title: 'Input/ImageInput',
    component: ImageInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() as (files: File[]) => void },
};

export default meta;

type Story = StoryObj<typeof ImageInput>;

export const Main: Story = {
    args: {},
};

// Stories to test propagation behavior
export const WithPropagationStopped: Story = {
    args: {
        stopPropagation: true,
        label: 'Propagation stopped (default)',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{
                    width: '400px',
                    height: '200px',
                    padding: '20px',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    // Parent container dragover - should not trigger due to stopPropagation
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#e0e0ff';
                }}
                onDragLeave={() => {
                    // Parent container dragleave
                    const target = document.querySelector('[style*="background-color: rgb(224, 224, 255)"]');
                    if (target) {
                        (target as HTMLElement).style.backgroundColor = '#f0f0f0';
                    }
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    // Parent container drop - should not trigger due to stopPropagation
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#e0ffe0';
                    setTimeout(() => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0';
                    }, 1000);
                }}
            >
                <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                    Parent container (events should NOT propagate here)
                </div>
                <Story />
            </div>
        ),
    ],
};

export const WithPropagationEnabled: Story = {
    args: {
        stopPropagation: false,
        label: 'Propagation enabled',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{
                    width: '400px',
                    height: '200px',
                    padding: '20px',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    // Parent container dragover - should trigger due to propagation enabled
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#e0e0ff';
                }}
                onDragLeave={() => {
                    // Parent container dragleave
                    const target = document.querySelector('[style*="background-color: rgb(224, 224, 255)"]');
                    if (target) {
                        (target as HTMLElement).style.backgroundColor = '#f0f0f0';
                    }
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    // Parent container drop - should trigger due to propagation enabled
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#e0ffe0';
                    setTimeout(() => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0';
                    }, 1000);
                }}
            >
                <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                    Parent container (events WILL propagate here)
                </div>
                <Story />
            </div>
        ),
    ],
};
