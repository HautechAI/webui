import { fn } from '@storybook/test';

import { ImageInput } from '../../../components/ImageInput/src';

export default {
    title: 'Input/ImageInput',
    component: ImageInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void },
};

export const Main = {
    args: {},
};
