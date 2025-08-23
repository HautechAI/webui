import {
    HorizontalTextAlignmentControl,
    HorizontalTextAlignmentControlProps,
} from '../../../components/HorizontalTextAlignmentControl/src';
import { fn } from '@storybook/test';
import { Decorator } from '@storybook/react';
import { useState } from 'react';

const OnChangeSyncArgs: Decorator<HorizontalTextAlignmentControlProps> = (Story, context) => {
    const [value, setValue] = useState<'left' | 'center' | 'right'>('left');
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
    title: 'Input/HorizontalTextAlignmentControl',
    component: HorizontalTextAlignmentControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: 'left' | 'center' | 'right') => void,
    },
    decorators: [OnChangeSyncArgs],
};

export const Default = {
    args: {},
};

export const CenterSelected = {
    render: () => {
        const [value, setValue] = useState<'left' | 'center' | 'right'>('center');
        return <HorizontalTextAlignmentControl value={value} onChange={(e, v) => setValue(v)} />;
    },
};

export const RightSelected = {
    render: () => {
        const [value, setValue] = useState<'left' | 'center' | 'right'>('right');
        return <HorizontalTextAlignmentControl value={value} onChange={(e, v) => setValue(v)} />;
    },
};

export const SmallSize = {
    args: {
        size: 'small',
    },
};

export const SizeComparison = {
    render: () => {
        const [value1, setValue1] = useState<'left' | 'center' | 'right'>('left');
        const [value2, setValue2] = useState<'left' | 'center' | 'right'>('left');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>Default Size</h3>
                    <HorizontalTextAlignmentControl value={value1} onChange={(e, v) => setValue1(v)} />
                </div>
                <div>
                    <h3>Small Size</h3>
                    <HorizontalTextAlignmentControl value={value2} onChange={(e, v) => setValue2(v)} size="small" />
                </div>
            </div>
        );
    },
};

export const AllStatesComparison = {
    render: () => {
        const [value1, setValue1] = useState<'left' | 'center' | 'right'>('left');
        const [value2, setValue2] = useState<'left' | 'center' | 'right'>('center');
        const [value3, setValue3] = useState<'left' | 'center' | 'right'>('right');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>Left Alignment</h3>
                    <HorizontalTextAlignmentControl value={value1} onChange={(e, v) => setValue1(v)} />
                </div>
                <div>
                    <h3>Center Alignment</h3>
                    <HorizontalTextAlignmentControl value={value2} onChange={(e, v) => setValue2(v)} />
                </div>
                <div>
                    <h3>Right Alignment</h3>
                    <HorizontalTextAlignmentControl value={value3} onChange={(e, v) => setValue3(v)} />
                </div>
            </div>
        );
    },
};
