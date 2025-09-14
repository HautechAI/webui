import { Logo } from '../../../components/Logo/src';

export default {
    title: 'Data Display/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: { type: 'select' },
            options: ['hautech', 'liana'],
        },
        variant: {
            control: { type: 'select' },
            options: ['full', 'icon'],
        },
    },
};

export const HautechFull = {
    args: {
        name: 'hautech',
        variant: 'full',
    },
};

export const HautechIcon = {
    args: {
        name: 'hautech',
        variant: 'icon',
    },
};

export const Liana = {
    args: {
        name: 'liana',
    },
};

// Backwards compatibility
export const Main = {
    args: {},
};

export const Icon = {
    args: {
        variant: 'icon',
    },
};
