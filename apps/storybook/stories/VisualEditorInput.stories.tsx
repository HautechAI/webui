import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { VisualEditorInput, type VisualEditorInputProps } from '../../../components/VisualEditorInput/src';
import { TextInput } from '../../../components/TextInput/src';
import { NumberWithUnitsInput } from '../../../components/NumberWithUnitsInput/src';

export default {
    title: 'Visual Editor/VisualEditorInput',
    component: VisualEditorInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isPort: { control: 'boolean' },
        keyframesState: {
            control: { type: 'select' },
            options: ['noKeyframes', 'hasKeyframes', 'isKeyframe'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        disabled: { control: 'boolean' },
    },
    args: {
        isPort: false,
        keyframesState: 'noKeyframes',
        size: 'small',
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

export const WithTextInput = {
    args: {
        children: <TextInput type="text" value="Sample text" placeholder="Enter text" />,
    },
};

export const WithNumberWithUnitsInput = {
    args: {
        children: (
            <NumberWithUnitsInput
                value="100"
                units="px"
                availableUnits={['px', '%', 'em', 'rem']}
                placeholder="Enter value"
            />
        ),
    },
};

export const IsPort = {
    args: {
        isPort: true,
        children: <TextInput type="text" value="Sample text" placeholder="Enter text" />,
    },
};

export const HasKeyframes = {
    args: {
        keyframesState: 'hasKeyframes',
        children: <TextInput type="text" value="Sample text" placeholder="Enter text" />,
    },
};

export const IsKeyframe = {
    args: {
        keyframesState: 'isKeyframe',
        children: <TextInput type="text" value="Sample text" placeholder="Enter text" />,
    },
};

export const Disabled = {
    args: {
        disabled: true,
        children: <TextInput type="text" value="Sample text" placeholder="Enter text" />,
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [textValue, setTextValue] = useState('Sample text');
            const [numberValue, setNumberValue] = useState('100');
            const [units, setUnits] = useState('px');
            const [isPortText, setIsPortText] = useState(false);
            const [isPortNumber, setIsPortNumber] = useState(false);
            const [keyframesStateText, setKeyframesStateText] = useState<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'>(
                'noKeyframes',
            );
            const [keyframesStateNumber, setKeyframesStateNumber] = useState<
                'noKeyframes' | 'hasKeyframes' | 'isKeyframe'
            >('noKeyframes');

            const availableUnits = ['px', '%', 'em', 'rem', 'vh', 'vw'];

            const handleToggleKeyframeText = () => {
                setKeyframesStateText((prev) => {
                    if (prev === 'noKeyframes') return 'hasKeyframes';
                    if (prev === 'hasKeyframes') return 'isKeyframe';
                    return 'noKeyframes';
                });
            };

            const handleToggleKeyframeNumber = () => {
                setKeyframesStateNumber((prev) => {
                    if (prev === 'noKeyframes') return 'hasKeyframes';
                    if (prev === 'hasKeyframes') return 'isKeyframe';
                    return 'noKeyframes';
                });
            };

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
                    <div>
                        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Text Input Wrapper</h3>
                        <VisualEditorInput
                            isPort={isPortText}
                            keyframesState={keyframesStateText}
                            onToggleKeyframe={handleToggleKeyframeText}
                            onTogglePort={() => setIsPortText((prev) => !prev)}
                        >
                            <TextInput
                                type="text"
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                                placeholder="Enter text"
                                leadingIcon={<PlaceholderIcon />}
                            />
                        </VisualEditorInput>
                        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>
                            <div>Value: {textValue}</div>
                            <div>Is Port: {isPortText ? 'Yes' : 'No'}</div>
                            <div>Keyframes State: {keyframesStateText}</div>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Number with Units Input Wrapper</h3>
                        <VisualEditorInput
                            isPort={isPortNumber}
                            keyframesState={keyframesStateNumber}
                            onToggleKeyframe={handleToggleKeyframeNumber}
                            onTogglePort={() => setIsPortNumber((prev) => !prev)}
                        >
                            <NumberWithUnitsInput
                                value={numberValue}
                                onChange={setNumberValue}
                                units={units}
                                availableUnits={availableUnits}
                                onChangeUnits={setUnits}
                                placeholder="Enter value"
                                leadingIcon={<PlaceholderIcon />}
                            />
                        </VisualEditorInput>
                        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>
                            <div>Value: {numberValue}</div>
                            <div>Units: {units}</div>
                            <div>Is Port: {isPortNumber ? 'Yes' : 'No'}</div>
                            <div>Keyframes State: {keyframesStateNumber}</div>
                        </div>
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
                    <VisualEditorInput {...args} keyframesState="noKeyframes" isPort={false}>
                        <TextInput type="text" value="No keyframes" placeholder="Enter text" />
                    </VisualEditorInput>
                    <VisualEditorInput {...args} keyframesState="hasKeyframes" isPort={false}>
                        <TextInput type="text" value="Has keyframes" placeholder="Enter text" />
                    </VisualEditorInput>
                    <VisualEditorInput {...args} keyframesState="isKeyframe" isPort={false}>
                        <TextInput type="text" value="Is keyframe" placeholder="Enter text" />
                    </VisualEditorInput>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Port States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput {...args} keyframesState="noKeyframes" isPort={true}>
                        <TextInput type="text" value="Port, no keyframes" placeholder="Enter text" />
                    </VisualEditorInput>
                    <VisualEditorInput {...args} keyframesState="hasKeyframes" isPort={true}>
                        <TextInput type="text" value="Port, has keyframes" placeholder="Enter text" />
                    </VisualEditorInput>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Number Input</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <VisualEditorInput {...args} keyframesState="noKeyframes" isPort={false}>
                        <NumberWithUnitsInput
                            value="100"
                            units="px"
                            availableUnits={['px', '%', 'em']}
                            placeholder="Enter value"
                        />
                    </VisualEditorInput>
                    <VisualEditorInput {...args} keyframesState="hasKeyframes" isPort={true}>
                        <NumberWithUnitsInput
                            value="50"
                            units="%"
                            availableUnits={['px', '%', 'em']}
                            placeholder="Enter value"
                        />
                    </VisualEditorInput>
                </div>
            </div>
        </div>
    ),
    args: {
        onToggleKeyframe: fn() as () => void,
        onTogglePort: fn() as () => void,
    },
};
