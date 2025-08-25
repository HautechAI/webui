import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TextInput } from '../../../components/TextInput/src';
import { NumberWithUnitsInput } from '../../../components/NumberWithUnitsInput/src';
import ColorPickerInput from '../../../components/ColorPickerInput/src';
import { Dropdown } from '../../../components/Dropdown/src';
import { HorizontalTextAlignmentControl } from '../../../components/HorizontalTextAlignmentControl/src';
import { KeyframeToggle } from '../../../components/KeyframeToggle/src';
import { ToggleIconButton } from '../../../components/ToggleIconButton/src';
import { UnlinkIcon, WorkflowIcon } from '../../../components/Icon/src';
import { VisualEditorInput, type VisualEditorInputProps } from '../../../components/VisualEditorInput/src';

export default {
    title: 'Visual Editor/VisualEditorInput',
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
    render: (args: VisualEditorInputProps) => (
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
        onChange: fn() as (value: string) => void,
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

// New composition API examples
export const WithCompositionAPI = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Composition API with NumberWithUnitsInput</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput
                        inputComponent={NumberWithUnitsInput}
                        inputProps={{
                            value: '100',
                            units: 'px',
                            availableUnits: ['px', '%', 'em', 'rem'],
                            placeholder: 'Enter value',
                            onChange: fn(),
                            onChangeUnits: fn(),
                            onToggleWorkflow: fn(),
                        }}
                        isPort={false}
                        keyframesState="noKeyframes"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />

                    <VisualEditorInput
                        inputComponent={NumberWithUnitsInput}
                        inputProps={{
                            value: '200',
                            units: '%',
                            availableUnits: ['%', 'px'],
                            placeholder: 'Percentage value',
                            onChange: fn(),
                            onChangeUnits: fn(),
                            onToggleWorkflow: fn(),
                            leadingIcon: <PlaceholderIcon />,
                        }}
                        isPort={true}
                        keyframesState="hasKeyframes"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Composition API with TextInput</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput
                        inputComponent={TextInput}
                        inputProps={{
                            type: 'text',
                            value: 'Custom text input',
                            placeholder: 'Enter text',
                            onChange: fn(),
                            leadingIcon: <PlaceholderIcon />,
                        }}
                        isPort={false}
                        keyframesState="noKeyframes"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />

                    <VisualEditorInput
                        inputComponent={TextInput}
                        inputProps={{
                            type: 'email',
                            value: 'user@example.com',
                            placeholder: 'Enter email',
                            onChange: fn(),
                            variation: 'outlined',
                            size: 'small',
                        }}
                        isPort={true}
                        keyframesState="isKeyframe"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />
                </div>
            </div>
        </div>
    ),
    args: {},
};

export const CompositionVsLegacy = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Legacy API (Backward Compatible)</h3>
                <VisualEditorInput
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em', 'rem']}
                    isPort={false}
                    keyframesState="noKeyframes"
                    onChange={fn()}
                    onToggleKeyframe={fn()}
                    onTogglePort={fn()}
                    onChangeUnits={fn()}
                    leadingIcon={<PlaceholderIcon />}
                    placeholder="Legacy API"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>New Composition API</h3>
                <VisualEditorInput
                    inputComponent={NumberWithUnitsInput}
                    inputProps={{
                        value: '100',
                        units: 'px',
                        availableUnits: ['px', '%', 'em', 'rem'],
                        placeholder: 'Composition API',
                        leadingIcon: <PlaceholderIcon />,
                        onChange: fn(),
                        onChangeUnits: fn(),
                        onToggleWorkflow: fn(),
                    }}
                    isPort={false}
                    keyframesState="noKeyframes"
                    onToggleKeyframe={fn()}
                    onTogglePort={fn()}
                />
            </div>
        </div>
    ),
    args: {},
};

// Story with ColorPicker
export const WithColorPicker = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>VisualEditorInput with ColorPicker</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput
                        inputComponent={ColorPickerInput}
                        inputProps={{
                            value: '#3498db',
                            onChange: fn(),
                            placeholder: 'Select color',
                        }}
                        isPort={false}
                        keyframesState="noKeyframes"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />

                    <VisualEditorInput
                        inputComponent={ColorPickerInput}
                        inputProps={{
                            value: '#e74c3c',
                            onChange: fn(),
                            placeholder: 'Color connected as port',
                        }}
                        isPort={true}
                        keyframesState="hasKeyframes"
                        onToggleKeyframe={fn()}
                        onTogglePort={fn()}
                    />
                </div>
            </div>
        </div>
    ),
    args: {},
};

// Story with Dropdown
export const WithDropdown = {
    render: () => {
        const dropdownOptions = [
            { label: 'Auto', value: 'auto' },
            { label: 'Flex Start', value: 'flex-start' },
            { label: 'Center', value: 'center' },
            { label: 'Flex End', value: 'flex-end' },
            { label: 'Stretch', value: 'stretch' },
            { label: 'Baseline', value: 'baseline' },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>VisualEditorInput with Dropdown</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <VisualEditorInput
                            inputComponent={Dropdown}
                            inputProps={{
                                value: 'center',
                                options: dropdownOptions,
                                onChange: fn(),
                                placeholder: 'Select alignment',
                                size: 'small',
                                onToggleWorkflow: fn(),
                            }}
                            isPort={false}
                            keyframesState="noKeyframes"
                            onToggleKeyframe={fn()}
                            onTogglePort={fn()}
                        />

                        <VisualEditorInput
                            inputComponent={Dropdown}
                            inputProps={{
                                value: 'flex-start',
                                options: dropdownOptions,
                                onChange: fn(),
                                placeholder: 'Dropdown as port',
                                size: 'small',
                                onToggleWorkflow: fn(),
                            }}
                            isPort={true}
                            keyframesState="isKeyframe"
                            onToggleKeyframe={fn()}
                            onTogglePort={fn()}
                        />
                    </div>
                </div>
            </div>
        );
    },
    args: {},
};

// Story demonstrating external port toggle mode with HorizontalTextAlignmentControl
export const WithExternalPortToggle = {
    render: () => {
        const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('center');
        const [isPort, setIsPort] = useState(false);
        const [keyframesState, setKeyframesState] = useState<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'>(
            'noKeyframes',
        );

        const handleToggleKeyframe = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            setKeyframesState((prev) => {
                if (prev === 'noKeyframes') return 'hasKeyframes';
                if (prev === 'hasKeyframes') return 'isKeyframe';
                return 'noKeyframes';
            });
        };

        const handleTogglePort = () => {
            setIsPort((prev) => !prev);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>External Port Toggle Mode</h3>
                    <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
                        In this mode, the port toggle button appears outside the input, next to the keyframe controls.
                        Uses the same KeyframeToggle and port button components as the regular inputs.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* Input component */}
                        <div style={{ flex: 1 }}>
                            <HorizontalTextAlignmentControl
                                value={alignment}
                                onChange={(_, newValue: 'left' | 'center' | 'right') => setAlignment(newValue)}
                                size="small"
                            />
                        </div>

                        {/* External port toggle - show unlink when in port mode, workflow when not */}
                        <ToggleIconButton
                            variant="flat"
                            size="xsmall"
                            icon={isPort ? <UnlinkIcon size={16} /> : <WorkflowIcon size={16} />}
                            onClick={handleTogglePort}
                        />

                        {/* Keyframe controls using the actual KeyframeToggle component */}
                        <KeyframeToggle state={keyframesState} onClick={handleToggleKeyframe} />
                    </div>

                    <div style={{ marginTop: '16px', fontSize: '12px', color: '#888' }}>
                        <div>Alignment: {alignment}</div>
                        <div>Is Port: {isPort ? 'Yes' : 'No'}</div>
                        <div>Keyframes: {keyframesState}</div>
                        <button
                            onClick={handleTogglePort}
                            style={{
                                marginTop: '8px',
                                padding: '4px 8px',
                                fontSize: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                background: '#f5f5f5',
                                cursor: 'pointer',
                            }}
                        >
                            Toggle Port Mode
                        </button>
                    </div>
                </div>
            </div>
        );
    },
    args: {},
};
