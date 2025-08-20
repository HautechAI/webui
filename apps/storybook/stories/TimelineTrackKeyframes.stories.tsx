import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TimelineTrackKeyframes, type TimelineTrackKeyframesProps } from '../../../components/TimelineTrack/src';

const meta: Meta<typeof TimelineTrackKeyframes> = {
    title: 'Data Display/TimelineTrackKeyframes',
    component: TimelineTrackKeyframes,
    parameters: {
        layout: 'padded',
    },
    args: {
        scale: 50,
        selected: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockKeyframes = [
    { id: 'keyframe1', time: 1, selected: false },
    { id: 'keyframe2', time: 3, selected: true },
    { id: 'keyframe3', time: 5, selected: false },
    { id: 'keyframe4', time: 7, selected: false },
];

export const Default: Story = {
    args: {
        keyframes: mockKeyframes,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const Selected: Story = {
    args: {
        keyframes: mockKeyframes,
        selected: true,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const SingleKeyframe: Story = {
    args: {
        keyframes: [{ id: 'keyframe1', time: 2, selected: true }],
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const EmptyKeyframes: Story = {
    args: {
        keyframes: [],
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const HighDensity: Story = {
    args: {
        keyframes: [
            { id: 'keyframe1', time: 0.5, selected: false },
            { id: 'keyframe2', time: 1.2, selected: true },
            { id: 'keyframe3', time: 1.8, selected: false },
            { id: 'keyframe4', time: 2.1, selected: false },
            { id: 'keyframe5', time: 3.5, selected: false },
        ],
        scale: 100,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const LowScale: Story = {
    args: {
        keyframes: mockKeyframes,
        scale: 20,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const HighScale: Story = {
    args: {
        keyframes: mockKeyframes,
        scale: 100,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const AllSelected: Story = {
    args: {
        keyframes: [
            { id: 'keyframe1', time: 1, selected: true },
            { id: 'keyframe2', time: 3, selected: true },
            { id: 'keyframe3', time: 5, selected: true },
        ],
        selected: true,
        onClick: (_params: { id: string }) => {
            // Handle keyframe click
        },
        onMove: (_params: { id: string; time: number }) => {
            // Handle keyframe move
        },
    },
};

export const InteractiveExample: Story = {
    render: (args: TimelineTrackKeyframesProps) => {
        const [keyframes, setKeyframes] = React.useState(mockKeyframes);
        const [selected, setSelected] = React.useState(false);

        const handleKeyframeClick = (params: { id: string }) => {
            setKeyframes((prev) =>
                prev.map((kf) => ({
                    ...kf,
                    selected: kf.id === params.id ? !kf.selected : kf.selected,
                })),
            );
        };

        const handleKeyframeMove = (params: { id: string; time: number }) => {
            setKeyframes((prev) => prev.map((kf) => (kf.id === params.id ? { ...kf, time: params.time } : kf)));
        };

        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <label>
                        <input type="checkbox" checked={selected} onChange={(e) => setSelected(e.target.checked)} />
                        Track Selected
                    </label>
                </div>
                <div style={{ border: '1px solid #ccc', borderRadius: '4px' }}>
                    <TimelineTrackKeyframes
                        {...args}
                        keyframes={keyframes}
                        selected={selected}
                        onClick={handleKeyframeClick}
                        onMove={handleKeyframeMove}
                    />
                </div>
                <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
                    Click keyframes to select/deselect them. Drag keyframes left/right to move them. Click connection
                    lines to select keyframes.
                </div>
            </div>
        );
    },
    args: {
        scale: 50,
    },
};