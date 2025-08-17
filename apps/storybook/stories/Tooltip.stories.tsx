import React from 'react';
import { fn } from '@storybook/test';

import { Box } from '../../../components/Box/src';
import { Tooltip } from '../../../components/Tooltip/src';

export default {
    title: 'Data Display/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        text: 'This is a tooltip. Tooltips are used to describe or identify an element.',
        children: <div>This is a hoverable item</div>,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={150}>
                <Story />
            </Box>
        ),
    ],
};

export const Small = {
    args: {},
};

export const SmallLeft = {
    args: {
        position: 'left',
    },
};

export const SmallRight = {
    args: {
        position: 'right',
    },
};

export const SmallBottom = {
    args: {
        position: 'bottom',
    },
};

export const Medium = {
    args: {
        size: 'medium',
    },
};

export const MediumWithLink = {
    args: {
        size: 'medium',
        buttonLabel: 'Label',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};
