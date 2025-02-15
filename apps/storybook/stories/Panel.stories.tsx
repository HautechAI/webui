import { Panel } from '../../../components/Panel/src';
import { DataItem } from '../../../components/DataItem/src';

export default {
    title: 'Data Display/Panel',
    component: Panel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Mid = {
    args: {
        children: <DataItem label="Current plan" value="Basic" />,
    },
};

export const Low = {
    args: {
        hierarchy: 'low',
        children: <DataItem label="Current plan" value="Basic" />,
    },
};
