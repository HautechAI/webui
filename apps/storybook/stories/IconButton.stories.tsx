import { fn } from '@storybook/test';

import { IconButton } from '../../../components/IconButton/src';
import { Burger } from '../../../components/Icon/src';

export default {
    title: 'Input/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() as any },
};

export const FilledMedium = {
    args: {
        variant: 'filled',
        size: 'medium',
        icon: <Burger />,
    },
};

export const FilledSmall = {
    args: {
        variant: 'filled',
        size: 'small',
        icon: <Burger size={20} />,
    },
};

export const OutlinedMedium = {
    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <Burger />,
    },
};

export const OutlinedSmall = {
    args: {
        variant: 'outlined',
        size: 'small',
        icon: <Burger size={20} />,
    },
};

export const FlatMedium = {
    args: {
        variant: 'flat',
        size: 'medium',
        icon: <Burger />,
    },
};

export const FlatSmall = {
    args: {
        variant: 'flat',
        size: 'small',
        icon: <Burger size={20} />,
    },
};

export const FilledMediumDisabled = {
    args: {
        variant: 'filled',
        size: 'medium',
        disabled: true,
        icon: <Burger />,
    },
};
export const OutlinedMediumDisabled = {
    args: {
        variant: 'outlined',
        size: 'medium',
        disabled: true,
        icon: <Burger />,
    },
};
export const FlatMediumDisabled = {
    args: {
        variant: 'flat',
        size: 'medium',
        disabled: true,
        icon: <Burger />,
    },
};
