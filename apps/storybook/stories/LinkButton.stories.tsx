import { fn } from '@storybook/test';

import { LinkButton } from '../../../components/LinkButton/src';
import { UploadSmall } from '../../../components/Icon/src';

export default {
    title: 'Input/LinkButton',
    component: LinkButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() as any },
};

export const LinkSmall = {
    args: {
        hierarchy: 'link',
        size: 'small',
        disabled: false,
        label: 'LinkButton',
    },
};

export const LinkSmallWithLeadingIcon = {
    args: {
        hierarchy: 'link',
        size: 'small',
        disabled: false,
        label: 'LinkButton',
        leadingIcon: <UploadSmall />,
    },
};

export const LinkSmallWithTrailingIcon = {
    args: {
        hierarchy: 'link',
        size: 'small',
        disabled: false,
        label: 'LinkButton',
        trailingIcon: <UploadSmall />,
    },
};

export const LinkXSmall = {
    args: {
        hierarchy: 'link',
        size: 'xsmall',
        disabled: false,
        label: 'LinkButton',
    },
};
