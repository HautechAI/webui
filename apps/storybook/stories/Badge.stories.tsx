import { Badge } from '../../../components/Badge/src';

export default {
    title: 'Data Display/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const Success = {
    args: {
        color: 'success',
        label: 'Success',
    },
};

export const Error = {
    args: {
        color: 'error',
        label: 'Error',
    },
};

export const Warning = {
    args: {
        color: 'warning',
        label: 'Warning',
    },
};
