import { useRef } from 'react';
import { TimelineTrack } from '../../../components/TimelineTrack/src';

export default {
    title: 'VisualEditor/Timeline/TimelineTrack',
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
        (Story: any) => (
            <div style={{ 
                width: '800px', 
                border: '1px dashed #ccc',
                borderRadius: '4px',
            }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = {
    render: function DefaultRender(args: any) {
        const startHandlerRef = useRef<HTMLDivElement>(null);
        const endHandlerRef = useRef<HTMLDivElement>(null);
        const bodyRef = useRef<HTMLDivElement>(null);

        return (
            <TimelineTrack
                {...args}
                startHandlerRef={startHandlerRef}
                endHandlerRef={endHandlerRef}
                bodyRef={bodyRef}
            />
        );
    },
    args: {},
};

export const Selected = {
    render: function SelectedRender(args: any) {
        const startHandlerRef = useRef<HTMLDivElement>(null);
        const endHandlerRef = useRef<HTMLDivElement>(null);
        const bodyRef = useRef<HTMLDivElement>(null);

        return (
            <TimelineTrack
                {...args}
                startHandlerRef={startHandlerRef}
                endHandlerRef={endHandlerRef}
                bodyRef={bodyRef}
            />
        );
    },
    args: {
        selected: true,
    },
};

