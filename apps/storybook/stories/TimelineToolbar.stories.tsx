import { fn } from '@storybook/test';

import { TimelineToolbar } from '../../../components/TimelineToolbar/src';

export default {
    title: 'Interaction/TimelineToolbar',
    component: TimelineToolbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentTime: {
            control: { type: 'number', min: 0, max: 7200, step: 1 },
        },
        repeatEnabled: {
            control: 'boolean',
        },
        isPlaying: {
            control: 'boolean',
        },
    },
    args: {
        onSkipToStart: fn() as () => void,
        onRewindBack: fn() as () => void,
        onPlayPause: fn() as () => void,
        onRewindForward: fn() as () => void,
        onSkipToEnd: fn() as () => void,
        onRepeatToggle: fn() as () => void,
    },
};

export const Default = {
    args: {
        currentTime: 0,
        repeatEnabled: false,
        isPlaying: false,
    },
};

export const Playing = {
    args: {
        currentTime: 125, // 2 minutes 5 seconds
        repeatEnabled: false,
        isPlaying: true,
    },
};

export const WithRepeat = {
    args: {
        currentTime: 90, // 1 minute 30 seconds
        repeatEnabled: true,
        isPlaying: false,
    },
};

export const LongTime = {
    args: {
        currentTime: 3661, // 1 hour 1 minute 1 second
        repeatEnabled: false,
        isPlaying: true,
    },
};

export const PlayingWithRepeat = {
    args: {
        currentTime: 1800, // 30 minutes
        repeatEnabled: true,
        isPlaying: true,
    },
};
