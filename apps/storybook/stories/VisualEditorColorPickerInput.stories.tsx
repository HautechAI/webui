import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import {
    VisualEditorColorPickerInput,
    type VisualEditorColorPickerInputProps,
} from '../../../components/VisualEditorColorPickerInput/src';

export default {
    title: 'Visual Editor/VisualEditorColorPickerInput',
    component: VisualEditorColorPickerInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'color' },
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
        hasError: { control: 'boolean' },
        disabled: { control: 'boolean' },
        alphaEnabled: { control: 'boolean' },
    },
    args: {
        value: '#ff6b35',
        isPort: false,
        keyframesState: 'noKeyframes',
        variation: 'filled',
        size: 'small',
        placeholder: 'Enter color',
        onChange: fn() as (color: string) => void,
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

export const IsPort = {
    args: {
        isPort: true,
        value: '#4ecdc4',
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: '#45b7d1',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: '#f7931e',
    },
};

export const MediumSize = {
    args: {
        size: 'medium',
        value: '#6c5ce7',
    },
};

export const OutlinedVariation = {
    args: {
        variation: 'outlined',
        value: '#fd79a8',
    },
};

export const WithAlpha = {
    args: {
        value: '#ff6b3580',
        alphaEnabled: true,
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'invalid-color',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: '#74b9ff',
        keyframesState: 'hasKeyframes',
    },
};

export const EmptyWithPlaceholder = {
    args: {
        value: '',
        placeholder: 'Choose a color',
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('#ff6b35');
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
                    <VisualEditorColorPickerInput
                        value={value}
                        isPort={isPort}
                        keyframesState={keyframesState}
                        onChange={setValue}
                        onToggleKeyframe={handleToggleKeyframe}
                        onTogglePort={() => setIsPort((prev) => !prev)}
                        placeholder="Choose a color"
                        alphaEnabled={true}
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: "{value}"</div>
                        <div>Is Port: {isPort ? 'Yes' : 'No'}</div>
                        <div>Keyframes State: {keyframesState}</div>
                        <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            Hover over the input to see controls. Click keyframe toggle to change states.
                        </div>
                    </div>
                </div>
            );
        };

        return <InteractiveComponent />;
    },
    args: {},
};

export const AllKeyframeStates = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>No Keyframes</h3>
                <VisualEditorColorPickerInput {...args} value="#ff6b35" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Has Keyframes</h3>
                <VisualEditorColorPickerInput {...args} value="#4ecdc4" keyframesState="hasKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Keyframe</h3>
                <VisualEditorColorPickerInput {...args} value="#45b7d1" keyframesState="isKeyframe" isPort={false} />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const PortStates = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Not Port</h3>
                <VisualEditorColorPickerInput {...args} value="#6c5ce7" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Port (with keyframes)</h3>
                <VisualEditorColorPickerInput {...args} value="#fd79a8" keyframesState="hasKeyframes" isPort={true} />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllSizes = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Small Size</h3>
                <VisualEditorColorPickerInput {...args} size="small" value="#ff6b35" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Medium Size</h3>
                <VisualEditorColorPickerInput {...args} size="medium" value="#4ecdc4" />
            </div>
        </div>
    ),
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllVariations = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Filled Variation</h3>
                <VisualEditorColorPickerInput {...args} variation="filled" value="#45b7d1" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Outlined Variation</h3>
                <VisualEditorColorPickerInput {...args} variation="outlined" value="#f7931e" />
            </div>
        </div>
    ),
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllStates = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal</h3>
                <VisualEditorColorPickerInput {...args} value="#ff6b35" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Keyframes</h3>
                <VisualEditorColorPickerInput {...args} value="#4ecdc4" keyframesState="hasKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port State</h3>
                <VisualEditorColorPickerInput {...args} value="#45b7d1" keyframesState="isKeyframe" isPort={true} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Alpha</h3>
                <VisualEditorColorPickerInput
                    {...args}
                    value="#f7931e80"
                    keyframesState="noKeyframes"
                    isPort={false}
                    alphaEnabled={true}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Error State</h3>
                <VisualEditorColorPickerInput
                    {...args}
                    value="invalid"
                    keyframesState="noKeyframes"
                    isPort={false}
                    hasError
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Disabled</h3>
                <VisualEditorColorPickerInput
                    {...args}
                    value="#6c5ce7"
                    keyframesState="hasKeyframes"
                    isPort={false}
                    disabled
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Empty with Placeholder</h3>
                <VisualEditorColorPickerInput
                    {...args}
                    value=""
                    keyframesState="noKeyframes"
                    isPort={false}
                    placeholder="Pick a color"
                />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const ColorVariations = {
    render: (args: VisualEditorColorPickerInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Vibrant Colors</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <VisualEditorColorPickerInput {...args} value="#ff6b35" />
                    <VisualEditorColorPickerInput {...args} value="#4ecdc4" />
                    <VisualEditorColorPickerInput {...args} value="#45b7d1" />
                    <VisualEditorColorPickerInput {...args} value="#f7931e" />
                </div>
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Pastels</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <VisualEditorColorPickerInput {...args} value="#ffeaa7" />
                    <VisualEditorColorPickerInput {...args} value="#fab1a0" />
                    <VisualEditorColorPickerInput {...args} value="#fd79a8" />
                    <VisualEditorColorPickerInput {...args} value="#fdcb6e" />
                </div>
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Dark Theme</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <VisualEditorColorPickerInput {...args} value="#2d3436" />
                    <VisualEditorColorPickerInput {...args} value="#636e72" />
                    <VisualEditorColorPickerInput {...args} value="#6c5ce7" />
                    <VisualEditorColorPickerInput {...args} value="#74b9ff" />
                </div>
            </div>
        </div>
    ),
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        size: 'small',
        onChange: fn() as (color: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};
