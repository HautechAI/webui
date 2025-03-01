import { fn } from '@storybook/test';

import { Card } from '../../../components/Card/src';
import Desert from '../../../assets/desert.png';

export default {
    title: 'Compositions/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onDownload: fn() as any },
};

export const Main = {
    args: {
        label: '35 min ago',
        image: Desert,
        width: 300,
        aspectRatio: 16 / 9,
    },
};
