import {
    VerticalAlignmentControl,
    VerticalAlignmentControlProps,
} from '../../../components/VerticalAlignmentControl/src';
import { fn } from '@storybook/test';
import { Decorator } from '@storybook/react';
import { useState } from 'react';

const OnChangeSyncArgs: Decorator<VerticalAlignmentControlProps> = (Story, context) => {
    const [value, setValue] = useState<'top' | 'middle' | 'bottom'>('top');
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
    title: 'Input/VerticalAlignmentControl',
    component: VerticalAlignmentControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: fn() as (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: 'top' | 'middle' | 'bottom') => void,
    },
    decorators: [OnChangeSyncArgs],
};

export const Default = {
    args: {},
};

export const MiddleSelected = {
    render: () => {
        const [value, setValue] = useState<'top' | 'middle' | 'bottom'>('middle');
        return <VerticalAlignmentControl value={value} onChange={(e, v) => setValue(v)} />;
    },
};

export const BottomSelected = {
    render: () => {
        const [value, setValue] = useState<'top' | 'middle' | 'bottom'>('bottom');
        return <VerticalAlignmentControl value={value} onChange={(e, v) => setValue(v)} />;
    },
};

export const SmallSize = {
    args: {
        size: 'small',
    },
};

export const SizeComparison = {
    render: () => {
        const [value1, setValue1] = useState<'top' | 'middle' | 'bottom'>('top');
        const [value2, setValue2] = useState<'top' | 'middle' | 'bottom'>('top');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>Default Size</h3>
                    <VerticalAlignmentControl value={value1} onChange={(e, v) => setValue1(v)} />
                </div>
                <div>
                    <h3>Small Size</h3>
                    <VerticalAlignmentControl value={value2} onChange={(e, v) => setValue2(v)} size="small" />
                </div>
            </div>
        );
    },
};

export const AllStatesComparison = {
    render: () => {
        const [value1, setValue1] = useState<'top' | 'middle' | 'bottom'>('top');
        const [value2, setValue2] = useState<'top' | 'middle' | 'bottom'>('middle');
        const [value3, setValue3] = useState<'top' | 'middle' | 'bottom'>('bottom');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div>
                    <h3>Top Alignment</h3>
                    <VerticalAlignmentControl value={value1} onChange={(e, v) => setValue1(v)} />
                </div>
                <div>
                    <h3>Middle Alignment</h3>
                    <VerticalAlignmentControl value={value2} onChange={(e, v) => setValue2(v)} />
                </div>
                <div>
                    <h3>Bottom Alignment</h3>
                    <VerticalAlignmentControl value={value3} onChange={(e, v) => setValue3(v)} />
                </div>
            </div>
        );
    },
};
