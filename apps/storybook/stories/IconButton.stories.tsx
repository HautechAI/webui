import { fn } from '@storybook/test';

import { IconButton } from '../../../components/IconButton/src';
import { BurgerMedium, BurgerSmall } from '../../../components/Icon/src';

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
        icon: <BurgerMedium />,
    },
};

export const FilledSmall = {
    args: {
        variant: 'filled',
        size: 'small',
        icon: <BurgerSmall />,
    },
};

export const OutlinedMedium = {
    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <BurgerMedium />,
    },
};

export const OutlinedSmall = {
    args: {
        variant: 'outlined',
        size: 'small',
        icon: <BurgerSmall />,
    },
};

export const FlatMedium = {
    args: {
        variant: 'flat',
        size: 'medium',
        icon: <BurgerMedium />,
    },
};

export const FlatSmall = {
    args: {
        variant: 'flat',
        size: 'small',
        icon: <BurgerSmall />,
    },
};

export const FilledMediumDisabled = {
    args: {
        variant: 'filled',
        size: 'medium',
        disabled: true,
        icon: <BurgerMedium />,
    },
};
export const OutlinedMediumDisabled = {
    args: {
        variant: 'outlined',
        size: 'medium',
        disabled: true,
        icon: <BurgerMedium />,
    },
};
export const FlatMediumDisabled = {
    args: {
        variant: 'flat',
        size: 'medium',
        disabled: true,
        icon: <BurgerMedium />,
    },
};
