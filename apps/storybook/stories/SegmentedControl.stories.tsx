import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { UploadIcon, HintIcon, ArrowAltRightIcon } from '../../../components/Icon/src';
import { fn } from '@storybook/test';
import { Hint } from '../../../components/Hint/src';

export default {
    title: 'Input/SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as any,
    },
};

export const HIG = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
    },
};

export const Material = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        material: true,
    },
};

export const HIGWithIcons = {
    args: {
        options: [
            { label: 'All', value: 'all', leadingIcon: <UploadIcon size={18} /> },
            { label: 'Classic', value: 'classic', trailingIcon: <HintIcon size={18} /> },
            { value: 'batch', leadingIcon: <ArrowAltRightIcon size={18} /> },
        ],
        defaultSelectedIndex: 1,
    },
};

export const HIGWithHint = {
    args: {
        options: [
            { label: 'All', value: 'all', leadingIcon: <UploadIcon size={18} /> },
            { label: 'Classic', value: 'classic', trailingIcon: <Hint position="bottom" hint="This is a tooltip." /> },
        ],
        defaultSelectedIndex: 1,
    },
};

export const HIGWithWhitespace = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        whitespace: 'xl',
    },
};
