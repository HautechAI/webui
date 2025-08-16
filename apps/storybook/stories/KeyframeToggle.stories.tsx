import { fn } from '@storybook/test';

import { KeyframeToggle } from '../../../components/KeyframeToggle/src';

export default {
    title: 'Interaction/KeyframeToggle',
    component: KeyframeToggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['noKeyframes', 'hasKeyframes', 'isKeyframe'],
        },
    },
    args: { onClick: fn() as any },
};

export const NoKeyframes = {
    args: {
        state: 'noKeyframes',
    },
};

export const HasKeyframes = {
    args: {
        state: 'hasKeyframes',
    },
};

export const IsKeyframe = {
    args: {
        state: 'isKeyframe',
    },
};

export const AllStates = {
    render: (args: any) => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>No Keyframes</div>
                <KeyframeToggle {...args} state="noKeyframes" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Has Keyframes</div>
                <KeyframeToggle {...args} state="hasKeyframes" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Is Keyframe</div>
                <KeyframeToggle {...args} state="isKeyframe" />
            </div>
        </div>
    ),
    args: {},
};
