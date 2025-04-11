import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Field } from '../../../components/Field/src';
import { TextArea } from '../../../components/TextArea/src';
import { TextInput } from '../../../components/TextInput/src';
import { Checkbox } from '../../../components/Checkbox/src';
import { Switch } from '../../../components/Switch/src';
import { Dropdown } from '../../../components/Dropdown/src';
import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { Counter } from '../../../components/Counter/src';

export default {
    label: 'Input/Field',
    component: Field,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        labelPosition: {
            control: 'radio',
            options: ['top', 'left', 'right'],
        },
    },
    args: {
        label: 'Label',
        labelPosition: 'top',
        caption: 'Helper text',
        error: 'Error message',
    },
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const WithCheckbox = {
    args: {
        label: 'Label',
        children: <Checkbox />,
    },
};

export const WithSwitch = {
    args: {
        label: 'Label',
        children: <Switch />,
    },
};

export const WithCounter = {
    args: {
        label: 'Label',
        children: <Counter onChange={fn() as any} />,
    },
};

export const WithDropdown = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        children: (
            <Dropdown
                label="Option"
                onChange={fn() as any}
                options={[
                    { label: 'Option1', value: 'op1' },
                    { label: 'Option2 very long option', value: 'op2' },
                    { label: 'Any text', value: 'op3' },
                    { label: 'Any text', value: 'op4' },
                    { label: 'Option5 very long option', value: 'op5' },
                    { label: 'Option6 very very long option', value: 'op6' },
                ]}
            />
        ),
    },
};

export const WithSegmentedControl = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        children: (
            <SegmentedControl
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Classic', value: 'classic' },
                    { label: 'Batch', value: 'batch' },
                ]}
            />
        ),
    },
};

export const WithInput = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        children: <TextInput type="text" placeholder="Any text" variation="filled" onChange={fn() as any} />,
    },
};

export const WithInputWithIcons = {
    args: {
        label: 'Label',
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

export const WithInputDisabled = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        error: undefined,
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

export const WithInputLocked = {
    args: {
        label: 'Label',
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

export const WithArea = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        children: (
            <TextArea
                placeholder="Any text"
                variation="filled"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                onChange={fn() as any}
            />
        ),
    },
};

export const WithAreaWithIcons = {
    args: {
        label: 'Label',
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

export const WithAreaDisabled = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        error: undefined,
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

export const WithAreaLocked = {
    args: {
        label: 'Label',
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
