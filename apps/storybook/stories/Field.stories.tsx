import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Field } from '../../../components/Field/src';
import { TextArea } from '../../../components/TextArea/src';
import { TextInput } from '../../../components/TextInput/src';

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
        caption: 'Helper text',
        children: <TextInput type="text" placeholder="Any text" variation="filled" onChange={fn() as any} />,
    },
};

export const InputOutlined = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: <TextInput type="text" placeholder="Any text" variation="outlined" onChange={fn() as any} />,
    },
};

export const InputWithIcons = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextInput
                type="text"
                placeholder="Any text"
                leadingIcon={<PlaceholderIcon />}
                trailingIcon={<PlaceholderIcon />}
                onChange={fn() as any}
            />
        ),
    },
};

export const InputWithIconButton = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextInput
                type="text"
                placeholder="Any text"
                leadingIcon={<PlaceholderIcon />}
                trailingIcon={<PlaceholderIcon />}
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const InputWithError = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        error: 'Error message',
        children: (
            <TextInput
                type="text"
                hasError
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const InputDisabled = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextInput
                type="text"
                disabled
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const InputLocked = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as any,
        children: (
            <TextInput
                type="text"
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaWithLongText = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextArea
                placeholder="Any text"
                variation="filled"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaFilled = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: <TextArea placeholder="Any text" variation="filled" onChange={fn() as any} />,
    },
};

export const AreaOutlined = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: <TextArea placeholder="Any text" variation="outlined" onChange={fn() as any} />,
    },
};

export const AreaWithIcons = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextArea
                placeholder="Any text"
                leadingIcon={<PlaceholderIcon />}
                trailingIcon={<PlaceholderIcon />}
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaWithIconButton = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextArea
                placeholder="Any text"
                leadingIcon={<PlaceholderIcon />}
                trailingIcon={<PlaceholderIcon />}
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaWithError = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        error: 'Error message',
        children: (
            <TextArea
                hasError
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaDisabled = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        children: (
            <TextArea
                disabled
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};

export const AreaLocked = {
    args: {
        title: 'Title',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as any,
        children: (
            <TextArea
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as any}
                onChange={fn() as any}
            />
        ),
    },
};
