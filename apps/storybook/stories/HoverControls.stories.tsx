import { useState } from 'react';
import Shirt from '../../../assets/shirt.png';
import { HoverControls } from '../../../components/HoverControls/src';
import { Tile } from '../../../components/Tile/src';

export default {
    title: 'Interaction/HoverControls',
    component: HoverControls,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story: React.ComponentType<any>, { args }: any) => {
            const [selected, setSelected] = useState(false);
            return (
                <>
                    <Story args={{ ...args, selected: selected, onChangeSelected: setSelected }} />
                </>
            );
        },
    ],
};

export const Main = {
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
