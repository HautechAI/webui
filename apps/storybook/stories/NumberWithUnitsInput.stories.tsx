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
        variation: 'filled',
        size: 'small',
        placeholder: 'Enter value',
        onChange: fn() as (value: string) => void,
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

export const Default = {
    args: {},
};

export const WithLeadingIcon = {
    args: {
        leadingIcon: <PlaceholderIcon />,
    },
};

export const MediumSize = {
    args: {
        size: 'medium',
        value: '150',
        units: '%',
    },
};

export const OutlinedVariation = {
    args: {
        variation: 'outlined',
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
        units: 'px',
    },
};

export const EmptyWithPlaceholder = {
    args: {
        value: '',
        placeholder: 'Enter a value',
        units: 'px',
    },
};

export const LongUnitNames = {
    args: {
        value: '42',
        units: 'rem',
        availableUnits: ['px', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax'],
    },
};

// Interactive story with state management
export const Interactive = {
    render: () => {
        const InteractiveComponent = () => {
            const [value, setValue] = useState('100');
            const [units, setUnits] = useState('px');
            const availableUnits = ['px', '%', 'em', 'rem', 'vh', 'vw', 'vmin', 'vmax'];

            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                    <NumberWithUnitsInput
                        value={value}
                        units={units}
                        availableUnits={availableUnits}
                        onChange={setValue}
                        onChangeUnits={setUnits}
                        leadingIcon={<PlaceholderIcon />}
                        placeholder="Enter value"
                    />

                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                        <div>Value: "{value}"</div>
                        <div>Units: {units}</div>
                        <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            Hover over the component to see the units dropdown
                        </div>
                    </div>
                </div>
            );
        };

        return <InteractiveComponent />;
    },
    args: {},
};

export const AllSizes = {
    render: (args: NumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Small Size</h3>
                <NumberWithUnitsInput {...args} size="small" value="100" units="px" leadingIcon={<PlaceholderIcon />} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Medium Size</h3>
                <NumberWithUnitsInput {...args} size="medium" value="150" units="%" leadingIcon={<PlaceholderIcon />} />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const AllVariations = {
    render: (args: NumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Filled Variation</h3>
                <NumberWithUnitsInput {...args} variation="filled" value="100" units="px" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Outlined Variation</h3>
                <NumberWithUnitsInput {...args} variation="outlined" value="150" units="%" />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};

export const AllStates = {
    render: (args: NumberWithUnitsInputProps) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Normal</h3>
                <NumberWithUnitsInput {...args} value="100" units="px" />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>With Leading Icon</h3>
                <NumberWithUnitsInput {...args} value="150" units="%" leadingIcon={<PlaceholderIcon />} />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Error State</h3>
                <NumberWithUnitsInput {...args} value="invalid" units="em" hasError />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Disabled</h3>
                <NumberWithUnitsInput {...args} value="200" units="rem" disabled />
            </div>
            <div>
                <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Empty with Placeholder</h3>
                <NumberWithUnitsInput {...args} value="" units="px" placeholder="Enter a numeric value" />
            </div>
        </div>
    ),
    args: {
        availableUnits: ['px', '%', 'em', 'rem', 'vh', 'vw'],
        onChange: fn() as (value: string) => void,
        onChangeUnits: fn() as (units: string) => void,
    },
};
