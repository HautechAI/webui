import { fn } from '@storybook/test';

import { Hint } from '../../../components/Hint/src';

export default {
    title: 'Data Display/Hint',
    component: Hint,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        position: 'right',
        hint: 'This is a tooltip. Tooltips are used to describe or identify an element.',
    },
};

export const Right = {
    args: {},
};
export const Left = {
    args: {
        position: 'left',
    },
};
export const Top = {
    args: {
        position: 'top',
    },
};
export const Bottom = {
    args: {
        position: 'bottom',
    },
};

export const WithLink = {
    args: {
        buttonLabel: 'Label',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};
