import { css } from '@linaria/core';
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
    /** Whether the track is hovered */
    hovered?: boolean;
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
const containerStyles = css`
    width: 100%;
    height: 100%;
    padding: 8px;
    background: var(--layout-surface-mid, #EFEFEF);
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

// Track base styles
const trackBaseStyles = css`
    height: 20px;
    background: var(--layout-surface-mid, #EFEFEF);
    border-radius: 4px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

// Track state variations
const trackDefaultStyles = css`
    ${trackBaseStyles}
    background: var(--layout-surface-mid, #EFEFEF);
`;

const trackHoveredStyles = css`
    ${trackBaseStyles}
    background: var(--layout-strokes, #BDBDBD);
`;

const trackSelectedStyles = css`
    ${trackBaseStyles}
    background: var(--actions-tertiary, #9CBCC4);
`;

// Resize handler styles
const resizeHandlerStyles = css`
    width: 12px;
    align-self: stretch;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: col-resize;
`;

const resizeLineStyles = css`
    width: 2px;
    height: 12px;
    background: var(--layout-surface-low, #FCFCFC);
    border-radius: 16px;
`;

// Body area styles (between handlers)
const bodyStyles = css`
    flex: 1 1 0;
    height: 100%;
    cursor: move;
`;

export const TimelineTrack = forwardRef<HTMLDivElement, TimelineTrackProps>((props, ref) => {
    const {
        start,
        duration,
        scale,
        selected = false,
        hovered = false,
        startHandlerRef,
        endHandlerRef,
        bodyRef,
        className,
    } = props;

    // Calculate track width and position based on start, duration, and scale
    const trackWidth = duration * scale;
    const trackLeft = start * scale;

    // Determine track style based on state
    const showHandlers = selected || hovered;
    const trackStyle = selected 
        ? trackSelectedStyles 
        : hovered 
            ? trackHoveredStyles 
            : trackDefaultStyles;

    return (
        <div 
            ref={ref}
            className={`${containerStyles} ${className || ''}`.trim()}
        >
            <div 
                className={trackStyle}
                style={{ 
                    width: trackWidth,
                    marginLeft: trackLeft,
                }}
            >
                {showHandlers && (
                    <>
                        <div ref={startHandlerRef} className={resizeHandlerStyles}>
                            <div className={resizeLineStyles} />
                        </div>
                        <div ref={bodyRef} className={bodyStyles} />
                        <div ref={endHandlerRef} className={resizeHandlerStyles}>
                            <div className={resizeLineStyles} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});

TimelineTrack.displayName = 'TimelineTrack';