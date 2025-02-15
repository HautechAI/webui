import { fn } from '@storybook/test';

import { TextButton } from '../../../components/TextButton/src';

export default {
    title: 'Input/TextButton',
    component: TextButton,
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
        disabled: false,
        label: 'TextButton',
    },
};
export const PrimarySmall = {
    args: {
        hierarchy: 'primary',
        size: 'small',
        disabled: false,
        label: 'TextButton',
    },
};

export const SecondaryMedium = {
    args: {
        hierarchy: 'secondary',
        size: 'medium',
        disabled: false,
        label: 'TextButton',
    },
};
export const SecondarySmall = {
    args: {
        hierarchy: 'secondary',
        size: 'small',
        disabled: false,
        label: 'TextButton',
    },
};

export const SecondaryXSmall = {
    args: {
        hierarchy: 'secondary',
        size: 'xSmall',
        disabled: false,
        label: 'TextButton',
    },
};

export const LinkSmall = {
    args: {
        hierarchy: 'link',
        size: 'small',
        disabled: false,
        label: 'TextButton',
    },
};

export const LinkXSmall = {
    args: {
        hierarchy: 'link',
        size: 'xSmall',
        disabled: false,
        label: 'TextButton',
    },
};
