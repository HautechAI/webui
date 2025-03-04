import { fn } from '@storybook/test';
import { Background, Model, Pose } from '../../../components/Icon/src';
import { TileTabGroup, TileTabGroupProps } from '../../../components/TileTabGroup/src';
import { TileTabItem } from '../../../components/TileTabItem/src';
import { useState } from 'react';

export default {
    title: 'Tabs/TileTabGroup',
    component: TileTabGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onSelect: fn() as any,
    },
    decorators: [
        (Story: React.FC<any>, { args }: any) => {
            const [selected, setSelected] = useState('');
            return (
                <>
                    <Story args={{ ...args, selected: selected, onSelect: setSelected }} />
                </>
            );
        },
    ],
};

export const Main = {
    args: {
        children: [
            <TileTabItem value="model" label="Model" icon={<Model />} />,
            <TileTabItem value="background" label="Background" icon={<Background />} />,
            <TileTabItem value="pose" label="Pose" icon={<Pose />} />,
        ],
    },
};

export const Wrap = {
    args: {
        children: [
            <TileTabItem value="model" label="Model" icon={<Model />} />,
            <TileTabItem value="background" label="Background" icon={<Background />} />,
            <TileTabItem value="pose" label="Pose" icon={<Pose />} />,
        ],
    },
    decorators: [
        (Story: React.FC<any>, { args }: any) => {
            return (
                <div style={{ width: '300px', border: 'dashed black 1px' }}>
                    <Story />
                </div>
            );
        },
    ],
};
