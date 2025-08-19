import { fn } from '@storybook/test';

import { IconButton } from '../../../components/IconButton/src';
import { BurgerIcon } from '../../../components/Icon/src';

export default {
    title: 'Input/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() as React.MouseEventHandler<HTMLButtonElement> },
};

export const FilledMedium = {
    args: {
        variant: 'filled',
        size: 'medium',
        icon: <BurgerIcon />,
    },
};

export const FilledSmall = {
    args: {
        variant: 'filled',
        size: 'small',
        icon: <BurgerIcon size={20} />,
    },
};

export const OutlinedMedium = {
    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <BurgerIcon />,
    },
};

export const OutlinedSmall = {
    args: {
        variant: 'outlined',
        size: 'small',
        icon: <BurgerIcon size={20} />,
    },
};

export const FlatMedium = {
    args: {
        variant: 'flat',
        size: 'medium',
        icon: <BurgerIcon />,
    },
};

export const FlatSmall = {
    args: {
        variant: 'flat',
        size: 'small',
        icon: <BurgerIcon size={20} />,
    },
};

export const FilledMediumDisabled = {
    args: {
        variant: 'filled',
        size: 'medium',
        disabled: true,
        icon: <BurgerIcon />,
    },
};
export const OutlinedMediumDisabled = {
    args: {
        variant: 'outlined',
        size: 'medium',
        disabled: true,
        icon: <BurgerIcon />,
    },
};
export const FlatMediumDisabled = {
    args: {
        variant: 'flat',
        size: 'medium',
        disabled: true,
        icon: <BurgerIcon />,
    },
};
