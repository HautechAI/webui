import React from 'react';
import { useState } from 'react';
import { TimelineTrack, type TimelineTrackProps } from '../../../components/TimelineTrack/src';

export default {
    title: 'Visual Editor/TimelineTrack',
    component: TimelineTrack,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        start: {
            control: { type: 'number', min: 0, max: 10, step: 0.1 },
        },
        duration: {
            control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
        },
        scale: {
            control: { type: 'number', min: 10, max: 100, step: 5 },
        },
        selected: {
            control: { type: 'boolean' },
        },
    },
    args: {
        start: 1,
        duration: 3,
        scale: 50, // 50px per second
        selected: false,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{
                    width: '800px',
                    border: '1px dashed #ccc',
                    borderRadius: '4px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export const Default = {
    render: function DefaultRender(args: TimelineTrackProps) {
        return <TimelineTrack {...args} />;
    },
    args: {},
};

export const Selected = {
    render: function SelectedRender(args: TimelineTrackProps) {
        return <TimelineTrack {...args} />;
    },
    args: {
        selected: true,
    },
};

export const Interactive = {
    render: function InteractiveRender(args: TimelineTrackProps) {
        const [state, setState] = useState({ start: args.start, duration: args.duration });
        return (
            <div style={{ padding: 16 }}>
                <TimelineTrack
                    {...args}
                    start={state.start}
                    duration={state.duration}
                    onChange={(start, duration) => setState({ start, duration })}
                    onSelect={() => {
                        /* selection */
                    }}
                />
                <div style={{ marginTop: 12, fontFamily: 'monospace', fontSize: 12 }}>
                    start: {state.start.toFixed(2)}s | duration: {state.duration.toFixed(2)}s
                </div>
            </div>
        );
    },
    args: {
        selected: true,
    },
};
