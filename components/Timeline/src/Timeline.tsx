import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { TimelineTrack, TimelineTrackKeyframes } from '@hautechai/webui.timelinetrack';
import { LayerTreeItemParent } from '@hautechai/webui.layertreeitemparent';
import { LayerTreeItemChild } from '@hautechai/webui.layertreeitemchild';
import { FolderIcon } from '@hautechai/webui.icon';
import { TimelineRuler } from '@hautechai/webui.timelineruler';
import { TimelinePlayhead } from './TimelinePlayhead';
import { TimelineScrollbar } from './TimelineScrollbar';
import { SIDEBAR_WIDTH, EXTRA_END_PADDING } from './constants';

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
    /** Called when a track is moved or resized */
    onMoveTrack?: (trackId: string, start: number, duration: number) => void;
    /** Called when a keyframe is moved */
    onMoveKeyframe?: (keyframeId: string, time: number) => void;
    /** Called when a track is renamed */
    onRenameTrack?: (trackId: string, newTitle: string) => void;
    /** Called when playhead time changes */
    onTimeChange?: (time: number) => void;
    /** Called when user adjusts scale via custom scrollbar */
    onScaleChange?: (scale: number) => void;
    /** Called when track move/resize operation starts */
    onStartMoveTrack?: (trackId: string) => void;
    /** Called when track move/resize operation finishes */
    onFinishMoveTrack?: (trackId: string, start: number, duration: number) => void;
    /** Called when keyframe move operation starts */
    onStartMoveKeyframe?: (keyframeId: string) => void;
    /** Called when keyframe move operation finishes */
    onFinishMoveKeyframe?: (keyframeId: string, time: number) => void;
    /** Test ID for component testing */
    testId?: string;
}

// Wrapper that now reserves 24px for the custom scrollbar area above the timeline grid
const Wrapper = styled.div<{ height: number }>`
    display: flex;
    flex-direction: column;
    height: ${(p) => p.height}px;
    width: 100%;
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
    onMoveTrack: onMoveTrack,
    onMoveKeyframe,
    onRenameTrack,
    onTimeChange,
    onScaleChange,
    onStartMoveTrack,
    onFinishMoveTrack,
    onStartMoveKeyframe,
    onFinishMoveKeyframe,
    testId,
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

    const handleKeyframeStartMove = (keyframeId: string) => {
        onStartMoveKeyframe?.(keyframeId);
    };

    const handleKeyframeFinishMove = (keyframeId: string, time: number) => {
        onFinishMoveKeyframe?.(keyframeId, time);
    };

    const handleTrackRename = (trackId: string, newTitle: string) => {
        onRenameTrack?.(trackId, newTitle);
    };

    const handleTrackStartMove = (trackId: string) => {
        onStartMoveTrack?.(trackId);
    };

    const handleTrackFinishMove = (trackId: string, start: number, duration: number) => {
        onFinishMoveTrack?.(trackId, start, duration);
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

    const applyScale = React.useCallback(
        (newScale: number) => {
            const clamped = Math.max(0.1, Math.min(newScale, 5000));
            setInternalScale(clamped);
            onScaleChange?.(clamped);
        },
        [onScaleChange],
    );

    // Recalculate initial scale if entire timeline should fit (initial mount only)
    React.useEffect(() => {
        if (!scrollContainerRef.current) return;
        const viewportWidth = scrollContainerRef.current.clientWidth - SIDEBAR_WIDTH;
        if (viewportWidth > 0 && timelineDuration > 0) {
            const fitScale = viewportWidth / timelineDuration;
            if (scale === internalScale && internalScale > fitScale) {
                applyScale(fitScale);
            }
        }
    }, []);

    return (
        <Wrapper height={height} data-testid={testId}>
            <TimelineScrollbar
                duration={timelineDuration}
                scale={internalScale}
                onScaleChange={applyScale}
                scrollContainerRef={scrollContainerRef}
            />
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
                                    onChange={(newTitle) => handleTrackRename(track.id, newTitle)}
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
                                        onSelect={() => handleTrackClick(track.id)}
                                        onChange={(newStart, newDuration) =>
                                            onMoveTrack?.(track.id, newStart, newDuration)
                                        }
                                        onStartMove={() => handleTrackStartMove(track.id)}
                                        onFinishMove={(start, duration) =>
                                            handleTrackFinishMove(track.id, start, duration)
                                        }
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
                                            onStartMove={handleKeyframeStartMove}
                                            onFinishMove={handleKeyframeFinishMove}
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
