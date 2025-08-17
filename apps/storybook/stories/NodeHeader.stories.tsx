import React from 'react';
import { NodeHeader } from '../../../components/NodeHeader/src';
import { Badge } from '../../../components/Badge/src';

const PlaceholderIcon = () => (
    <div
        style={{
            width: '16px',
            height: '16px',
            background: '#656565',
            borderRadius: '2px',
        }}
    />
);

export default {
    title: 'Node/NodeHeader',
    component: NodeHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Basic = {
    args: {
        label: 'Node Name',
    },
};

export const WithIcon = {
    args: {
        label: 'Node Name',
        icon: <PlaceholderIcon />,
    },
};

export const WithBadge = {
    args: {
        label: 'Node Name',
        badge: <Badge label="Failed" color="error" />,
    },
};

export const Complete = {
    args: {
        label: 'Node Name',
        icon: <PlaceholderIcon />,
        badge: <Badge label="Success" color="success" />,
    },
};
