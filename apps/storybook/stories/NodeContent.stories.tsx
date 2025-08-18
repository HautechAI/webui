import React from 'react';
import { NodeContent } from '../../../components/NodeContent/src';
import { Typography } from '../../../components/Typography/src';

export default {
    title: 'Node/NodeContent',
    component: NodeContent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Basic = {
    args: {
        children: (
            <Typography variant="Body" color="layout.onSurface.secondary">
                Content placeholder
            </Typography>
        ),
    },
};

export const WithComplexContent = {
    args: {
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="LabelMediumEmphasized">Configuration</Typography>
                <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
                    This is some complex content that might include forms, inputs, or other components
                </Typography>
            </div>
        ),
    },
};
