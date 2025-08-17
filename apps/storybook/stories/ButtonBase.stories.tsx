import { fn } from '@storybook/test';

import { ButtonBase } from '../../../components/ButtonBase/src';

export default {
    title: 'Input/ButtonBase',
    component: ButtonBase,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() as React.MouseEventHandler<HTMLButtonElement> },
};

export const Main = {
    args: {
        children: <>Some content</>,
    },
};
