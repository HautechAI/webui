import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon, TextIcon } from '../../../components/Icon/src';
import { VisualEditorTextInput, type VisualEditorTextInputProps } from '../../../components/VisualEditorTextInput/src';

export default {
    title: 'Visual Editor/VisualEditorTextInput',
    component: VisualEditorTextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        isPort: { control: 'boolean' },
        keyframesState: {
            control: { type: 'select' },
            options: ['noKeyframes', 'hasKeyframes', 'isKeyframe'],
        },
        variation: {
            control: { type: 'select' },
            options: ['filled', 'outlined'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email'],
        },
        hasError: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        value: 'Hello World',
        isPort: false,
        keyframesState: 'noKeyframes',
        variation: 'filled',
        size: 'small',
        type: 'text',
        placeholder: 'Enter text',
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
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

export const WithLeadingIcon = {
    args: {
        leadingIcon: <PlaceholderIcon />,
    },
};

export const WithTrailingIcon = {
    args: {
        trailingIcon: <PlaceholderIcon />,
    },
};

export const WithBothIcons = {
    args: {
        leadingIcon: <TextIcon />,
        trailingIcon: <PlaceholderIcon />,
    },
};

export const EmailType = {
    args: {
        type: 'email',
        value: 'user@example.com',
        placeholder: 'Enter email address',
        leadingIcon: <TextIcon />,
    },
};

export const PasswordType = {
    args: {
        type: 'password',
        value: 'secretpassword',
        placeholder: 'Enter password',
    },
};

export const IsPort = {
    args: {
        isPort: true,
        value: 'Connected text',
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'Text with keyframes',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'Active keyframe text',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'Invalid text',
        leadingIcon: <TextIcon />,
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'Disabled text',
        leadingIcon: <PlaceholderIcon />,
    },
};

export const MediumSize = {
    args: {
        size: 'medium',
        value: 'Medium sized input',
        leadingIcon: <PlaceholderIcon />,
    },
};

export const Outlined = {
    args: {
        variation: 'outlined',
        value: 'Outlined variant',
        leadingIcon: <PlaceholderIcon />,
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('Interactive text');
            const [isPort, setIsPort] = useState(false);
            const [keyframesState, setKeyframesState] = useState<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'>(
                'noKeyframes',
            );

            const handleToggleKeyframe = () => {
                setKeyframesState((prev) => {
                    if (prev === 'noKeyframes') return 'hasKeyframes';
                    if (prev === 'hasKeyframes') return 'isKeyframe';
                    return 'noKeyframes';
                });
            };

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                    <VisualEditorTextInput
                        value={value}
                        isPort={isPort}
                        keyframesState={keyframesState}
                        onChange={setValue}
                        onToggleKeyframe={handleToggleKeyframe}
                        onTogglePort={() => setIsPort((prev) => !prev)}
                        leadingIcon={<PlaceholderIcon />}
                        placeholder="Enter text"
                        type="text"
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: {value}</div>
                        <div>Is Port: {isPort ? 'Yes' : 'No'}</div>
                        <div>Keyframes State: {keyframesState}</div>
                    </div>
                </div>
            );
        };

        return <InteractiveComponent />;
    },
    args: {},
};

export const AllStates = {
    render: (args: VisualEditorTextInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorTextInput {...args} value="No keyframes" keyframesState="noKeyframes" isPort={false} />
                    <VisualEditorTextInput
                        {...args}
                        value="Has keyframes"
                        keyframesState="hasKeyframes"
                        isPort={false}
                    />
                    <VisualEditorTextInput {...args} value="Is keyframe" keyframesState="isKeyframe" isPort={false} />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorTextInput
                        {...args}
                        value="Port no keyframes"
                        keyframesState="noKeyframes"
                        isPort={true}
                    />
                    <VisualEditorTextInput
                        {...args}
                        value="Port has keyframes"
                        keyframesState="hasKeyframes"
                        isPort={true}
                    />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Different Types</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorTextInput
                        {...args}
                        value="Regular text"
                        type="text"
                        keyframesState="noKeyframes"
                        isPort={false}
                    />
                    <VisualEditorTextInput
                        {...args}
                        value="user@example.com"
                        type="email"
                        keyframesState="noKeyframes"
                        isPort={false}
                    />
                    <VisualEditorTextInput
                        {...args}
                        value="password123"
                        type="password"
                        keyframesState="noKeyframes"
                        isPort={false}
                    />
                </div>
            </div>
        </div>
    ),
    args: {
        leadingIcon: <PlaceholderIcon />,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};
