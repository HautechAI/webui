import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextField } from '../../../components/TextField/src';

export default {
    title: 'Input/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onChange: fn() as any },
    decorators: [
        (Story: any) => (
            <Box width={400}>
                <Story />
            </Box>
        ),
    ],
};

export const Main = {
    args: {},
};

export const WithTitle = {
    args: {
        title: 'With icons',
    },
};

export const WithIcons = {
    args: {
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const Disabled = {
    args: {
        title: 'Disabled',
        disabled: true,
        leadingIcon: <PlaceholderIcon />,
    },
};

export const Error = {
    args: {
        error: 'Email is required',
    },
};

export const Email = {
    args: {
        type: 'email',
    },
};

export const Password = {
    args: {
        type: 'password',
    },
};

export const Number = {
    args: {
        type: 'number',
    },
};
