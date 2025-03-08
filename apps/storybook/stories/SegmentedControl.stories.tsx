import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { UploadIcon, HintIcon, ArrowAltRightIcon } from '../../../components/Icon/src';

export default {
    title: 'Navigation/Segmented Control',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const HIG = {
    args: {
        options: [{ label: 'All' }, { label: 'Classic' }, { label: 'Batch' }],
    },
};

export const Material = {
    args: {
        options: [{ label: 'All' }, { label: 'Classic' }, { label: 'Batch' }],
        material: true,
    },
};

export const HIGWithIcons = {
    args: {
        options: [
            { label: 'All', leadingIcon: <UploadIcon size={18} /> },
            { label: 'Classic', trailingIcon: <HintIcon size={18} /> },
            { leadingIcon: <ArrowAltRightIcon size={18} /> },
        ],
        defaultSelectedIndex: 1,
        onTabChange: (index: number) => console.log('Selected tab:', index),
    },
};

export const HIGWithWhitespace = {
    args: {
        options: [{ label: 'All' }, { label: 'Classic' }, { label: 'Batch' }],
        whitespace: 'xl',
    },
};
