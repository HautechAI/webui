import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import {
    VisualEditorNumberWithUnitsInput,
    type VisualEditorNumberWithUnitsInputProps,
} from '../../../components/VisualEditorNumberWithUnitsInput/src';

export default {
    title: 'Visual Editor/VisualEditorNumberWithUnitsInput',
    component: VisualEditorNumberWithUnitsInput,
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
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
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

export const MediumSize = {
    args: {
        size: 'medium',
        value: '250',
        units: 'rem',
    },
};

export const OutlinedVariation = {
    args: {
        variation: 'outlined',
        value: '300',
        units: 'vh',
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
        value: '400',
        units: 'px',
        keyframesState: 'hasKeyframes',
    },
};

export const EmptyWithPlaceholder = {
    args: {
        value: '',
        placeholder: 'Enter numeric value',
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
                    <VisualEditorNumberWithUnitsInput
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
                        <div>Value: "{value}"</div>
                        <div>Units: {units}</div>
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
    render: (args: VisualEditorNumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>No Keyframes</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="100"
                    units="px"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Has Keyframes</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="150"
                    units="%"
                    keyframesState="hasKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Keyframe</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="200"
                    units="em"
                    keyframesState="isKeyframe"
                    isPort={false}
                />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        leadingIcon: <PlaceholderIcon />,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const PortStates = {
    render: (args: VisualEditorNumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Not Port</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="300"
                    units="vh"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Is Port (with keyframes)</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="50"
                    units="vw"
                    keyframesState="hasKeyframes"
                    isPort={true}
                />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        leadingIcon: <PlaceholderIcon />,
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const AllSizes = {
    render: (args: VisualEditorNumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Small Size</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    size="small"
                    value="100"
                    units="px"
                    leadingIcon={<PlaceholderIcon />}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Medium Size</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    size="medium"
                    value="150"
                    units="%"
                    leadingIcon={<PlaceholderIcon />}
                />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const AllVariations = {
    render: (args: VisualEditorNumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Filled Variation</h3>
                <VisualEditorNumberWithUnitsInput {...args} variation="filled" value="100" units="px" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Outlined Variation</h3>
                <VisualEditorNumberWithUnitsInput {...args} variation="outlined" value="150" units="%" />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        isPort: false,
        keyframesState: 'noKeyframes',
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const AllStates = {
    render: (args: VisualEditorNumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="100"
                    units="px"
                    keyframesState="noKeyframes"
                    isPort={false}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Leading Icon</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="150"
                    units="%"
                    keyframesState="hasKeyframes"
                    isPort={false}
                    leadingIcon={<PlaceholderIcon />}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port State</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="200"
                    units="em"
                    keyframesState="isKeyframe"
                    isPort={true}
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Error State</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="invalid"
                    units="rem"
                    keyframesState="noKeyframes"
                    isPort={false}
                    hasError
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Disabled</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value="250"
                    units="vh"
                    keyframesState="hasKeyframes"
                    isPort={false}
                    disabled
                />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Empty with Placeholder</h3>
                <VisualEditorNumberWithUnitsInput
                    {...args}
                    value=""
                    units="px"
                    keyframesState="noKeyframes"
                    isPort={false}
                    placeholder="Enter a numeric value"
                />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};
