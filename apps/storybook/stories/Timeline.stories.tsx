import React from 'react';
import { fn } from '@storybook/test';
import { Timeline, type TimelineTrackData } from '../../../components/Timeline/src';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Timeline> = {
    title: 'Visual Editor/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        height: { control: { type: 'number', min: 200, max: 600, step: 50 } },
        scale: { control: { type: 'number', min: 20, max: 100, step: 10 } },
        duration: { control: { type: 'number', min: 1, max: 60, step: 1 } },
        currentTime: { control: { type: 'number', min: 0, max: 60, step: 0.1 } },
    },
    args: {
        onSelectTrack: fn(),
        onSelectKeyframe: fn(),
        onMoveTrack: fn(),
        onMoveKeyframe: fn(),
        onRenameTrack: fn(),
        onTimeChange: fn(),
        onStartMoveTrack: fn(),
        onFinishMoveTrack: fn(),
        onStartMoveKeyframe: fn(),
        onFinishMoveKeyframe: fn(),
    },
};

export default meta;

const sampleTracks = [
    {
        id: 'track1',
        title: 'Video Layer',
        start: 0,
        duration: 8,
        selected: false,
        keyframeProps: [
            {
                id: 'opacity',
                label: 'Opacity',
                keyframes: [
                    { id: 'kf1', time: 1, selected: false },
                    { id: 'kf2', time: 4, selected: true },
                    { id: 'kf3', time: 7, selected: false },
                ],
            },
            {
                id: 'scale',
                label: 'Scale',
                keyframes: [
                    { id: 'kf4', time: 2, selected: false },
                    { id: 'kf5', time: 6, selected: false },
                ],
            },
            {
                id: 'rotation',
                label: 'Rotation',
                keyframes: [
                    { id: 'kf6', time: 0.5, selected: false },
                    { id: 'kf7', time: 3.5, selected: false },
                    { id: 'kf8', time: 5.5, selected: false },
                ],
            },
        ],
    },
    {
        id: 'track2',
        title: 'Audio Track',
        start: 1,
        duration: 6,
        selected: true,
        keyframeProps: [
            {
                id: 'volume',
                label: 'Volume',
                keyframes: [
                    { id: 'kf9', time: 1.5, selected: false },
                    { id: 'kf10', time: 3, selected: false },
                    { id: 'kf11', time: 5, selected: true },
                ],
            },
        ],
    },
    {
        id: 'track3',
        title: 'Text Layer',
        start: 2.5,
        duration: 4,
        selected: false,
        keyframeProps: [
            {
                id: 'textOpacity',
                label: 'Opacity',
                keyframes: [
                    { id: 'kf12', time: 3, selected: false },
                    { id: 'kf13', time: 5.5, selected: false },
                ],
            },
            {
                id: 'fontSize',
                label: 'Font Size',
                keyframes: [
                    { id: 'kf14', time: 3.2, selected: false },
                    { id: 'kf15', time: 4.8, selected: false },
                ],
            },
        ],
    },
];

export const Default = {
    args: {
        scale: 50,
        duration: 15,
        tracks: sampleTracks,
    },
};

export const CustomHeight = {
    args: {
        height: 400,
        scale: 50,
        duration: 15,
        tracks: sampleTracks,
    },
};

export const LargeScale = {
    args: {
        scale: 80,
        duration: 15,
        tracks: sampleTracks,
    },
};

export const SmallScale = {
    args: {
        scale: 30,
        duration: 15,
        tracks: sampleTracks,
    },
};

export const WithInteractions = {
    args: {
        scale: 50,
        duration: 15,
        tracks: sampleTracks,
        currentTime: 2.5,
        onSelectTrack: (trackId: string) => {
            // eslint-disable-next-line no-console
            console.log('Selected track:', trackId);
        },
        onSelectKeyframe: (keyframeId: string) => {
            // eslint-disable-next-line no-console
            console.log('Selected keyframe:', keyframeId);
        },
        onMoveKeyframe: (keyframeId: string, time: number) => {
            // eslint-disable-next-line no-console
            console.log('Moved keyframe:', keyframeId, 'to time:', time);
        },
        onTimeChange: (time: number) => {
            // eslint-disable-next-line no-console
            console.log('Playhead moved to time:', time);
        },
    },
};

export const SingleTrack = {
    args: {
        scale: 60,
        duration: 10,
        tracks: [sampleTracks[0]],
    },
};

export const EmptyTimeline = {
    args: {
        scale: 50,
        duration: 0,
        tracks: [],
    },
};

export const ManyTracks = {
    args: {
        scale: 40,
        duration: 20,
        tracks: [
            ...sampleTracks,
            {
                id: 'track4',
                title: 'Background Music',
                start: 0,
                duration: 10,
                selected: false,
                keyframeProps: [
                    {
                        id: 'bgVolume',
                        label: 'Volume',
                        keyframes: [
                            { id: 'kf16', time: 0, selected: false },
                            { id: 'kf17', time: 2, selected: false },
                            { id: 'kf18', time: 8, selected: false },
                        ],
                    },
                ],
            },
            {
                id: 'track5',
                title: 'Effect Layer',
                start: 3,
                duration: 5,
                selected: false,
                keyframeProps: [
                    {
                        id: 'effectStrength',
                        label: 'Strength',
                        keyframes: [
                            { id: 'kf19', time: 3.5, selected: false },
                            { id: 'kf20', time: 6, selected: false },
                        ],
                    },
                    {
                        id: 'effectBlur',
                        label: 'Blur',
                        keyframes: [
                            { id: 'kf21', time: 4, selected: false },
                            { id: 'kf22', time: 7, selected: false },
                        ],
                    },
                ],
            },
        ],
    },
};

export const WithPlayhead = {
    args: {
        scale: 50,
        duration: 15,
        tracks: sampleTracks,
        currentTime: 3.2,
        onTimeChange: (time: number) => {
            // eslint-disable-next-line no-console
            console.log('Playhead time:', time);
        },
    },
};

export const PlayheadAtStart = {
    args: {
        scale: 60,
        duration: 15,
        tracks: sampleTracks,
        currentTime: 0,
    },
};

export const PlayheadInMiddle = {
    args: {
        scale: 45,
        duration: 15,
        tracks: sampleTracks,
        currentTime: 4.5,
    },
};

export const PlayheadWithDragCallback = {
    args: {
        scale: 50,
        duration: 15,
        tracks: sampleTracks,
        currentTime: 1.8,
        onTimeChange: (time: number) => {
            // eslint-disable-next-line no-console
            console.log('Dragged playhead to:', time.toFixed(2), 'seconds');
        },
        onSelectTrack: (trackId: string) => {
            // eslint-disable-next-line no-console
            console.log('Selected track:', trackId);
        },
        onSelectKeyframe: (keyframeId: string) => {
            // eslint-disable-next-line no-console
            console.log('Selected keyframe:', keyframeId);
        },
    },
};

// Fully Interactive Story with complete state management
export const FullyInteractive = {
    render: () => {
        const [timelineData, setTimelineData] = React.useState<{
            currentTime: number;
            tracks: TimelineTrackData[];
        }>({
            currentTime: 2.5,
            tracks: JSON.parse(JSON.stringify(sampleTracks)), // Deep copy
        });

        const [recentActions, setRecentActions] = React.useState<string[]>([]);

        const addAction = (action: string) => {
            setRecentActions((prev) => [action, ...prev.slice(0, 9)]); // Keep last 10 actions
        };

        const handleTimeChange = (time: number) => {
            setTimelineData((prev) => ({ ...prev, currentTime: time }));
            addAction(`🎯 Playhead moved to ${time.toFixed(2)}s`);
        };

        const handleSelectTrack = (trackId: string) => {
            setTimelineData((prev) => ({
                ...prev,
                tracks: prev.tracks.map((track) => ({
                    ...track,
                    selected: track.id === trackId ? !track.selected : track.selected,
                })),
            }));
            const track = timelineData.tracks.find((t) => t.id === trackId);
            addAction(`🎵 ${track?.selected ? 'Deselected' : 'Selected'} track: ${track?.title}`);
        };

        const handleSelectKeyframe = (keyframeId: string) => {
            setTimelineData((prev) => ({
                ...prev,
                tracks: prev.tracks.map((track) => ({
                    ...track,
                    keyframeProps: track.keyframeProps.map((prop) => ({
                        ...prop,
                        keyframes: prop.keyframes.map((kf) => ({
                            ...kf,
                            selected: kf.id === keyframeId ? !kf.selected : kf.selected,
                        })),
                    })),
                })),
            }));
            // Find the keyframe to get context
            let keyframeName = 'Unknown';
            timelineData.tracks.forEach((track) => {
                track.keyframeProps.forEach((prop) => {
                    const kf = prop.keyframes.find((k) => k.id === keyframeId);
                    if (kf) keyframeName = `${track.title}/${prop.label}@${kf.time}s`;
                });
            });
            addAction(`⭐ Selected keyframe: ${keyframeName}`);
        };

        const handleMoveKeyframe = (keyframeId: string, newTime: number) => {
            setTimelineData((prev) => ({
                ...prev,
                tracks: prev.tracks.map((track) => ({
                    ...track,
                    keyframeProps: track.keyframeProps.map((prop) => ({
                        ...prop,
                        keyframes: prop.keyframes.map((kf) => (kf.id === keyframeId ? { ...kf, time: newTime } : kf)),
                    })),
                })),
            }));
            // Find the keyframe to get context
            let keyframeName = 'Unknown';
            timelineData.tracks.forEach((track) => {
                track.keyframeProps.forEach((prop) => {
                    const kf = prop.keyframes.find((k) => k.id === keyframeId);
                    if (kf) keyframeName = `${track.title}/${prop.label}`;
                });
            });
            addAction(`🔄 Moved keyframe ${keyframeName} to ${newTime.toFixed(2)}s`);
        };

        const handleRenameTrack = (trackId: string, newTitle: string) => {
            setTimelineData((prev) => ({
                ...prev,
                tracks: prev.tracks.map((track) => (track.id === trackId ? { ...track, title: newTitle } : track)),
            }));
            addAction(`✏️ Renamed track to: ${newTitle}`);
        };

        const handleMoveTrack = (trackId: string, newStart: number, newDuration: number) => {
            setTimelineData((prev) => ({
                ...prev,
                tracks: prev.tracks.map((track) =>
                    track.id === trackId ? { ...track, start: newStart, duration: newDuration } : track,
                ),
            }));
            addAction(`📦 Track "${trackId}" moved: start=${newStart.toFixed(2)}s duration=${newDuration.toFixed(2)}s`);
        };

        return (
            <div>
                <div style={{ marginBottom: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <strong>Interactive Timeline Demo</strong>
                    <div style={{ fontSize: '14px', margin: '8px 0' }}>
                        Current time: <strong>{timelineData.currentTime.toFixed(2)}s</strong>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                        • Drag the playhead to change current time
                        <br />
                        • Click tracks to select/deselect them
                        <br />
                        • Click keyframes to select them
                        <br />
                        • Drag keyframes to move them along the timeline
                        <br />
                        • Double-click track names to rename them
                        <br />• Drag track bar (empty area) to move a track; drag left/right handles to resize
                    </div>
                </div>

                <Timeline
                    scale={50}
                    duration={15}
                    tracks={timelineData.tracks}
                    currentTime={timelineData.currentTime}
                    onTimeChange={handleTimeChange}
                    onSelectTrack={handleSelectTrack}
                    onSelectKeyframe={handleSelectKeyframe}
                    onMoveKeyframe={handleMoveKeyframe}
                    onRenameTrack={handleRenameTrack}
                    onMoveTrack={handleMoveTrack}
                    onStartMoveTrack={(trackId) => {
                        const track = timelineData.tracks.find((t) => t.id === trackId);
                        addAction(`🟢 Started moving track: ${track?.title}`);
                    }}
                    onFinishMoveTrack={(trackId) => {
                        const track = timelineData.tracks.find((t) => t.id === trackId);
                        addAction(`🔵 Finished moving track: ${track?.title}`);
                    }}
                    onStartMoveKeyframe={(keyframeId) => {
                        addAction(`🟢 Started moving keyframe: ${keyframeId}`);
                    }}
                    onFinishMoveKeyframe={(keyframeId) => {
                        addAction(`🔵 Finished moving keyframe: ${keyframeId}`);
                    }}
                />

                <div style={{ marginTop: '16px', padding: '12px', background: '#f9f9f9', borderRadius: '4px' }}>
                    <strong>Recent Actions:</strong>
                    <div style={{ fontSize: '12px', marginTop: '8px', maxHeight: '120px', overflow: 'auto' }}>
                        {recentActions.length === 0 ? (
                            <div style={{ color: '#999', fontStyle: 'italic' }}>
                                No actions yet - try interacting with the timeline!
                            </div>
                        ) : (
                            recentActions.map((action, index) => (
                                <div key={index} style={{ padding: '2px 0', borderBottom: '1px solid #eee' }}>
                                    {action}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    },
};

// Demo for new Start/Finish Move Callbacks
export const StartFinishCallbacks = {
    render: () => {
        const [dragActions, setDragActions] = React.useState<string[]>([]);

        const addDragAction = (action: string) => {
            setDragActions((prev) => [action, ...prev.slice(0, 19)]); // Keep last 20 actions
        };

        return (
            <div>
                <div style={{ marginBottom: '16px', padding: '12px', background: '#e8f5e9', borderRadius: '4px' }}>
                    <strong>Start/Finish Move Callbacks Demo</strong>
                    <div style={{ fontSize: '12px', color: '#2e7d32', margin: '8px 0' }}>
                        This demo shows the new onStartMove/onFinishMove callbacks for tracks and keyframes.
                        <br />• <strong>Green</strong> = Start events
                        <br />• <strong>Blue</strong> = Finish events
                        <br />• <strong>Gray</strong> = Move events (during drag)
                    </div>
                </div>

                <Timeline
                    scale={50}
                    duration={15}
                    tracks={sampleTracks}
                    currentTime={2.5}
                    onMoveTrack={(trackId, start, duration) => {
                        const track = sampleTracks.find((t) => t.id === trackId);
                        addDragAction(
                            `🔄 Move: ${track?.title} - start=${start.toFixed(1)}s, duration=${duration.toFixed(1)}s`,
                        );
                    }}
                    onMoveKeyframe={(keyframeId, time) => {
                        addDragAction(`🔄 Move: Keyframe ${keyframeId} - time=${time.toFixed(1)}s`);
                    }}
                    onStartMoveTrack={(trackId) => {
                        const track = sampleTracks.find((t) => t.id === trackId);
                        addDragAction(`🟢 START: Moving track "${track?.title}"`);
                    }}
                    onFinishMoveTrack={(trackId) => {
                        const track = sampleTracks.find((t) => t.id === trackId);
                        addDragAction(`🔵 FINISH: Moving track "${track?.title}"`);
                    }}
                    onStartMoveKeyframe={(keyframeId) => {
                        addDragAction(`🟢 START: Moving keyframe "${keyframeId}"`);
                    }}
                    onFinishMoveKeyframe={(keyframeId) => {
                        addDragAction(`🔵 FINISH: Moving keyframe "${keyframeId}"`);
                    }}
                />

                <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <strong>Drag Events Log:</strong>
                    <div style={{ fontSize: '12px', marginTop: '8px', maxHeight: '200px', overflow: 'auto' }}>
                        {dragActions.length === 0 ? (
                            <div style={{ color: '#999', fontStyle: 'italic' }}>
                                No drag events yet - try dragging tracks or keyframes!
                            </div>
                        ) : (
                            dragActions.map((action, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '3px 0',
                                        borderBottom: '1px solid #eee',
                                        color: action.includes('START')
                                            ? '#2e7d32'
                                            : action.includes('FINISH')
                                              ? '#1976d2'
                                              : '#666',
                                    }}
                                >
                                    {action}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    },
};
