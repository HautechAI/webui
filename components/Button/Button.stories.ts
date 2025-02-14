import { fn } from '@storybook/test';

import { Button } from './src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryMedium = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};
export const PrimarySmall = {
    args: {
        hierarchy: 'primary',
        size: 'small',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};

export const SecondaryMedium = {
    args: {
        hierarchy: 'secondary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};
export const SecondarySmall = {
    args: {
        hierarchy: 'secondary',
        size: 'small',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};

export const OutlinedPrimaryMedium = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};
export const OutlinedPrimarySmall = {
    args: {
        hierarchy: 'primary',
        size: 'small',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};

export const OutlinedSecondaryMedium = {
    args: {
        hierarchy: 'secondary',
        size: 'medium',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};
export const OutlinedSecondarySmall = {
    args: {
        hierarchy: 'secondary',
        size: 'small',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};
