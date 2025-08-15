import { fn } from '@storybook/test';
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
    render: (args: any) => {
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

export const Hovered = {
    render: (args: any) => {
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
    render: (args: any) => {
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

export const AllStates = {
    render: (args: any) => {
        const createRefs = () => ({
            startHandlerRef: useRef<HTMLDivElement>(null),
            endHandlerRef: useRef<HTMLDivElement>(null),
            bodyRef: useRef<HTMLDivElement>(null),
        });

        const refs1 = createRefs();
        const refs2 = createRefs();
        const refs3 = createRefs();

        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                width: '800px'
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '4px'
                }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Default</div>
                    <div style={{ 
                        height: '36px',
                        border: '1px dashed #ccc',
                        borderRadius: '4px',
                    }}>
                        <TimelineTrack
                            {...args}
                            {...refs1}
                            selected={false}
                        />
                    </div>
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '4px'
                }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Hovered</div>
                    <div style={{ 
                        height: '36px',
                        border: '1px dashed #ccc',
                        borderRadius: '4px',
                    }}>
                        <TimelineTrack
                            {...args}
                            {...refs2}
                            selected={false}
                        />
                    </div>
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '4px'
                }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Selected</div>
                    <div style={{ 
                        height: '36px',
                        border: '1px dashed #ccc',
                        borderRadius: '4px',
                    }}>
                        <TimelineTrack
                            {...args}
                            {...refs3}
                            selected={true}
                        />
                    </div>
                </div>
            </div>
        );
    },
    args: {},
};