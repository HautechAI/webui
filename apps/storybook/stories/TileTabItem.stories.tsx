import { fn } from '@storybook/test';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { TileTabItem } from '../../../components/TileTabItem/src';

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
        onClick: fn() as any,
    },
};
