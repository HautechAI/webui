import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextInput } from '../../../components/TextInput/src';

export default {
    title: 'Input/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onChange: fn() as any,
        placeholder: 'Any text',
        type: 'text',
        variation: 'filled',
    },
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Main = {
    args: {},
};

export const WithIcons = {
    args: {
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const WithIconButton = {
    args: {
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
    },
};

export const WithError = {
    args: {
        hasError: true,
    },
};

export const Disabled = {
    args: {
        disabled: true,
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
    },
};

export const WithCustomClass = {
    args: {
        className: 'custom-text-input',
    },
};
