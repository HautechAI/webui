import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import {
    VisualEditorSegmentedControl,
    type VisualEditorSegmentedControlProps,
} from '../../../components/VisualEditorSegmentedControl/src';

const mockOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
];

const mockOptionsWithIcons = [
    { label: 'Grid', value: 'grid', leadingIcon: <PlaceholderIcon /> },
    { label: 'List', value: 'list', leadingIcon: <PlaceholderIcon /> },
    { label: 'Card', value: 'card', leadingIcon: <PlaceholderIcon /> },
];

export default {
    title: 'Visual Editor/VisualEditorSegmentedControl',
    component: VisualEditorSegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        options: { control: 'object' },
        value: { control: 'text' },
        isPort: { control: 'boolean' },
        keyframesState: {
            control: { type: 'select' },
            options: ['noKeyframes', 'hasKeyframes', 'isKeyframe'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        material: { control: 'boolean' },
        stretch: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        options: mockOptions,
        value: 'center',
        isPort: false,
        keyframesState: 'noKeyframes',
        size: 'small',
        material: false,
        stretch: false,
        disabled: false,
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={400}>
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
        options: mockOptionsWithIcons,
        value: 'list',
    },
};

export const IsPort = {
    args: {
        isPort: true,
        value: 'right',
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'left',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'center',
    },
};

export const MediumSize = {
    args: {
        size: 'medium',
        value: 'right',
    },
};

export const MaterialDesign = {
    args: {
        material: true,
        value: 'left',
    },
};

export const Stretched = {
    args: {
        stretch: true,
        value: 'center',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'right',
        keyframesState: 'hasKeyframes',
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('center');
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

            const handleChange = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, newValue: string) => {
                setValue(newValue);
            };

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                    <VisualEditorSegmentedControl
                        options={mockOptionsWithIcons}
                        value={value}
                        isPort={isPort}
                        keyframesState={keyframesState}
                        onChange={handleChange}
                        onToggleKeyframe={handleToggleKeyframe}
                        onTogglePort={() => setIsPort((prev) => !prev)}
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Selected Value: "{value}"</div>
                        <div>Is Port: {isPort ? 'Yes' : 'No'}</div>
                        <div>Keyframes State: {keyframesState}</div>
                        <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            Click options to change selection. Use port and keyframe toggles on the right.
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
    render: (args: VisualEditorSegmentedControlProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>No Keyframes</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="left"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Has Keyframes</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="center"
                    keyframesState="hasKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Keyframe</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="right"
                    keyframesState="isKeyframe"
                    isPort={false}
                />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const PortStates = {
    render: (args: VisualEditorSegmentedControlProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Not Port</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="left"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Port (with keyframes)</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="center"
                    keyframesState="hasKeyframes"
                    isPort={true}
                />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllSizes = {
    render: (args: VisualEditorSegmentedControlProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Small Size</h3>
                <VisualEditorSegmentedControl {...args} size="small" options={mockOptionsWithIcons} value="grid" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Medium Size</h3>
                <VisualEditorSegmentedControl {...args} size="medium" options={mockOptionsWithIcons} value="list" />
            </div>
        </div>
    ),
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllVariations = {
    render: (args: VisualEditorSegmentedControlProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Standard Design</h3>
                <VisualEditorSegmentedControl {...args} material={false} options={mockOptions} value="left" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Material Design</h3>
                <VisualEditorSegmentedControl {...args} material={true} options={mockOptions} value="center" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Stretched</h3>
                <VisualEditorSegmentedControl {...args} stretch={true} options={mockOptions} value="right" />
            </div>
        </div>
    ),
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllStates = {
    render: (args: VisualEditorSegmentedControlProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="left"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Icons</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptionsWithIcons}
                    value="list"
                    keyframesState="hasKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port State</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="center"
                    keyframesState="isKeyframe"
                    isPort={true}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Material Design</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="right"
                    keyframesState="noKeyframes"
                    isPort={false}
                    material={true}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Disabled</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="left"
                    keyframesState="hasKeyframes"
                    isPort={false}
                    disabled
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Stretched</h3>
                <VisualEditorSegmentedControl
                    {...args}
                    options={mockOptions}
                    value="center"
                    keyframesState="noKeyframes"
                    isPort={false}
                    stretch={true}
                />
            </div>
        </div>
    ),
    args: {
        onChange: fn() as (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};
