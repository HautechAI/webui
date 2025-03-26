import { PlaceholderIcon } from '../../../components/Icon/src';
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
        icon: <PlaceholderIcon size={20} />,
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

export const Width100Percent = {
    args: {
        width: '100%',
        aspectRatio: 3 / 2,
    },
    decorators: [
        (Story: any) => (
            <div style={{ width: '300px', border: 'dashed red 1px' }}>
                <Story />
            </div>
        ),
    ],
};

export const WithImgComponent = {
    args: {
        image: Desert,
        aspectRatio: 3 / 2,
        width: '50%',
        component: 'img',
    },
};
