import React from 'react';
import { NodePort } from '../../../components/NodePort/src';

export default {
    title: 'Node/NodePort',
    component: NodePort,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const InputPort = {
    args: {
        type: 'input',
        label: 'Input Port',
    },
};

export const OutputPort = {
    args: {
        type: 'output',
        label: 'Output Port',
    },
};

export const InputPortWithoutLabel = {
    args: {
        type: 'input',
    },
};

export const OutputPortWithoutLabel = {
    args: {
        type: 'output',
    },
};