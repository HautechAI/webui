import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { forwardRef } from 'react';

export interface TimelineTrackProps {
    /** Start time in seconds */
    start: number;
    /** Duration in seconds */
    duration: number;
    /** Scale in pixels per second */
    scale: number;
    /** Whether the track is selected */
    selected?: boolean;
    /** Ref for the start resize handler */
    startHandlerRef?: React.Ref<HTMLDivElement>;
    /** Ref for the end resize handler */
    endHandlerRef?: React.Ref<HTMLDivElement>;
    /** Ref for the body (draggable area) */
    bodyRef?: React.Ref<HTMLDivElement>;
    /** Additional className for the container */
    className?: string;
}

// Container styles - always 100% width
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;
    background: var(--layout-surface-mid, #EFEFEF);
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

// Track styles with hover and selected states
const Track = styled.div`
    height: 20px;
    background: transparent;
    border-radius: 4px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: move;
    
    &:hover {
        background: var(--layout-strokes, #BDBDBD);
        
        .resize-handler {
            display: inline-flex;
        }
    }
    
    &[data-selected="true"] {
        background: var(--actions-primary, #007AFF);
        
        .resize-handler {
            display: inline-flex;
        }
    }
`;

// Resize handler styles
const ResizeHandler = styled.div`
    width: 12px;
    align-self: stretch;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    cursor: col-resize;
`;

const ResizeLine = styled.div`
    width: 2px;
    height: 12px;
    background: var(--layout-surface-low, #FCFCFC);
    border-radius: 16px;
`;

export const TimelineTrack = forwardRef<HTMLDivElement, TimelineTrackProps>((props, ref) => {
    const {
        start,
        duration,
        scale,
        selected = false,
        startHandlerRef,
        endHandlerRef,
        bodyRef,
        className,
    } = props;

    // Calculate track width and position based on start, duration, and scale
    const trackWidth = duration * scale;
    const trackLeft = start * scale;

    return (
        <Container 
            ref={ref}
            className={className}
        >
            <Track 
                ref={bodyRef}
                data-selected={selected}
                style={{ 
                    width: trackWidth,
                    marginLeft: trackLeft,
                }}
            >
                <ResizeHandler ref={startHandlerRef} className="resize-handler">
                    <ResizeLine />
                </ResizeHandler>
                <ResizeHandler ref={endHandlerRef} className="resize-handler">
                    <ResizeLine />
                </ResizeHandler>
            </Track>
        </Container>
    );
});

TimelineTrack.displayName = 'TimelineTrack';