import React from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon, WorkflowIcon } from '../../../components/Icon/src';
import { ToggleIconButton } from '../../../components/ToggleIconButton/src';
import { Dropdown } from '../../../components/Dropdown/src';
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
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email', 'number'],
        },
        variation: {
            control: { type: 'select' },
            options: ['filled', 'outlined'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
    },
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder: 'Any text',
        type: 'text',
        variation: 'filled',
        size: 'medium',
    },
    decorators: [
        (Story: React.ComponentType) => (
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
        onIconButtonClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
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
        onIconButtonClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithCustomClass = {
    args: {
        className: 'custom-text-input',
    },
};

export const Small = {
    args: {
        size: 'small' as const,
        leadingIcon: <PlaceholderIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const WithTrailingHoverContent = {
    args: {
        trailingIcon: <PlaceholderIcon />,
        trailingHoverContent: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ToggleIconButton variant="flat" size="xsmall" icon={<WorkflowIcon size={16} />} onClick={fn()} />
                <Dropdown
                    size="xsmall"
                    collapsed={true}
                    value="px"
                    options={[
                        { label: 'px', value: 'px' },
                        { label: '%', value: '%' },
                        { label: 'em', value: 'em' },
                    ]}
                    onChange={fn()}
                />
            </div>
        ),
    },
};

export const AllVariations = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Basic Inputs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextInput type="text" placeholder="Text input" onChange={fn()} />
                    <TextInput type="email" placeholder="Email input" onChange={fn()} />
                    <TextInput type="password" placeholder="Password input" onChange={fn()} />
                    <TextInput type="number" placeholder="Number input" onChange={fn()} />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Icons</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextInput
                        type="text"
                        placeholder="Leading icon"
                        leadingIcon={<PlaceholderIcon />}
                        onChange={fn()}
                    />
                    <TextInput
                        type="text"
                        placeholder="Trailing icon"
                        trailingIcon={<PlaceholderIcon />}
                        onChange={fn()}
                    />
                    <TextInput
                        type="text"
                        placeholder="Both icons"
                        leadingIcon={<PlaceholderIcon />}
                        trailingIcon={<PlaceholderIcon />}
                        onChange={fn()}
                    />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Hover Content Feature</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextInput
                        type="text"
                        placeholder="Hover to see controls"
                        trailingIcon={<PlaceholderIcon />}
                        trailingHoverContent={
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ToggleIconButton
                                    variant="flat"
                                    size="xsmall"
                                    icon={<WorkflowIcon size={16} />}
                                    onClick={fn()}
                                />
                                <Dropdown
                                    size="xsmall"
                                    collapsed={true}
                                    value="px"
                                    options={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' },
                                        { label: 'em', value: 'em' },
                                    ]}
                                    onChange={fn()}
                                />
                            </div>
                        }
                        onChange={fn()}
                    />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextInput type="text" placeholder="Normal state" onChange={fn()} />
                    <TextInput type="text" placeholder="With error" hasError={true} onChange={fn()} />
                    <TextInput type="text" placeholder="Disabled" disabled={true} onChange={fn()} />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Sizes & Variations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <TextInput
                        type="text"
                        placeholder="Medium filled"
                        size="medium"
                        variation="filled"
                        onChange={fn()}
                    />
                    <TextInput type="text" placeholder="Small filled" size="small" variation="filled" onChange={fn()} />
                    <TextInput
                        type="text"
                        placeholder="Medium outlined"
                        size="medium"
                        variation="outlined"
                        onChange={fn()}
                    />
                    <TextInput
                        type="text"
                        placeholder="Small outlined"
                        size="small"
                        variation="outlined"
                        onChange={fn()}
                    />
                </div>
            </div>
        </div>
    ),
    args: {},
};
