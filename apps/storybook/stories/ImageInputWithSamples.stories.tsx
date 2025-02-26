import { fn } from '@storybook/test';

import Shirt from '../../../assets/shirt.png';
import { ImageInputWithSamples } from '../../../components/ImageInputWithSamples/src';
import { ButtonBase } from '../../../components/ButtonBase/src';
import { Tile } from '../../../components/Tile/src';

export default {
    title: 'Compositions/Image Input With Samples',
    component: ImageInputWithSamples,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onUpload: fn() as any, onSelectSample: fn() as any },
};

export const Main = {
    args: {
        samples: [
            {
                id: '1',
                image: Shirt,
            },
            {
                id: '2',
                image: Shirt,
            },
            {
                id: '3',
                image: Shirt,
            },
            {
                id: '4',
                image: Shirt,
            },
        ],
    },
};
