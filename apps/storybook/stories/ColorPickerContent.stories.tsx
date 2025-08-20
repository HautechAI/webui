import { useState } from 'react';
import ColorPickerContent, { HSVColor } from '../../../components/ColorPickerContent/src';

export default {
    title: 'Input/ColorPickerContent',
    component: ColorPickerContent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = () => {
    const [color, setColor] = useState<HSVColor>({ h: 0, s: 100, v: 100, a: 1 });

    return <ColorPickerContent value={color} onChange={setColor} />;
};

export const WithoutAlpha = () => {
    const [color, setColor] = useState<HSVColor>({ h: 240, s: 80, v: 90, a: 1 });

    return <ColorPickerContent value={color} onChange={setColor} withAlpha={false} />;
};

export const DifferentColors = () => {
    const [redColor, setRedColor] = useState<HSVColor>({ h: 0, s: 100, v: 100, a: 1 });
    const [greenColor, setGreenColor] = useState<HSVColor>({ h: 120, s: 100, v: 80, a: 0.7 });
    const [blueColor, setBlueColor] = useState<HSVColor>({ h: 240, s: 60, v: 90, a: 0.5 });

    return (
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <h3>Red Color</h3>
                <ColorPickerContent value={redColor} onChange={setRedColor} />
            </div>
            <div>
                <h3>Green Color</h3>
                <ColorPickerContent value={greenColor} onChange={setGreenColor} />
            </div>
            <div>
                <h3>Blue Color (No Alpha)</h3>
                <ColorPickerContent value={blueColor} onChange={setBlueColor} withAlpha={false} />
            </div>
        </div>
    );
};
