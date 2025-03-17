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

export const WithTitle = {
    args: {
        title: 'Title',
    },
};

export const WithLabel = {
    args: {
        label: 'Label',
    },
};

export const WithTitleLabel = {
    args: {
        title: 'Title',
        label: 'Label',
    },
};

export const Disabled = {
    args: {
        title: 'Title',
        label: 'Any text',
        disabled: true,
    },
};

export const Error = {
    args: {
        title: 'Title',
        label: 'Label',
        error: 'Option is required',
    },
};

export const WithSelectedOption = {
    args: {
        title: 'Title',
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
        title: 'Title',
        value: 'op2',
        type: 'outlined',
    },
};

export const Flat = {
    args: {
        title: 'Title',
        label: 'Label',
        type: 'flat',
    },
};

export const FlatDisabled = {
    args: {
        title: 'Title',
        label: 'Any text',
        disabled: true,
        type: 'flat',
    },
};

export const FlatError = {
    args: {
        title: 'Title',
        label: 'Label',
        error: 'Option is required',
        type: 'flat',
    },
};
