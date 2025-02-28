import avatar from '../../../assets/Avatar.png';

import { DataItem } from '../../../components/DataItem/src';

export default {
    title: 'Data Display/DataItem',
    component: DataItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        label: 'Current plan',
        value: 'Basic',
    },
};

export const SmallData = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'data',
    },
};

export const MediumHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'medium',
        primary: 'heading',
    },
};

export const SmallHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'heading',
    },
};
