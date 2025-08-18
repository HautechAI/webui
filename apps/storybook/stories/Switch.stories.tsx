import { Switch } from '../../../components/Switch/src';

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
