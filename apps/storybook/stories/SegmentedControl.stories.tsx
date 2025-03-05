import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { Upload, Hint, ArrowAltRight } from '../../../components/Icon/src';

export default {
    title: 'Navigation/SegmentedControl',
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
        material: false,
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
            { label: 'All', leadingIcon: <Upload size={18} /> },
            { label: 'Classic', trailingIcon: <Hint size={18} /> },
            { leadingIcon: <ArrowAltRight size={18} /> },
        ],
        material: false,
        defaultSelectedIndex: 1,
        onTabChange: (index: number) => console.log('Selected tab:', index),
    },
};
