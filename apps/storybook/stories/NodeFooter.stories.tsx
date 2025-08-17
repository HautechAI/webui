import React from 'react';
import { NodeFooter } from '../../../components/NodeFooter/src';
import { NodePort } from '../../../components/NodePort/src';

export default {
    title: 'Node/NodeFooter',
    component: NodeFooter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Empty = {
    args: {},
};

export const WithInputPorts = {
    args: {
        inputPorts: (
            <>
                <NodePort type="input" label="Input 1" />
                <NodePort type="input" label="Input 2" />
            </>
        ),
    },
};

export const WithOutputPorts = {
    args: {
        outputPorts: (
            <>
                <NodePort type="output" label="Output 1" />
            </>
        ),
    },
};

export const Complete = {
    args: {
        inputPorts: (
            <>
                <NodePort type="input" label="Input 1" />
                <NodePort type="input" label="Input 2" />
            </>
        ),
        outputPorts: (
            <>
                <NodePort type="output" label="Output 1" />
                <NodePort type="output" label="Output 2" />
            </>
        ),
    },
};
