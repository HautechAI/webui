import { styled } from '@hautechai/webui.themeprovider';
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

// Container styles - track container with hover and selected states
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
    background: transparent;

    &:hover {
        background: ${themeVars.layout.surfaceMid};
    }

    &[data-selected='true'] {
        background: ${themeVars.layout.surfaceMid};
    }

    /* State-driven styling for children using data attributes */
    &:hover [data-part='track'] {
        background: ${themeVars.layout.strokes};
    }

    &:hover [data-part='resize-handler'] {
        display: inline-flex;
    }

    &[data-selected='true'] [data-part='track'] {
        background: ${themeVars.actions.tertiary};
    }

    &[data-selected='true'] [data-part='resize-handler'] {
        display: inline-flex;
    }
`;

// Track styles - track bar with different colors for default, hover, and selected states
const Track = styled.div`
    height: 20px;
    background: ${themeVars.layout.surfaceMid};
    border-radius: 4px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: move;
    /* Interactive states are controlled by parent via data attributes */
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
    background: var(--layout-surface-low, #fcfcfc);
    border-radius: 16px;
`;

export const TimelineTrack = forwardRef<HTMLDivElement, TimelineTrackProps>((props, ref) => {
    const { start, duration, scale, selected = false, startHandlerRef, endHandlerRef, bodyRef, className } = props;

    // Calculate track width and position based on start, duration, and scale
    // Account for container padding (8px on each side = 16px total)
    const _containerPadding = 16; // 8px left + 8px right
    const trackWidth = Math.max(0, duration * scale);
    const trackLeft = start * scale;

    return (
        <Container ref={ref} className={className} data-selected={selected}>
            <Track
                ref={bodyRef}
                style={{
                    width: trackWidth,
                    marginLeft: trackLeft,
                }}
                data-part="track"
            >
                <ResizeHandler ref={startHandlerRef} data-part="resize-handler">
                    <ResizeLine />
                </ResizeHandler>
                <ResizeHandler ref={endHandlerRef} data-part="resize-handler">
                    <ResizeLine />
                </ResizeHandler>
            </Track>
        </Container>
    );
});

TimelineTrack.displayName = 'TimelineTrack';
