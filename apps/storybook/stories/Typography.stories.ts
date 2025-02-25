import { Typography } from '../../../components/Typography/src';

const TEXT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut placerat sapien. Nulla massa lacus, porta non lobortis non, venenatis eget sapien.';

export default {
    title: 'Data Display/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Secondary = {
    args: {
        variant: 'H1',
        color: 'layout.onSurface.secondary',
        children: TEXT,
    },
};

export const H1 = {
    args: {
        variant: 'H1',
        children: TEXT,
    },
};

export const H2 = {
    args: {
        variant: 'H2',
        children: TEXT,
    },
};

export const H3 = {
    args: {
        variant: 'H3',
        children: TEXT,
    },
};

export const LabelMediumButton = {
    args: {
        variant: 'LabelMediumButton',
        children: TEXT,
    },
};

export const LabelMediumEmphasized = {
    args: {
        variant: 'LabelMediumEmphasized',
        children: TEXT,
    },
};

export const LabelMediumRegular = {
    args: {
        variant: 'LabelMediumRegular',
        children: TEXT,
    },
};

export const LabelSmallEmphasized = {
    args: {
        variant: 'LabelSmallEmphasized',
        children: TEXT,
    },
};

export const LabelSmallRegular = {
    args: {
        variant: 'LabelSmallRegular',
        children: TEXT,
    },
};

export const Body = {
    args: {
        variant: 'Body',
        children: TEXT,
    },
};
export const CaptionEmphasized = {
    args: {
        variant: 'CaptionEmphasized',
        children: TEXT,
    },
};

export const CaptionRegular = {
    args: {
        variant: 'CaptionRegular',
        children: TEXT,
    },
};

export const LinkSmall = {
    args: {
        variant: 'LinkSmall',
        children: TEXT,
    },
};

export const LinkExtraSmall = {
    args: {
        variant: 'LinkExtraSmall',
        children: TEXT,
    },
};
