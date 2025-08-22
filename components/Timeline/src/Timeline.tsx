import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { TimelineTrack, TimelineTrackKeyframes } from '@hautechai/webui.timelinetrack';
import { LayerTreeItemParent } from '@hautechai/webui.layertreeitemparent';
import { LayerTreeItemChild } from '@hautechai/webui.layertreeitemchild';
import { FolderIcon } from '@hautechai/webui.icon';
import { TimelineRuler } from '@hautechai/webui.timelineruler';
import { TimelinePlayhead } from './TimelinePlayhead';

export interface TimelineTrackData {
    id: string;
    title: string;
    start: number;
    duration: number;
    selected: boolean;
    keyframeProps: {
        id: string;
        label: string;
        keyframes: {
            id: string;
            time: number;
            selected: boolean;
        }[];
    }[];
}

export interface TimelineProps {
    /**
     * Total height of the timeline component in pixels (includes 24px custom scrollbar area at the top)
     */
    height?: number;
    /** Scale in pixels per second */
    scale: number;
    /** Total duration (in seconds) of the full timeline. Replaces internally computed maxTime */
    duration: number;
    /** Array of track data */
    tracks: TimelineTrackData[];
    /** Current playhead time position in seconds */
    currentTime?: number;
    /** Called when a track is selected */
    onSelectTrack?: (trackId: string) => void;
    /** Called when a keyframe is selected */
    onSelectKeyframe?: (keyframeId: string) => void;
    /** Called when a track is moved */
    _onMoveTrack?: (trackId: string, start: number, duration: number) => void;
    /** Called when a keyframe is moved */
    onMoveKeyframe?: (keyframeId: string, time: number) => void;
    /** Called when playhead time changes */
    onTimeChange?: (time: number) => void;
    /** Called when user adjusts scale via custom scrollbar */
    onScaleChange?: (scale: number) => void;
}

// Wrapper that now reserves 24px for the custom scrollbar area above the timeline grid
const Wrapper = styled.div<{ height: number }>`
    display: flex;
    flex-direction: column;
    height: ${(p) => p.height}px;
    width: 100%;
`;

// Shared constants
const SIDEBAR_WIDTH = 200;
const EXTRA_END_PADDING = 30; // extra px to allow some space past last frame

const ScrollbarContainer = styled.div`
    width: calc(100% - ${SIDEBAR_WIDTH}px);
    padding-left: ${SIDEBAR_WIDTH}px;
    background: ${themeVars.layout.surfaceMid};
    height: 24px;
    position: relative;
    z-index: 30;
    display: flex;
    align-items: center;
    user-select: none;
`;

const ScrollbarTrack = styled.div`
    position: relative;
    flex: 0 0 auto;
    width: 100%; /* limit width to container minus left padding */
    height: 8px;
    background: transparent; /* Track itself transparent; fill only between handles */
`;

// Viewport range representation (the area between handles)
const ScrollbarRange = styled.div<{ left: number; width: number }>`
    position: absolute;
    top: 0;
    height: 8px;
    left: ${(p) => p.left}px;
    width: ${(p) => p.width}px;
    display: flex;
    align-items: center;
    cursor: grab;
`;

const HandleBase = styled.div`
    width: 8px;
    height: 8px;
    background: ${themeVars.layout.onSurface.tertiary};
`;

const RangeFill = styled.div`
    flex: 1 1 auto;
    height: 8px;
    background: ${themeVars.layout.strokes};
`;

const ScrollbarHandleStart = styled(HandleBase)`
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    cursor: ew-resize;
`;

const ScrollbarHandleEnd = styled(HandleBase)`
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    cursor: ew-resize;
`;

// Main timeline grid container (fills remaining space beneath scrollbar placeholder)
const Container = styled.div`
    display: grid;
    grid-template-columns: ${SIDEBAR_WIDTH}px 1fr;
    grid-template-rows: 24px 1fr; // header (ruler) + content
    flex: 1 1 auto;
    width: 100%;
    overflow: auto; /* preserve scroll interactions */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge legacy */
    &::-webkit-scrollbar {
        /* Chrome/Safari */
        width: 0;
        height: 0;
        display: none;
        background: transparent;
    }
    position: relative; // Enable absolute positioning for playhead
`;

// Empty top-left cell
const TopLeft = styled.div`
    background: ${themeVars.layout.surfaceMid};
    border-right: 1px solid ${themeVars.layout.strokes};
    border-bottom: 1px solid ${themeVars.layout.strokes};
    z-index: 20;
    position: sticky;
    left: 0;
    top: 0;
`;

// Top-right header for ruler
const TopRight = styled.div`
    background: ${themeVars.layout.surfaceLow};
    border-bottom: 1px solid ${themeVars.layout.strokes};
    position: sticky;
    top: 0;
    z-index: 2;
`;

// Container for the ruler with proper width
const RulerContainer = styled.div<{ scale: number; duration: number }>`
    width: ${(props) => props.duration * props.scale + EXTRA_END_PADDING}px;
    height: 100%;
`;

// Bottom-left sidebar for track labels
const BottomLeft = styled.div`
    background: ${themeVars.layout.surfaceMid};
    border-right: 1px solid ${themeVars.layout.strokes};
    overflow-x: hidden;
    position: sticky;
    left: 0;
    z-index: 10;
`;

// Bottom-right main scrollable area
const BottomRight = styled.div`
    background: ${themeVars.layout.surfaceLow};
    position: relative;
`;

// Track row container
const TrackRow = styled.div`
    height: 36px; // Set to 36px as requested
    display: flex;
    align-items: center;
`;

// Keyframe row container
const KeyframeRow = styled.div`
    height: 36px; // Set to 36px as requested
    display: flex;
    align-items: center;
`;

// Timeline content wrapper to ensure proper width
const TimelineContent = styled.div<{ scale: number; duration: number }>`
    min-width: ${(props) => props.duration * props.scale + EXTRA_END_PADDING}px;
    height: 100%;
    position: relative;
`;

export const Timeline: React.FC<TimelineProps> = ({
    height = 250,
    scale,
    duration,
    tracks,
    currentTime = 0,
    onSelectTrack,
    onSelectKeyframe,
    _onMoveTrack,
    onMoveKeyframe,
    onTimeChange,
    onScaleChange,
}) => {
    // Use provided duration directly (previously computed as maxTime)
    const timelineDuration = duration;

    const handleTrackClick = (trackId: string) => {
        onSelectTrack?.(trackId);
    };

    const handleKeyframeClick = (keyframeId: string) => {
        onSelectKeyframe?.(keyframeId);
    };

    const handleKeyframeMove = (params: { id: string; time: number }) => {
        onMoveKeyframe?.(params.id, params.time);
    };

    // Height available for the timeline grid (exclude the 24px scrollbar placeholder)
    const timelineGridHeight = height - 24;

    // Internal scale (allows local adjustments without forcing parent to control unless it listens)
    const [internalScale, setInternalScale] = React.useState(scale);
    React.useEffect(() => {
        setInternalScale(scale);
    }, [scale]);

    // Refs
    const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
    const trackRef = React.useRef<HTMLDivElement | null>(null);

    // Range state
    const [rangeLeft, setRangeLeft] = React.useState(0);
    const [rangeWidth, setRangeWidth] = React.useState(0);

    // Sync range (viewport) with scroll & scale
    const syncRange = React.useCallback(() => {
        const container = scrollContainerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;
        const trackWidth = track.clientWidth;
        const viewportWidth = container.clientWidth - SIDEBAR_WIDTH; // only the scrollable content area
        const timeWidth = timelineDuration * internalScale; // pure time span width (no padding)
        const contentWidth = timeWidth + EXTRA_END_PADDING; // actual scroll content width
        if (timeWidth <= 0) return;
        const visibleRatio = Math.min(1, viewportWidth / contentWidth); // width proportional to full scrollable content
        const scrollLeft = container.scrollLeft; // 0..(contentWidth - viewportWidth)
        const newWidth = Math.max(8, visibleRatio * trackWidth);
        const scrollableContent = Math.max(0, contentWidth - viewportWidth);
        if (scrollableContent === 0) {
            setRangeWidth(trackWidth);
            setRangeLeft(0);
            return;
        }
        const maxRangeLeft = trackWidth - newWidth;
        const newLeft = (scrollLeft / scrollableContent) * maxRangeLeft;
        setRangeWidth(newWidth);
        setRangeLeft(newLeft);
    }, [internalScale, timelineDuration]);

    React.useEffect(() => {
        syncRange();
    }, [internalScale, timelineDuration, tracks, syncRange]);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const handler = () => syncRange();
        container.addEventListener('scroll', handler);
        window.addEventListener('resize', handler);
        return () => {
            container.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [syncRange]);

    const applyScale = React.useCallback(
        (newScale: number) => {
            const clamped = Math.max(0.1, Math.min(newScale, 5000));
            setInternalScale(clamped);
            onScaleChange?.(clamped);
        },
        [onScaleChange],
    );

    type DragMode = 'left' | 'right' | 'move' | null;
    const dragRef = React.useRef<{
        mode: DragMode;
        startX: number;
        startLeft: number;
        startWidth: number;
        trackWidth: number;
        viewportWidth: number;
        contentWidth: number;
    } | null>(null);

    const beginDrag = (e: React.PointerEvent, mode: DragMode) => {
        if (!trackRef.current || !scrollContainerRef.current) return;
        const trackWidth = trackRef.current.clientWidth;
        const viewportWidth = scrollContainerRef.current.clientWidth - SIDEBAR_WIDTH;
        dragRef.current = {
            mode,
            startX: e.clientX,
            startLeft: rangeLeft,
            startWidth: rangeWidth,
            trackWidth,
            viewportWidth,
            contentWidth: timelineDuration * internalScale + EXTRA_END_PADDING,
        };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        e.preventDefault();
    };

    const handlePointerMove = React.useCallback(
        (e: PointerEvent) => {
            const state = dragRef.current;
            if (!state || !scrollContainerRef.current) return;
            const dx = e.clientX - state.startX;
            let newLeft = state.startLeft;
            let newWidth = state.startWidth;

            if (state.mode === 'move') {
                newLeft = Math.min(Math.max(0, state.startLeft + dx), state.trackWidth - state.startWidth);
            }
            if (state.mode === 'left') {
                newLeft = Math.min(Math.max(0, state.startLeft + dx), state.startLeft + state.startWidth - 16);
                newWidth = state.startWidth + (state.startLeft - newLeft);
            }
            if (state.mode === 'right') {
                newWidth = Math.max(16, state.startWidth + dx);
                if (newLeft + newWidth > state.trackWidth) newWidth = state.trackWidth - newLeft;
            }

            setRangeLeft(newLeft);
            setRangeWidth(newWidth);

            // Recompute scale and scroll based on new range
            // rangeRatioWidthContent: viewportWidth / contentWidth
            const rangeRatioWidthContent = newWidth / state.trackWidth;
            const padding = EXTRA_END_PADDING;
            // Solve for scale: viewport = r * (timelineDuration*scale + padding)
            // => scale = (viewport - r*padding) / (r * timelineDuration)
            let newScale = internalScale;
            if (rangeRatioWidthContent > 0) {
                newScale =
                    (state.viewportWidth - rangeRatioWidthContent * padding) /
                    (rangeRatioWidthContent * timelineDuration);
                if (!isFinite(newScale) || newScale <= 0) newScale = internalScale;
            }
            applyScale(newScale);

            const timeWidth = timelineDuration * newScale;
            const contentWidth = timeWidth + EXTRA_END_PADDING;
            const viewportWidth = state.viewportWidth;
            const scrollableContent = Math.max(0, contentWidth - viewportWidth);
            if (scrollableContent > 0) {
                const maxRangeLeft = state.trackWidth - newWidth;
                const normalizedLeft = maxRangeLeft === 0 ? 0 : newLeft / maxRangeLeft; // 0..1
                scrollContainerRef.current.scrollLeft = normalizedLeft * scrollableContent;
            } else {
                scrollContainerRef.current.scrollLeft = 0;
            }
        },
        [applyScale, internalScale, timelineDuration],
    );

    const handlePointerUp = React.useCallback(() => {
        dragRef.current = null;
    }, []);

    React.useEffect(() => {
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [handlePointerMove, handlePointerUp]);

    // Recalculate initial scale if entire timeline should fit when range is full width
    React.useEffect(() => {
        if (!scrollContainerRef.current) return;
        const viewportWidth = scrollContainerRef.current.clientWidth - SIDEBAR_WIDTH;
        if (viewportWidth > 0 && timelineDuration > 0) {
            // If range effectively covers track (initial load) ensure scale <= provided scale to fit
            const fitScale = viewportWidth / timelineDuration; // padding deliberately excluded so entire time span fits
            if (scale === internalScale && internalScale > fitScale) {
                applyScale(fitScale);
            }
        }
    }, [timelineDuration]);

    return (
        <Wrapper height={height}>
            <ScrollbarContainer data-timeline-scrollbar="true">
                <ScrollbarTrack ref={trackRef}>
                    <ScrollbarRange left={rangeLeft} width={rangeWidth} onPointerDown={(e) => beginDrag(e, 'move')}>
                        <ScrollbarHandleStart
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                beginDrag(e, 'left');
                            }}
                        />
                        <RangeFill />
                        <ScrollbarHandleEnd
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                beginDrag(e, 'right');
                            }}
                        />
                    </ScrollbarRange>
                </ScrollbarTrack>
            </ScrollbarContainer>
            <Container ref={scrollContainerRef}>
                <TopLeft />
                <TopRight>
                    <RulerContainer scale={internalScale} duration={timelineDuration}>
                        <TimelineRuler
                            scale={internalScale}
                            length={timelineDuration}
                            numberedGraduationsDistance={40}
                        />
                    </RulerContainer>
                    <TimelinePlayhead
                        currentTime={currentTime}
                        scale={internalScale}
                        timelineHeight={timelineGridHeight}
                        onTimeChange={onTimeChange}
                    />
                </TopRight>

                <BottomLeft>
                    {tracks.map((track) => (
                        <React.Fragment key={track.id}>
                            {/* Track header */}
                            <TrackRow>
                                <LayerTreeItemParent
                                    icon={<FolderIcon size={16} />}
                                    label={track.title}
                                    selected={track.selected}
                                    expanded={true}
                                    onClick={() => handleTrackClick(track.id)}
                                    editable={true}
                                />
                            </TrackRow>

                            {/* Keyframe properties */}
                            {track.keyframeProps.map((keyframeProp) => (
                                <KeyframeRow key={keyframeProp.id}>
                                    <LayerTreeItemChild
                                        label={keyframeProp.label}
                                        selected={false}
                                        onSelect={() => handleKeyframeClick(keyframeProp.id)}
                                        editable={false}
                                    />
                                </KeyframeRow>
                            ))}
                        </React.Fragment>
                    ))}
                </BottomLeft>

                <BottomRight>
                    <TimelineContent scale={internalScale} duration={timelineDuration} data-timeline-content="true">
                        {tracks.map((track) => (
                            <React.Fragment key={track.id}>
                                {/* Track bar */}
                                <TrackRow>
                                    <TimelineTrack
                                        start={track.start}
                                        duration={track.duration}
                                        scale={internalScale}
                                        selected={track.selected}
                                    />
                                </TrackRow>

                                {/* Keyframe properties */}
                                {track.keyframeProps.map((keyframeProp) => (
                                    <KeyframeRow key={keyframeProp.id}>
                                        <TimelineTrackKeyframes
                                            scale={internalScale}
                                            keyframes={keyframeProp.keyframes}
                                            selected={false}
                                            onClick={({ id }) => handleKeyframeClick(id)}
                                            onMove={handleKeyframeMove}
                                        />
                                    </KeyframeRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TimelineContent>
                </BottomRight>
            </Container>
        </Wrapper>
    );
};
