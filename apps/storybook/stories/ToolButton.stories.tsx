import { fn } from '@storybook/test';

import { ToolButton } from '../../../components/ToolButton/src';
import { BurgerIcon } from '../../../components/Icon/src';

export default {
    title: 'Input/ToolButton',
    component: ToolButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() as any },
};

export const Default = {
    args: {
        selected: false,
        icon: <BurgerIcon />,
    },
};

export const Selected = {
    args: {
        selected: true,
        icon: <BurgerIcon />,
    },
};

export const DefaultDisabled = {
    args: {
        selected: false,
        disabled: true,
        icon: <BurgerIcon />,
    },
};

export const SelectedDisabled = {
    args: {
        selected: true,
        disabled: true,
        icon: <BurgerIcon />,
    },
};
