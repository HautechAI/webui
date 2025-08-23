import { DiamondIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { forwardRef, useCallback, useState, useRef } from 'react';

export interface TimelineTrackKeyframesProps {
    /** Scale in pixels per second */
    scale: number;
    /** Whether the track is selected */
    selected?: boolean;
    /** Keyframes data */
    keyframes: Array<{
        id: string;
        time: number; // in seconds
        selected: boolean;
    }>;
    /** Called when a keyframe is moved */
    onMove?: (params: { id: string; time: number }) => void;
    /** Called when a keyframe is clicked */
    onClick?: (params: { id: string }) => void;
    /** Additional className for the container */
    className?: string;
}

// Container styles - same as TimelineTrack for consistent height and behavior
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

    /* State-driven styling for keyframes and lines */
    &:hover [data-part='keyframe'] {
        opacity: 1;
    }

    &:hover [data-part='connection-line'] {
        opacity: 1;
    }
`;

// Timeline container for positioning keyframes
const Timeline = styled.div`
    position: relative;
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
`;

// Connection line between keyframes
const ConnectionLine = styled.div`
    height: 2px;
    background: ${themeVars.actions.primary};
    opacity: 0.6;
    cursor: pointer;
    transition: opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &[data-selected='true'] {
        opacity: 1;
    }

    &:hover {
        opacity: 1;
    }
`;

// Keyframe container
const KeyframeContainer = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    transform: translateX(-50%);
    transition: opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
    opacity: 0.6;
    color: ${themeVars.actions.primary};

    &[data-selected='true'] {
        opacity: 1;
    }

    &:hover {
        opacity: 1;
    }

    &[data-dragging='true'] {
        cursor: grabbing;
        z-index: 2;
    }
`;

export const TimelineTrackKeyframes = forwardRef<HTMLDivElement, TimelineTrackKeyframesProps>((props, ref) => {
    const { scale, selected = false, keyframes, onMove, onClick, className } = props;
    const [dragging, setDragging] = useState<{ id: string; startX: number; startTime: number; offsetX: number } | null>(
        null,
    );
    const timelineRef = useRef<HTMLDivElement>(null);

    // Handle keyframe click
    const handleKeyframeClick = useCallback(
        (keyframeId: string) => {
            if (!dragging) {
                onClick?.({ id: keyframeId });
            }
        },
        [onClick, dragging],
    );

    // Handle connection line click
    const handleLineClick = useCallback(
        (keyframeId: string) => {
            onClick?.({ id: keyframeId });
        },
        [onClick],
    );

    // Handle mouse down on keyframe for dragging
    const handleMouseDown = useCallback(
        (e: React.MouseEvent, keyframeId: string, currentTime: number) => {
            e.preventDefault();

            if (!timelineRef.current) return;

            // Calculate the offset between the mouse click position and the keyframe center
            const rect = timelineRef.current.getBoundingClientRect();
            const keyframeCenter = currentTime * scale + 8; // Account for container padding
            const mouseX = e.clientX - rect.left;
            const offsetX = mouseX - keyframeCenter;

            setDragging({
                id: keyframeId,
                startX: e.clientX,
                startTime: currentTime,
                offsetX: offsetX, // Store the offset to maintain relative position
            });
        },
        [scale],
    );

    // Handle mouse move during drag
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!dragging || !timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const relativeX = e.clientX - rect.left - 8; // Account for container padding
            // Subtract the initial offset to maintain the relative cursor position
            const adjustedX = relativeX - dragging.offsetX;
            const newTime = Math.max(0, adjustedX / scale);

            onMove?.({ id: dragging.id, time: newTime });
        },
        [dragging, scale, onMove],
    );

    // Handle mouse up to end drag
    const handleMouseUp = useCallback(() => {
        setDragging(null);
    }, []);

    // Attach global mouse events for dragging
    React.useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [dragging, handleMouseMove, handleMouseUp]);

    // Sort keyframes by time for proper line connections
    const sortedKeyframes = [...keyframes].sort((a, b) => a.time - b.time);

    return (
        <Container ref={ref} className={className} data-selected={selected}>
            <Timeline ref={timelineRef}>
                {/* Render connection lines between keyframes */}
                {sortedKeyframes.map((keyframe, index) => {
                    if (index === 0) return null; // No line before first keyframe

                    const prevKeyframe = sortedKeyframes[index - 1];
                    // Line starts at the right edge of the previous keyframe (center + half width)
                    const lineStart = prevKeyframe.time * scale + 8; // Add half of keyframe width (16px / 2 = 8px)
                    // Line ends at the left edge of the current keyframe (center - half width)
                    const lineEnd = keyframe.time * scale - 8; // Subtract half of keyframe width
                    const lineWidth = Math.max(0, lineEnd - lineStart); // Ensure positive width

                    // Line is selected if the current keyframe is selected
                    const isLineSelected = keyframe.selected;

                    return (
                        <ConnectionLine
                            key={`line-${prevKeyframe.id}-${keyframe.id}`}
                            data-part="connection-line"
                            data-selected={isLineSelected}
                            style={{
                                position: 'absolute',
                                left: lineStart,
                                width: lineWidth,
                            }}
                            onClick={() => handleLineClick(keyframe.id)}
                        />
                    );
                })}

                {/* Render keyframes */}
                {sortedKeyframes.map((keyframe) => {
                    const left = keyframe.time * scale;
                    const isDraggingThis = dragging?.id === keyframe.id;

                    return (
                        <KeyframeContainer
                            key={keyframe.id}
                            data-part="keyframe"
                            data-selected={keyframe.selected}
                            data-dragging={isDraggingThis}
                            style={{ left }}
                            onClick={() => handleKeyframeClick(keyframe.id)}
                            onMouseDown={(e) => handleMouseDown(e, keyframe.id, keyframe.time)}
                        >
                            <DiamondIcon
                                size={16}
                                style={keyframe.selected ? 'bold' : 'outlined'}
                                color="currentColor"
                            />
                        </KeyframeContainer>
                    );
                })}
            </Timeline>
        </Container>
    );
});

TimelineTrackKeyframes.displayName = 'TimelineTrackKeyframes';
