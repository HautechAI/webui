import React, { ChangeEvent } from 'react';
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
import { ToolButton } from '../../../components/ToolButton/src';

export default {
    title: 'Input/Field',
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
        (Story: React.ComponentType) => (
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
        children: <Counter onChange={fn() as (value: number) => void} />,
    },
};

export const WithDropdown = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        children: (
            <Dropdown
                label="Option"
                onChange={fn() as (value: string) => void}
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
        children: (
            <TextInput
                type="text"
                placeholder="Any text"
                variation="filled"
                onChange={fn() as (e: ChangeEvent<HTMLInputElement>) => void}
            />
        ),
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
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLInputElement>) => void}
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
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLInputElement>) => void}
            />
        ),
    },
};

export const WithInputLocked = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as () => void,
        children: (
            <TextInput
                type="text"
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLInputElement>) => void}
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
                onChange={fn() as (value: React.ChangeEvent<HTMLTextAreaElement>) => void}
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
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLTextAreaElement>) => void}
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
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLTextAreaElement>) => void}
            />
        ),
    },
};

export const WithAreaLocked = {
    args: {
        label: 'Label',
        caption: 'Helper text',
        locked: true,
        onLockedClick: fn() as () => void,
        children: (
            <TextArea
                placeholder="Any text"
                icon={<PlaceholderIcon />}
                onIconButtonClick={fn() as () => void}
                onChange={fn() as (value: React.ChangeEvent<HTMLTextAreaElement>) => void}
            />
        ),
    },
};

export const WithActionButton = {
    args: {
        label: 'Username',
        caption: 'Enter your username',
        actionButton: <ToolButton icon={<PlaceholderIcon />} onClick={fn()} />,
        children: <TextInput type="text" placeholder="Enter username" variation="filled" onChange={fn()} />,
    },
};

export const WithActionButtonAndLocked = {
    args: {
        label: 'Password',
        caption: 'Enter your password',
        locked: true,
        onLockedClick: fn(),
        actionButton: <ToolButton icon={<PlaceholderIcon />} onClick={fn()} />,
        children: <TextInput type="password" placeholder="Enter password" variation="filled" onChange={fn()} />,
    },
};

export const WithCustomActionButton = {
    args: {
        label: 'Email',
        caption: 'Enter your email address',
        actionButton: (
            <button
                onClick={fn()}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#666',
                    padding: '2px 4px',
                }}
            >
                👁️
            </button>
        ),
        children: <TextInput type="email" placeholder="Enter email" variation="filled" onChange={fn()} />,
    },
};
