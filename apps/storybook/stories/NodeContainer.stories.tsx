import React from 'react';
import { NodeContainer } from '../../../components/NodeContainer/src';
import { NodeHeader } from '../../../components/NodeHeader/src';
import { NodeContent } from '../../../components/NodeContent/src';
import { NodeFooter } from '../../../components/NodeFooter/src';
import { NodePort } from '../../../components/NodePort/src';
import { Typography } from '../../../components/Typography/src';
import { Badge } from '../../../components/Badge/src';

export default {
    title: 'Node/NodeContainer',
    component: NodeContainer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Empty = {
    args: {
        children: <div>Empty container</div>,
    },
};

export const WithHeader = {
    args: {
        children: (
            <NodeHeader 
                label="Node Name" 
            />
        ),
    },
};

export const WithContent = {
    args: {
        children: (
            <>
                <NodeHeader label="Node Name" />
                <NodeContent>
                    <Typography variant="Body" color="layout.onSurface.secondary">
                        Content placeholder
                    </Typography>
                </NodeContent>
            </>
        ),
    },
};

export const FullNode = {
    args: {
        children: (
            <>
                <NodeHeader 
                    label="Node Name"
                    badge={<Badge label="Success" variant="success" />}
                />
                <NodeContent>
                    <Typography variant="Body" color="layout.onSurface.secondary">
                        Content placeholder
                    </Typography>
                </NodeContent>
                <NodeFooter
                    inputPorts={
                        <>
                            <NodePort type="input" label="Input 1" />
                            <NodePort type="input" label="Input 2" />
                        </>
                    }
                    outputPorts={
                        <>
                            <NodePort type="output" label="Output 1" />
                        </>
                    }
                />
            </>
        ),
    },
};