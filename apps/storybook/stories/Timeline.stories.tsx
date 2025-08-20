import { Timeline } from '../../../components/Timeline/src';

export default {
    title: 'VisualEditor/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        height: {
            control: { type: 'number', min: 200, max: 600, step: 50 },
        },
        scale: {
            control: { type: 'number', min: 20, max: 100, step: 10 },
        },
    },
};

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
        tracks: sampleTracks,
    },
};

export const CustomHeight = {
    args: {
        height: 400,
        scale: 50,
        tracks: sampleTracks,
    },
};

export const LargeScale = {
    args: {
        scale: 80,
        tracks: sampleTracks,
    },
};

export const SmallScale = {
    args: {
        scale: 30,
        tracks: sampleTracks,
    },
};

export const WithInteractions = {
    args: {
        scale: 50,
        tracks: sampleTracks,
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
    },
};

export const SingleTrack = {
    args: {
        scale: 60,
        tracks: [sampleTracks[0]],
    },
};

export const EmptyTimeline = {
    args: {
        scale: 50,
        tracks: [],
    },
};

export const ManyTracks = {
    args: {
        scale: 40,
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
