import { useState } from 'react';
import Shirt from '../../../assets/shirt.png';
import { HoverControls, type HoverControlsProps } from '../../../components/HoverControls/src';
import { Tile } from '../../../components/Tile/src';

export default {
    title: 'Interaction/HoverControls',
    component: HoverControls,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export const Main = {
    render: (args: HoverControlsProps) => {
        const [selected, setSelected] = useState(false);
        return <HoverControls {...args} selected={selected} onChangeSelected={setSelected} />;
    },
    args: {
        children: <Tile width={200} src={Shirt} />,
    },
};

export const Selected = {
    args: {
        children: <Tile width={200} src={Shirt} />,
        selected: true,
    },
};

export const HoverDisabled = {
    args: {
        children: <Tile width={200} src={Shirt} />,
        hoverDisabled: true,
    },
};
