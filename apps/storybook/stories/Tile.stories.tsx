import { PlaceholderSmall } from '../../../components/Icon/src';
import { Tile } from '../../../components/Tile/src';
import Shirt from '../../../assets/shirt.png';

export default {
    title: 'Data Display/Tile',
    component: Tile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export const Main = {
    args: {},
};

export const WithIcon = {
    args: {
        icon: <PlaceholderSmall />,
    },
};

export const WithImage = {
    args: {
        image: Shirt,
    },
};

export const Selected = {
    args: {
        image: Shirt,
        selected: true,
    },
};
