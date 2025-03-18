import { fn } from '@storybook/test';
import { Switch } from '../../../components/Switch/src';
import { SwitchProps } from '../../../components/Switch/src';

export default {
    title: 'Input/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        disabled: false,
    },
};

export const Uncontrolled = {
    args: {},
};

export const WithLabel = {
    args: {
        label: 'Label',
    },
};

export const Locked = {
    args: {
        label: 'Label',
        locked: true,
        onLockedClick: fn() as any,
    },
};

export const Checked = {
    args: {
        checked: true,
    },
};

export const Unchecked = {
    args: {
        checked: false,
    },
};
