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
    /** Change handler fired continuously while user drags or resizes (controlled component contract) */
    onChange?: (start: number, duration: number) => void;
    /** Fired when user attempts to select the track (pointer down on body or a resize handle) */
    onSelect?: () => void;
    /** Additional className for the container */
    className?: string;
    /** Called when move/resize operation starts */
    onStartMove?: () => void;
    /** Called when move/resize operation finishes */
    onFinishMove?: () => void;
}

// Container styles - track container with hover and selected states
const Container = styled.div`
    width: 100%;
    height: 20px;
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
    const {
        start,
        duration,
        scale,
        selected = false,
        onChange,
        onSelect,
        onStartMove,
        onFinishMove,
        className,
    } = props;

    const trackWidth = Math.max(0, duration * scale);
    const trackLeft = start * scale;

    // Pointer interaction helpers
    const initInteraction = (type: 'move' | 'resize-start' | 'resize-end', e: React.PointerEvent<HTMLDivElement>) => {
        e.preventDefault();
        const originX = e.clientX;
        const initialStart = start;
        const initialDuration = duration;

        // Always call start callback when drag begins, regardless of onChange
        onStartMove?.();

        if (!onChange) {
            // If no onChange handler, still set up event listeners for finish callback
            const handleUp = () => {
                document.removeEventListener('pointerup', handleUp);
                onFinishMove?.();
            };
            document.addEventListener('pointerup', handleUp, { once: true });
            return;
        }

        const handleMove = (ev: PointerEvent) => {
            const deltaPx = ev.clientX - originX;
            const deltaSec = deltaPx / scale;
            if (type === 'move') {
                const newStart = Math.max(0, initialStart + deltaSec);
                onChange(newStart, initialDuration);
            } else if (type === 'resize-start') {
                let newStart = initialStart + deltaSec;
                let newDuration = initialDuration - deltaSec;
                if (newStart < 0) {
                    // Adjust duration if clamped at 0
                    newDuration += newStart; // newStart is negative
                    newStart = 0;
                }
                if (newDuration < 0) {
                    // Prevent negative duration; clamp at zero and adjust start backwards
                    newStart += newDuration; // newDuration negative
                    newDuration = 0;
                    if (newStart < 0) newStart = 0; // final clamp
                }
                onChange(newStart, newDuration);
            } else if (type === 'resize-end') {
                let newDuration = initialDuration + deltaSec;
                if (newDuration < 0) newDuration = 0;
                onChange(initialStart, newDuration);
            }
        };

        const handleUp = () => {
            document.removeEventListener('pointermove', handleMove);
            document.removeEventListener('pointerup', handleUp);
            // Call finish callback when drag ends
            onFinishMove?.();
        };

        document.addEventListener('pointermove', handleMove);
        document.addEventListener('pointerup', handleUp, { once: true });
    };

    return (
        <Container ref={ref} className={className} data-selected={selected}>
            <Track
                style={{
                    width: trackWidth,
                    marginLeft: trackLeft,
                }}
                data-part="track"
                onPointerDown={(e) => {
                    onSelect?.();
                    initInteraction('move', e);
                }}
            >
                <ResizeHandler
                    data-part="resize-handler"
                    onPointerDown={(e) => {
                        e.stopPropagation();
                        onSelect?.();
                        initInteraction('resize-start', e);
                    }}
                >
                    <ResizeLine />
                </ResizeHandler>
                <ResizeHandler
                    data-part="resize-handler"
                    onPointerDown={(e) => {
                        e.stopPropagation();
                        onSelect?.();
                        initInteraction('resize-end', e);
                    }}
                >
                    <ResizeLine />
                </ResizeHandler>
            </Track>
        </Container>
    );
});

TimelineTrack.displayName = 'TimelineTrack';
