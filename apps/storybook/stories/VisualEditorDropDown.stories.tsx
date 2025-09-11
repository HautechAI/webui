import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { VisualEditorDropDown, type VisualEditorDropDownProps } from '../../../components/VisualEditorDropDown/src';

const defaultOptions = [
    { label: 'Pixel', value: 'px' },
    { label: 'Percentage', value: '%' },
    { label: 'Em', value: 'em' },
    { label: 'Rem', value: 'rem' },
    { label: 'Viewport Height', value: 'vh' },
    { label: 'Viewport Width', value: 'vw' },
    { label: 'Auto', value: 'auto' },
    { label: 'Inherit', value: 'inherit' },
];

export default {
    title: 'Visual Editor/VisualEditorDropDown',
    component: VisualEditorDropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        options: { control: 'object' },
        isPort: { control: 'boolean' },
        keyframesState: {
            control: { type: 'select' },
            options: ['noKeyframes', 'hasKeyframes', 'isKeyframe'],
        },
        type: {
            control: { type: 'select' },
            options: ['filled', 'outlined', 'flat'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        hasError: { control: 'boolean' },
        disabled: { control: 'boolean' },
        collapsed: { control: 'boolean' },
    },
    args: {
        value: 'px',
        options: defaultOptions,
        isPort: false,
        keyframesState: 'noKeyframes',
        type: 'filled',
        size: 'small',
        label: 'Select unit',
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

export const IsPort = {
    args: {
        isPort: true,
        value: '%',
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: 'em',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: 'rem',
    },
};

export const MediumSize = {
    args: {
        size: 'medium',
        value: 'vh',
    },
};

export const OutlinedType = {
    args: {
        type: 'outlined',
        value: 'vw',
    },
};

export const FlatType = {
    args: {
        type: 'flat',
        value: 'auto',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'inherit',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: 'px',
        keyframesState: 'hasKeyframes',
    },
};

export const Collapsed = {
    args: {
        collapsed: true,
        value: '%',
    },
};

export const NoSelection = {
    args: {
        value: undefined,
        label: 'Choose a unit',
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('px');
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
                    <VisualEditorDropDown
                        value={value}
                        options={defaultOptions}
                        isPort={isPort}
                        keyframesState={keyframesState}
                        onChange={setValue}
                        onToggleKeyframe={handleToggleKeyframe}
                        onTogglePort={() => setIsPort((prev) => !prev)}
                        label="Select unit"
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: "{value}"</div>
                        <div>Is Port: {isPort ? 'Yes' : 'No'}</div>
                        <div>Keyframes State: {keyframesState}</div>
                        <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            Hover over the dropdown to see controls. Click keyframe toggle to change states.
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
    render: (args: VisualEditorDropDownProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>No Keyframes</h3>
                <VisualEditorDropDown {...args} value="px" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Has Keyframes</h3>
                <VisualEditorDropDown {...args} value="%" keyframesState="hasKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Keyframe</h3>
                <VisualEditorDropDown {...args} value="em" keyframesState="isKeyframe" isPort={false} />
            </div>
        </div>
    ),
    args: {
        options: defaultOptions,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const PortStates = {
    render: (args: VisualEditorDropDownProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Not Port</h3>
                <VisualEditorDropDown {...args} value="vh" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Port (with keyframes)</h3>
                <VisualEditorDropDown {...args} value="vw" keyframesState="hasKeyframes" isPort={true} />
            </div>
        </div>
    ),
    args: {
        options: defaultOptions,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllSizes = {
    render: (args: VisualEditorDropDownProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Small Size</h3>
                <VisualEditorDropDown {...args} size="small" value="px" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Medium Size</h3>
                <VisualEditorDropDown {...args} size="medium" value="%" />
            </div>
        </div>
    ),
    args: {
        options: defaultOptions,
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllTypes = {
    render: (args: VisualEditorDropDownProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Filled Type</h3>
                <VisualEditorDropDown {...args} type="filled" value="px" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Outlined Type</h3>
                <VisualEditorDropDown {...args} type="outlined" value="%" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Flat Type</h3>
                <VisualEditorDropDown {...args} type="flat" value="em" />
            </div>
        </div>
    ),
    args: {
        options: defaultOptions,
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};

export const AllStates = {
    render: (args: VisualEditorDropDownProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal</h3>
                <VisualEditorDropDown {...args} value="px" keyframesState="noKeyframes" isPort={false} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port State</h3>
                <VisualEditorDropDown {...args} value="em" keyframesState="isKeyframe" isPort={true} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Error State</h3>
                <VisualEditorDropDown {...args} value="rem" keyframesState="noKeyframes" isPort={false} hasError />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Disabled</h3>
                <VisualEditorDropDown {...args} value="vh" keyframesState="hasKeyframes" isPort={false} disabled />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Collapsed</h3>
                <VisualEditorDropDown {...args} value="vw" keyframesState="noKeyframes" isPort={false} collapsed />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>No Selection</h3>
                <VisualEditorDropDown
                    {...args}
                    value={undefined}
                    keyframesState="noKeyframes"
                    isPort={false}
                    label="Choose a unit"
                />
            </div>
        </div>
    ),
    args: {
        options: defaultOptions,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};
