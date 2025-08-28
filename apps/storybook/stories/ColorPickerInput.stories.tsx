import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Box } from '../../../components/Box/src';
import ColorPickerInput from '../../../components/ColorPickerInput/src';
import { IconButton } from '../../../components/IconButton/src';
import { PlaceholderIcon } from '../../../components/Icon/src';

export default {
    title: 'Input/ColorPickerInput',
    component: ColorPickerInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        alphaEnabled: {
            control: 'boolean',
            description: 'Whether to enable alpha channel support',
        },
        size: {
            control: { type: 'radio' },
            options: ['medium', 'small'],
            description: 'Input size',
        },
        popoverDirection: {
            control: 'object',
            description: 'Popover positioning directions',
        },
    },
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
        onColorChange: fn() as (color: string) => void,
        placeholder: 'Select a color',
        alphaEnabled: false,
        size: 'medium',
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Default = () => {
    const [color, setColor] = useState('#FF5733');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            placeholder="Select a color"
        />
    );
};

export const WithAlpha = () => {
    const [color, setColor] = useState('#FF5733CC');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            alphaEnabled={true}
            placeholder="Color with alpha"
        />
    );
};

export const SmallSize = () => {
    const [color, setColor] = useState('#00FF88');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            size="small"
            placeholder="Small color picker"
        />
    );
};

export const PopoverDirections = () => {
    const [color1, setColor1] = useState('#FF0066');
    const [color2, setColor2] = useState('#0066FF');
    const [color3, setColor3] = useState('#66FF00');
    const [color4, setColor4] = useState('#FF6600');

    return (
        <Box style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
            <ColorPickerInput
                value={color1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor1(e.target.value)}
                onColorChange={(color: string) => setColor1(color)}
                popoverDirection={['bottom']}
                placeholder="Bottom popover"
            />
            <ColorPickerInput
                value={color2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor2(e.target.value)}
                onColorChange={(color: string) => setColor2(color)}
                popoverDirection={['top']}
                placeholder="Top popover"
            />
            <ColorPickerInput
                value={color3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor3(e.target.value)}
                onColorChange={(color: string) => setColor3(color)}
                popoverDirection={['right']}
                placeholder="Right popover"
            />
            <ColorPickerInput
                value={color4}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor4(e.target.value)}
                onColorChange={(color: string) => setColor4(color)}
                popoverDirection={['left']}
                placeholder="Left popover"
            />
        </Box>
    );
};

export const DifferentColors = () => {
    const [colors, setColors] = useState([
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
    ]);

    const updateColor = (index: number, newColor: string) => {
        const newColors = [...colors];
        newColors[index] = newColor;
        setColors(newColors);
    };

    return (
        <Box style={{ display: 'grid', gap: '12px', gridTemplateColumns: '1fr 1fr' }}>
            {colors.map((color, index) => (
                <ColorPickerInput
                    key={index}
                    value={color}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateColor(index, e.target.value)}
                    onColorChange={(newColor: string) => updateColor(index, newColor)}
                    placeholder={`Color ${index + 1}`}
                />
            ))}
        </Box>
    );
};

export const Variations = () => {
    const [filledColor, setFilledColor] = useState('#8B5CF6');
    const [outlinedColor, setOutlinedColor] = useState('#10B981');

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ColorPickerInput
                value={filledColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilledColor(e.target.value)}
                onColorChange={(color: string) => setFilledColor(color)}
                variation="filled"
                placeholder="Filled variation"
            />
            <ColorPickerInput
                value={outlinedColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOutlinedColor(e.target.value)}
                onColorChange={(color: string) => setOutlinedColor(color)}
                variation="outlined"
                placeholder="Outlined variation"
            />
        </Box>
    );
};

export const WithHoverControls = () => {
    const [color, setColor] = useState('#E11D48');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            placeholder="Color picker with hover controls"
            hoverControls={
                <>
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                </>
            }
        />
    );
};

export const WithHoverControlsSmall = () => {
    const [color, setColor] = useState('#059669');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            size="small"
            placeholder="Small color picker with controls"
            hoverControls={
                <>
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                </>
            }
        />
    );
};

export const WithHoverControlsAndAlpha = () => {
    const [color, setColor] = useState('#F59E0BCC');

    return (
        <ColorPickerInput
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            onColorChange={(color: string) => setColor(color)}
            alphaEnabled={true}
            placeholder="Color picker with alpha and controls"
            hoverControls={
                <>
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                    <IconButton variant="flat" icon={<PlaceholderIcon />} size="xsmall" />
                </>
            }
        />
    );
};
