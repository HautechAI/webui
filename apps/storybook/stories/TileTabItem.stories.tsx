import { fn } from '@storybook/test';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TileTabItem } from '../../../components/TileTabItem/src';
import Desert from '../../../assets/desert.png';
import Model from '../../../assets/model.mp4';

export default {
    title: 'Tabs/TileTabItem',
    component: TileTabItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export const Main = {
    args: {
        icon: <PlaceholderIcon size={20} />,
        label: 'Label',
        value: 'tab1',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithImage = {
    args: {
        image: Desert,
        label: 'Label',
        value: 'tab1',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithVideo = {
    args: {
        video: Model,
        label: 'Label',
        value: 'tab1',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};
