import { fn } from '@storybook/test';

import { Button } from '../../../components/Button/src';
import { UploadIcon } from '../../../components/Icon/src';

export default {
    title: 'Input/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() as any },
};

export const PrimaryMedium = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};

export const WithLeadingIcon = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
        leadingIcon: <UploadIcon size={20} />,
    },
};

export const WithTrailingIcon = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
        trailingIcon: <UploadIcon size={20} />,
    },
};

export const PrimarySmall = {
    args: {
        hierarchy: 'primary',
        size: 'small',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};

export const SecondaryMedium = {
    args: {
        hierarchy: 'secondary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};
export const SecondarySmall = {
    args: {
        hierarchy: 'secondary',
        size: 'small',
        variant: 'filled',
        disabled: false,
        label: 'Button',
    },
};

export const OutlinedPrimaryMedium = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};
export const OutlinedPrimarySmall = {
    args: {
        hierarchy: 'primary',
        size: 'small',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};

export const OutlinedSecondaryMedium = {
    args: {
        hierarchy: 'secondary',
        size: 'medium',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};
export const OutlinedSecondarySmall = {
    args: {
        hierarchy: 'secondary',
        size: 'small',
        variant: 'outlined',
        disabled: false,
        label: 'Button',
    },
};

export const Stretch = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        variant: 'filled',
        disabled: false,
        label: 'Button',
        stretch: true,
    },
    decorators: [
        (Story: any) => (
            <div style={{ display: 'flex', width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const WithId = {
    args: {
        id: 'test-button',
        label: 'Button',
    },
};
