import { fn } from '@storybook/test';

import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { MenuItem } from '../../../components/MenuItem/src';

export default {
    title: 'Data Display/MenuItem',
    component: MenuItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        trailingIcon: <PlaceholderIcon />,
        leadingIcon: <PlaceholderIcon />,
        onClick: fn() as any,
    },
    decorators: [
        (Story: any) => (
            <Box width={150}>
                <Story />
            </Box>
        ),
    ],
};

export const MainSmall = {
    args: {
        label: 'Label',
        type: 'main',
        size: 'small',
    },
};

export const MainMedium = {
    args: {
        label: 'Label',
        type: 'main',
        size: 'medium',
    },
};

export const MainSmallSelected = {
    args: {
        label: 'Label',
        type: 'main',
        isSelected: true,
    },
};

export const MainMediumSelected = {
    args: {
        label: 'Label',
        type: 'main',
        isSelected: true,
        size: 'medium',
    },
};

export const CTA = {
    args: {
        label: 'Label',
        type: 'CTA',
    },
};

export const CTASelected = {
    args: {
        label: 'Label',
        type: 'CTA',
        isSelected: true,
    },
};
