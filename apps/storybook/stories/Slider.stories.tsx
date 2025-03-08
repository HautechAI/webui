import { useState } from 'react';
import { Slider } from '../../../components/Slider/src';

export default {
    title: 'Data Display/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = () => {
    const [value, setValue] = useState(5);

    return <Slider min={0} max={10} step={1} value={value} onChange={setValue} />;
};
