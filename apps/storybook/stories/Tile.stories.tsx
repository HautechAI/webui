import { PlaceholderSmall } from '../../../components/Icon/src';
import { Tile } from '../../../components/Tile/src';
import Desert from '../../../assets/desert.png';

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
        image: Desert,
    },
};

export const Selected = {
    args: {
        image: Desert,
        selected: true,
    },
};

export const FixedWidthHeight = {
    args: {
        width: 200,
        height: 300,
    },
};

export const FixedWidthAspectRatio = {
    args: {
        width: 300,
        aspectRatio: 3 / 2,
    },
};

export const FixedHeightAspectRatio = {
    args: {
        height: 300,
        aspectRatio: 3 / 2,
    },
};
