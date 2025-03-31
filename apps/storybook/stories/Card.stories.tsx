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

export const Clickable = {
    args: {
        label: '35 min ago',
        image: Desert,
        width: 300,
        aspectRatio: 16 / 9,
        onClick: fn() as any,
    },
};

export const Link = {
    args: {
        label: '35 min ago',
        image: Desert,
        width: 300,
        aspectRatio: 16 / 9,
        href: '#',
    },
};

export const Img = {
    args: {
        label: '35 min ago',
        image: Desert,
        width: 300,
        aspectRatio: 16 / 9,
        tileComponent: 'img',
    },
};

export const FullWidth = {
    args: {
        label: '35 min ago',
        image: Desert,
        fullWidth: '100%',
        aspectRatio: 16 / 9,
        onClick: fn() as any,
    },
    decorators: [
        (Story: any) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
};
