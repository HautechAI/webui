import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Box } from '../../../components/Box/src';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { NumberWithUnitsInput, type NumberWithUnitsInputProps } from '../../../components/NumberWithUnitsInput/src';

export default {
    title: 'Input/NumberWithUnitsInput',
    component: NumberWithUnitsInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        units: { control: 'text' },
        availableUnits: { control: 'object' },
        placeholder: { control: 'text' },
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
        disableHoverControls: { control: 'boolean' },
    },
    args: {
        value: '100',
        units: 'px',
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        placeholder: 'Enter value',
        variation: 'filled',
        size: 'medium',
        hasError: false,
        disabled: false,
        disableHoverControls: false,
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
        onToggleWorkflow: fn() as () => void,
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

export const Small = {
    args: {
        size: 'small' as const,
        value: '50',
        units: '%',
    },
};

export const Outlined = {
    args: {
        variation: 'outlined' as const,
        value: '200',
        units: 'em',
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
        units: 'vh',
    },
};

export const DisabledHoverControls = {
    args: {
        disableHoverControls: true,
        value: '150',
        units: 'rem',
    },
};

export const DifferentUnits = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <NumberWithUnitsInput
                value="100"
                units="px"
                availableUnits={['px', '%', 'em', 'rem']}
                placeholder="Pixels"
                onChange={fn()}
                onChangeUnits={fn()}
                onToggleWorkflow={fn()}
            />
            <NumberWithUnitsInput
                value="50"
                units="%"
                availableUnits={['%', 'px']}
                placeholder="Percentage"
                onChange={fn()}
                onChangeUnits={fn()}
                onToggleWorkflow={fn()}
            />
            <NumberWithUnitsInput
                value="1.5"
                units="rem"
                availableUnits={['rem', 'em', 'px']}
                placeholder="Relative units"
                onChange={fn()}
                onChangeUnits={fn()}
                onToggleWorkflow={fn()}
            />
        </div>
    ),
    args: {},
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('100');
            const [units, setUnits] = useState('px');

            const availableUnits = ['px', '%', 'em', 'rem', 'vh', 'vw'];

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <NumberWithUnitsInput
                        value={value}
                        units={units}
                        availableUnits={availableUnits}
                        onChange={setValue}
                        onChangeUnits={setUnits}
                        onToggleWorkflow={() => fn()()}
                        placeholder="Enter value"
                        leadingIcon={<PlaceholderIcon />}
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: {value}</div>
                        <div>Units: {units}</div>
                    </div>
                </div>
            );
        };

        return <InteractiveComponent />;
    },
    args: {},
};

export const AllVariations = {
    render: (args: NumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Sizes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <NumberWithUnitsInput {...args} size="medium" value="100" units="px" />
                    <NumberWithUnitsInput {...args} size="small" value="50" units="%" />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Variations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <NumberWithUnitsInput {...args} variation="filled" value="200" units="em" />
                    <NumberWithUnitsInput {...args} variation="outlined" value="1.5" units="rem" />
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <NumberWithUnitsInput {...args} value="300" units="vh" />
                    <NumberWithUnitsInput {...args} value="invalid" units="px" hasError={true} />
                    <NumberWithUnitsInput {...args} value="250" units="vw" disabled={true} />
                    <NumberWithUnitsInput {...args} value="150" units="rem" disableHoverControls={true} />
                </div>
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        leadingIcon: <PlaceholderIcon />,
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
        onToggleWorkflow: fn() as () => void,
    },
};
