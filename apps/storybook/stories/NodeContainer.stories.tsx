import React from 'react';
import { NodeContainer } from '../../../components/NodeContainer/src';
import { NodeHeader } from '../../../components/NodeHeader/src';
import { NodeContent } from '../../../components/NodeContent/src';
import { NodeFooter } from '../../../components/NodeFooter/src';
import { NodePort } from '../../../components/NodePort/src';
import { Typography } from '../../../components/Typography/src';
import { Badge } from '../../../components/Badge/src';
import { BulbIcon } from '../../../components/Icon/src';

export default {
    title: 'Node/NodeContainer',
    component: NodeContainer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const HeaderAndFooter = {
    args: {
        children: (
            <>
                <NodeHeader label="Node Name" />
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

export const FullNode = {
    args: {
        children: (
            <>
                <NodeHeader 
                    label="Node Name"
                    badge={<Badge label="Success" color="success" />}
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

export const WithIcon = {
    args: {
        children: (
            <>
                <NodeHeader 
                    icon={<BulbIcon />}
                    label="Node with Icon"
                />
                <NodeFooter
                    inputPorts={
                        <>
                            <NodePort type="input" label="Input 1" />
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

export const WithBadgeOnly = {
    args: {
        children: (
            <>
                <NodeHeader 
                    label="Node with Badge"
                    badge={<Badge label="Error" color="error" />}
                />
                <NodeFooter
                    inputPorts={
                        <>
                            <NodePort type="input" label="Input 1" />
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

export const WithIconAndBadge = {
    args: {
        children: (
            <>
                <NodeHeader 
                    icon={<BulbIcon />}
                    label="Complete Node Header"
                    badge={<Badge label="Info" color="info" />}
                />
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

export const LongTitle = {
    args: {
        children: (
            <>
                <NodeHeader 
                    icon={<BulbIcon />}
                    label="This is a very long node name that should be truncated with ellipsis"
                    badge={<Badge label="Status" color="info" />}
                />
                <NodeFooter
                    inputPorts={
                        <>
                            <NodePort type="input" label="Input 1" />
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