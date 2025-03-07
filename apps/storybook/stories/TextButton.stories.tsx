import { fn } from '@storybook/test';

import { TextButton } from '../../../components/TextButton/src';
import { UploadIcon } from '../../../components/Icon/src';

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

export const PrimaryMediumWithLeadingIcon = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        disabled: false,
        label: 'TextButton',
        leadingIcon: <UploadIcon size={20} />,
    },
};

export const PrimaryMediumWithTrailingIcon = {
    args: {
        hierarchy: 'primary',
        size: 'medium',
        disabled: false,
        label: 'TextButton',
        trailingIcon: <UploadIcon size={20} />,
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
        size: 'xsmall',
        disabled: false,
        label: 'TextButton',
    },
};
