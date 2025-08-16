import { fn } from '@storybook/test';

import { ToggleIconButton } from '../../../components/ToggleIconButton/src';
import { BurgerIcon, StarIcon, PlayIcon } from '../../../components/Icon/src';

export default {
    title: 'Input/ToggleIconButton',
    component: ToggleIconButton,
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
        icon: <StarIcon />,
        checked: false,
    },
};

export const FilledMediumChecked = {
    args: {
        variant: 'filled',
        size: 'medium',
        icon: <StarIcon />,
        checked: true,
    },
};

export const FilledSmall = {
    args: {
        variant: 'filled',
        size: 'small',
        icon: <StarIcon size={20} />,
        checked: false,
    },
};

export const FilledXSmall = {
    args: {
        variant: 'filled',
        size: 'xsmall',
        icon: <StarIcon size={16} />,
        checked: false,
    },
};

export const OutlinedMedium = {
    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <PlayIcon />,
        checked: false,
    },
};

export const OutlinedMediumChecked = {
    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <PlayIcon />,
        checked: true,
    },
};

export const FlatMedium = {
    args: {
        variant: 'flat',
        size: 'medium',
        icon: <BurgerIcon />,
        checked: false,
    },
};

export const FlatMediumChecked = {
    args: {
        variant: 'flat',
        size: 'medium',
        icon: <BurgerIcon />,
        checked: true,
    },
};

export const PrimaryMedium = {
    args: {
        variant: 'primary',
        size: 'medium',
        icon: <StarIcon />,
        checked: false,
    },
};

export const PrimaryMediumChecked = {
    args: {
        variant: 'primary',
        size: 'medium',
        icon: <StarIcon />,
        checked: true,
    },
};

export const DisabledFilled = {
    args: {
        variant: 'filled',
        size: 'medium',
        disabled: true,
        icon: <StarIcon />,
        checked: false,
    },
};

export const DisabledPrimary = {
    args: {
        variant: 'primary',
        size: 'medium',
        disabled: true,
        icon: <StarIcon />,
        checked: true,
    },
};
