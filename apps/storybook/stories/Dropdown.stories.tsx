import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { Dropdown } from '../../../components/Dropdown/src';

export default {
    title: 'Input/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onChange: fn() as any,
        options: [
            { label: 'Option1', value: 'op1' },
            { label: 'Option2 very long option', value: 'op2' },
            { label: 'Any text', value: 'op3' },
            { label: 'Any text', value: 'op4' },
            { label: 'Option5 very long option', value: 'op5' },
            { label: 'Option6 very very long option', value: 'op6' },
        ],
    },
    decorators: [
        (Story: any) => (
            <Box width={132}>
                <Story />
            </Box>
        ),
    ],
};

export const Filled = {
    args: {},
};

export const WithLabel = {
    args: {
        label: 'Label',
    },
};

export const Disabled = {
    args: {
        label: 'Any text',
        disabled: true,
    },
};

export const Error = {
    args: {
        label: 'Label',
        hasError: true,
    },
};

export const WithSelectedOption = {
    args: {
        value: 'op2',
    },
};

export const Outlined = {
    args: {
        type: 'outlined',
    },
};

export const OutlinedWithSelectedOption = {
    args: {
        value: 'op2',
        type: 'outlined',
    },
};

export const Flat = {
    args: {
        label: 'Label',
        type: 'flat',
    },
};

export const FlatDisabled = {
    args: {
        label: 'Any text',
        disabled: true,
        type: 'flat',
    },
};

export const FlatError = {
    args: {
        label: 'Label',
        hasError: true,
        type: 'flat',
    },
};
