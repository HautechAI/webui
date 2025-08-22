import { SegmentedControl, SegmentedControlProps } from '../../../components/SegmentedControl/src';
import { UploadIcon, HintIcon, ArrowAltRightIcon } from '../../../components/Icon/src';
import { fn } from '@storybook/test';
import { Hint } from '../../../components/Hint/src';
import { Decorator } from '@storybook/react';
import { useState } from 'react';

const OnChangeSyncArgs: Decorator<SegmentedControlProps> = (Story, context) => {
    const [value, setValue] = useState('all');
    return (
        <Story
            {...{
                ...context,
                args: {
                    ...context.args,
                    value: value,
                    onChange: (e, v) => {
                        setValue(v);
                    },
                },
            }}
        />
    );
};

export default {
    title: 'Input/SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as (e: React.ChangeEvent<HTMLInputElement>) => void,
    },
    decorators: [OnChangeSyncArgs],
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

export const HIGStretched = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        stretch: true,
    },
};

export const HIGStretchedWithWhitespace = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        stretch: true,
        whitespace: 'l',
    },
};

export const MaterialStretched = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        material: true,
        stretch: true,
    },
};

export const MaterialWithWhitespace = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        material: true,
        whitespace: 'xl',
    },
};

export const WhitespaceComparison = {
    render: () => {
        const [value1, setValue1] = useState('all');
        const [value2, setValue2] = useState('all');
        const [value3, setValue3] = useState('all');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>No Whitespace</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value1}
                        onChange={(e, v) => setValue1(v)}
                    />
                </div>
                <div>
                    <h3>Medium Whitespace</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value2}
                        onChange={(e, v) => setValue2(v)}
                        whitespace="m"
                    />
                </div>
                <div>
                    <h3>Extra Large Whitespace</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value3}
                        onChange={(e, v) => setValue3(v)}
                        whitespace="xl"
                    />
                </div>
            </div>
        );
    },
};

export const StretchComparison = {
    render: () => {
        const [value1, setValue1] = useState('all');
        const [value2, setValue2] = useState('all');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
                <div>
                    <h3>Normal (content width)</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value1}
                        onChange={(e, v) => setValue1(v)}
                    />
                </div>
                <div>
                    <h3>Stretched (full width)</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value2}
                        onChange={(e, v) => setValue2(v)}
                        stretch={true}
                    />
                </div>
            </div>
        );
    },
};

export const HIGSmall = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        size: 'small',
    },
};

export const MaterialSmall = {
    args: {
        options: [
            { label: 'All', value: 'all' },
            { label: 'Classic', value: 'classic' },
            { label: 'Batch', value: 'batch' },
        ],
        material: true,
        size: 'small',
    },
};

export const SizeComparison = {
    render: () => {
        const [value1, setValue1] = useState('all');
        const [value2, setValue2] = useState('all');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>Default Size</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value1}
                        onChange={(e, v) => setValue1(v)}
                    />
                </div>
                <div>
                    <h3>Small Size (28px height)</h3>
                    <SegmentedControl
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Classic', value: 'classic' },
                            { label: 'Batch', value: 'batch' },
                        ]}
                        value={value2}
                        onChange={(e, v) => setValue2(v)}
                        size="small"
                    />
                </div>
            </div>
        );
    },
};
