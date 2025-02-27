import { Checkbox } from '../../../components/Checkbox/src';

export default {
    title: 'Input/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export const Uncontroller = {
    args: {},
};

export const Unchecked = {
    args: {
        checked: false
    },
};

export const Checked = {
    args: {
        checked: true,
    },
};
