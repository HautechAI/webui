import { fn } from '@storybook/test';
import { BackgroundIcon, ModelIcon, PoseIcon } from '../../../components/Icon/src';
import { TileTabGroup } from '../../../components/TileTabGroup/src';
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
            <TileTabItem value="model" label="Model" icon={<ModelIcon />} />,
            <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />,
            <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />,
        ],
    },
};

export const NoWrap = {
    args: {
        children: [
            <TileTabItem value="model" label="Model" icon={<ModelIcon />} />,
            <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />,
            <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />,
        ],
    },
    decorators: [
        (Story: React.FC<any>, { args: _args }: any) => {
            return (
                <div style={{ width: '300px', border: 'dashed black 1px' }}>
                    <Story />
                </div>
            );
        },
    ],
};

export const Wrap = {
    args: {
        wrap: true,
        children: [
            <TileTabItem value="model" label="Model" icon={<ModelIcon />} />,
            <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />,
            <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />,
        ],
    },
    decorators: [
        (Story: React.FC<any>, { args: _args }: any) => {
            return (
                <div style={{ width: '300px', border: 'dashed black 1px' }}>
                    <Story />
                </div>
            );
        },
    ],
};
