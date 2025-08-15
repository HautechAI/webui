import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { VisualEditorInput } from '../../../components/VisualEditorInput/src';

export default {
    title: 'Input/VisualEditorInput',
    component: VisualEditorInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        units: { control: 'text' },
        availableUnits: { control: 'object' },
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
    },
    args: {
        value: '100',
        units: 'px',
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        isPort: false,
        keyframesState: 'noKeyframes',
        variation: 'filled',
        size: 'small',
        placeholder: 'Enter value',
        onChange: fn() as any,
        onToggleKeyframe: fn() as any,
        onTogglePort: fn() as any,
        onChangeUnits: fn() as any,
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

export const WithLeadingIcon = {
    args: {
        leadingIcon: <PlaceholderIcon />,
    },
};

export const IsPort = {
    args: {
        isPort: true,
        value: '200',
        units: '%',
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        value: '150',
        units: 'em',
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        value: '75',
        units: '%',
    },
};

export const WithError = {
    args: {
        hasError: true,
        value: 'invalid',
        units: 'px',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        value: '300',
        units: 'px',
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('100');
            const [units, setUnits] = useState('px');
            const [isPort, setIsPort] = useState(false);
            const [keyframesState, setKeyframesState] = useState<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'>(
                'noKeyframes',
            );

            const availableUnits = ['px', '%', 'em', 'rem', 'vh', 'vw'];

            const handleToggleKeyframe = () => {
                setKeyframesState((prev) => {
                    if (prev === 'noKeyframes') return 'hasKeyframes';
                    if (prev === 'hasKeyframes') return 'isKeyframe';
                    return 'noKeyframes';
                });
            };

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                    <VisualEditorInput
                        value={value}
                        units={units}
                        availableUnits={availableUnits}
                        isPort={isPort}
                        keyframesState={keyframesState}
                        onChange={setValue}
                        onToggleKeyframe={handleToggleKeyframe}
                        onTogglePort={() => setIsPort((prev) => !prev)}
                        onChangeUnits={setUnits}
                        leadingIcon={<PlaceholderIcon />}
                        placeholder="Enter value"
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: {value}</div>
                        <div>Units: {units}</div>
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
    render: (args: any) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput {...args} value="100" units="px" keyframesState="noKeyframes" isPort={false} />
                    <VisualEditorInput {...args} value="150" units="%" keyframesState="hasKeyframes" isPort={false} />
                    <VisualEditorInput {...args} value="200" units="em" keyframesState="isKeyframe" isPort={false} />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput {...args} value="300" units="vh" keyframesState="noKeyframes" isPort={true} />
                    <VisualEditorInput {...args} value="50" units="vw" keyframesState="hasKeyframes" isPort={true} />
                </div>
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        leadingIcon: <PlaceholderIcon />,
        onChange: fn() as any,
        onToggleKeyframe: fn() as any,
        onTogglePort: fn() as any,
        onChangeUnits: fn() as any,
    },
};
