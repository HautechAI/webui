import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Field } from '../../../components/Field/src';

export default {
    title: 'Input/Field',
    component: Field,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        direction: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
        },
    },
    args: {
        title: 'Title',
        onIconButtonClick: fn() as any,
        direction: 'vertical',
    },
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const InputFilled = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        inputProps: { onChange: fn() as any, placeholder: 'Any text', variation: 'filled' },
    },
};

export const InputOutlined = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        inputProps: { onChange: fn() as any, placeholder: 'Any text', variation: 'outlined' },
    },
};

export const InputWithIcons = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        inputProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const InputWithIconButton = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        inputProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const InputWithError = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        error: 'Error message',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        inputProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const InputDisabled = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        inputProps: { onChange: fn() as any, placeholder: 'Any text', disabled: true },
    },
};

export const InputLocked = {
    args: {
        title: 'Title',
        type: 'text',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as any,
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        inputProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const AreaWithLongText = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        textareaProps: {
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            onChange: fn() as any,
            placeholder: 'Any text',
            variation: 'filled',
        },
    },
};

export const AreaFilled = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        textareaProps: { onChange: fn() as any, placeholder: 'Any text', variation: 'filled' },
    },
};

export const AreaOutlined = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        textareaProps: { onChange: fn() as any, placeholder: 'Any text', variation: 'outlined' },
    },
};

export const AreaWithIcons = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        textareaProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const AreaWithIconButton = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
        textareaProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const AreaWithError = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        error: 'Error message',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        textareaProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};

export const AreaDisabled = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        textareaProps: { onChange: fn() as any, placeholder: 'Any text', disabled: true },
    },
};

export const AreaLocked = {
    args: {
        title: 'Title',
        type: 'textarea',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as any,
        icon: <PlaceholderIcon />,
        onIconButtonClick: fn() as any,
        textareaProps: { onChange: fn() as any, placeholder: 'Any text' },
    },
};
