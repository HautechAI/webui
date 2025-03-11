import { Panel } from '../../../components/Panel/src';
import { DataItem } from '../../../components/DataItem/src';

export default {
    title: 'Data Display/Panel',
    component: Panel as any,
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

export const MediumLow = {
    args: {
        hierarchy: 'low',
        children: <DataItem label="Current plan" value="Basic" />,
    },
};

export const MediumHigh = {
    args: {
        hierarchy: 'high',
        children: <DataItem label="Current plan" value="Basic" />,
    },
};

export const SmallLow = {
    args: {
        size: 'small',
        hierarchy: 'low',
        children: <DataItem label="Current plan" value="Basic" />,
    },
};

export const SmallHigh = {
    args: {
        size: 'small',
        hierarchy: 'high',
        children: <DataItem label="Current plan" value="Basic" />,
    },
};
