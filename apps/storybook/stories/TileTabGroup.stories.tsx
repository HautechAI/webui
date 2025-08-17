import { fn } from '@storybook/test';
import { BackgroundIcon, ModelIcon, PoseIcon } from '../../../components/Icon/src';
import { TileTabGroup, type TileTabGroupProps } from '../../../components/TileTabGroup/src';
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
        onSelect: fn() as (value: string) => void,
    },
};

export const Main = (args: TileTabGroupProps) => {
    const [selected, setSelected] = useState('');
    return (
        <TileTabGroup {...args} selected={selected} onSelect={setSelected}>
            <TileTabItem value="model" label="Model" icon={<ModelIcon />} />
            <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />
            <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />
        </TileTabGroup>
    );
};
Main.args = {} as Partial<TileTabGroupProps>;

export const NoWrap = (args: TileTabGroupProps) => {
    const [selected, setSelected] = useState('');
    return (
        <div style={{ width: '300px', border: 'dashed black 1px' }}>
            <TileTabGroup {...args} selected={selected} onSelect={setSelected}>
                <TileTabItem value="model" label="Model" icon={<ModelIcon />} />
                <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />
                <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />
            </TileTabGroup>
        </div>
    );
};
NoWrap.args = {} as Partial<TileTabGroupProps>;

export const Wrap = (args: TileTabGroupProps) => {
    const [selected, setSelected] = useState('');
    return (
        <div style={{ width: '300px', border: 'dashed black 1px' }}>
            <TileTabGroup {...args} selected={selected} onSelect={setSelected} wrap>
                <TileTabItem value="model" label="Model" icon={<ModelIcon />} />
                <TileTabItem value="background" label="Background" icon={<BackgroundIcon />} />
                <TileTabItem value="pose" label="Pose" icon={<PoseIcon />} />
            </TileTabGroup>
        </div>
    );
};
Wrap.args = {} as Partial<TileTabGroupProps>;
