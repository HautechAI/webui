import { Typography } from '../src';

const TEXT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut placerat sapien. Nulla massa lacus, porta non lobortis non, venenatis eget sapien.';

export default {
    title: 'Data Display/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Text4 = {
    args: {
        variant: 'Text4',
        children: TEXT,
    },
};

export const Text5 = {
    args: {
        variant: 'Text5',
        children: TEXT,
    },
};
