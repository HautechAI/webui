import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { TimelineTrack, TimelineTrackKeyframes } from '@hautechai/webui.timelinetrack';
import { LayerTreeItemParent } from '@hautechai/webui.layertreeitemparent';
import { LayerTreeItemChild } from '@hautechai/webui.layertreeitemchild';
import { FolderIcon } from '@hautechai/webui.icon';

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
    /** Height of the timeline component in pixels */
    height?: number;
    /** Scale in pixels per second */
    scale: number;
    /** Array of track data */
    tracks: TimelineTrackData[];
    /** Called when a track is selected */
    onSelectTrack?: (trackId: string) => void;
    /** Called when a keyframe is selected */
    onSelectKeyframe?: (keyframeId: string) => void;
    /** Called when a track is moved */
    _onMoveTrack?: (trackId: string, start: number, duration: number) => void;
    /** Called when a keyframe is moved */
    onMoveKeyframe?: (keyframeId: string, time: number) => void;
}

// Main container using CSS Grid
const Container = styled.div<{ height: number }>`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 12px 1fr;
    height: ${(props) => props.height}px;
    width: 100%;
    border: 1px solid ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.s};
    overflow: auto;
`;

// Empty top-left cell
const TopLeft = styled.div`
    background: ${themeVars.layout.surfaceHigh};
    border-right: 1px solid ${themeVars.layout.strokes};
    border-bottom: 1px solid ${themeVars.layout.strokes};
`;

// Top-right header for ruler (empty for now)
const TopRight = styled.div`
    background: ${themeVars.layout.surfaceHigh};
    border-bottom: 1px solid ${themeVars.layout.strokes};
    position: sticky;
    top: 0;
    z-index: 2;
`;

// Bottom-left sidebar for track labels
const BottomLeft = styled.div`
    background: ${themeVars.layout.surfaceLow};
    border-right: 1px solid ${themeVars.layout.strokes};
    overflow-y: hidden;
    overflow-x: hidden;
    position: sticky;
    left: 0;
    z-index: 1;
`;

// Bottom-right main scrollable area
const BottomRight = styled.div`
    background: ${themeVars.layout.surfaceLow};
    overflow: hidden;
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
const TimelineContent = styled.div<{ scale: number; maxTime: number }>`
    min-width: ${(props) => props.maxTime * props.scale + 100}px;
    height: 100%;
`;

export const Timeline: React.FC<TimelineProps> = ({
    height = 250,
    scale,
    tracks,
    onSelectTrack,
    onSelectKeyframe,
    _onMoveTrack,
    onMoveKeyframe,
}) => {
    // Calculate maximum time for proper timeline width
    const maxTime = React.useMemo(() => {
        let max = 0;
        tracks.forEach((track) => {
            const trackEnd = track.start + track.duration;
            max = Math.max(max, trackEnd);

            track.keyframeProps.forEach((keyframeProp) => {
                keyframeProp.keyframes.forEach((keyframe) => {
                    max = Math.max(max, keyframe.time);
                });
            });
        });
        return max + 5; // Add some padding
    }, [tracks]);

    const handleTrackClick = (trackId: string) => {
        onSelectTrack?.(trackId);
    };

    const handleKeyframeClick = (keyframeId: string) => {
        onSelectKeyframe?.(keyframeId);
    };

    const handleKeyframeMove = (params: { id: string; time: number }) => {
        onMoveKeyframe?.(params.id, params.time);
    };

    return (
        <Container height={height}>
            <TopLeft />
            <TopRight />

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
                            />
                        </TrackRow>

                        {/* Keyframe properties */}
                        {track.keyframeProps.map((keyframeProp) => (
                            <KeyframeRow key={keyframeProp.id}>
                                <LayerTreeItemChild
                                    label={keyframeProp.label}
                                    selected={false}
                                    onSelect={() => handleKeyframeClick(keyframeProp.id)}
                                />
                            </KeyframeRow>
                        ))}
                    </React.Fragment>
                ))}
            </BottomLeft>

            <BottomRight>
                <TimelineContent scale={scale} maxTime={maxTime}>
                    {tracks.map((track) => (
                        <React.Fragment key={track.id}>
                            {/* Track bar */}
                            <TrackRow>
                                <TimelineTrack
                                    start={track.start}
                                    duration={track.duration}
                                    scale={scale}
                                    selected={track.selected}
                                />
                            </TrackRow>

                            {/* Keyframe properties */}
                            {track.keyframeProps.map((keyframeProp) => (
                                <KeyframeRow key={keyframeProp.id}>
                                    <TimelineTrackKeyframes
                                        scale={scale}
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
    );
};
