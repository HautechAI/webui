import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextArea } from '../../../components/TextArea/src';

export default {
    title: 'Input/TextArea',
    component: TextArea,
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
        className: 'custom-textarea',
    },
};
