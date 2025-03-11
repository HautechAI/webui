import { Progress } from '../../../components/Progress/src';

export default {
    title: 'Data Display/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {},
};

export const Size128 = {
    args: {
        size: 128,
    },
};

export const Size64 = {
    args: {
        size: 64,
    },
};

export const Size20 = {
    args: {
        size: 20,
    },
};
