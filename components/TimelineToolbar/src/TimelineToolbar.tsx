import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { IconButton } from '@hautechai/webui.iconbutton';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import {
    SkipToStartIcon,
    RewindBackIcon,
    PlayIcon,
    PauseIcon,
    RewindForwardIcon,
    SkipToEndIcon,
    RepeatIcon,
} from '@hautechai/webui.icon';

export interface TimelineToolbarProps {
    /** Current playback time in seconds */
    currentTime: number;
    /** Whether repeat is enabled */
    repeatEnabled: boolean;
    /** Whether the player is currently playing */
    isPlaying?: boolean;
    /** Callback when skip to start button is clicked */
    onSkipToStart?: () => void;
    /** Callback when rewind back button is clicked */
    onRewindBack?: () => void;
    /** Callback when play/pause button is clicked */
    onPlayPause?: () => void;
    /** Callback when rewind forward button is clicked */
    onRewindForward?: () => void;
    /** Callback when skip to end button is clicked */
    onSkipToEnd?: () => void;
    /** Callback when repeat button is toggled */
    onRepeatToggle?: () => void;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: ${themeVars.spacing.m};
    background: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.m};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
`;

const Tools = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    display: inline-flex;
`;

const Duration = styled.div`
    padding-left: ${themeVars.spacing.m};
    padding-right: ${themeVars.spacing.m};
    padding-top: ${themeVars.spacing.xs};
    padding-bottom: ${themeVars.spacing.xs};
    border-radius: ${themeVars.cornerRadius.m};
    justify-content: center;
    align-items: center;
    display: flex;
`;

const PlaybackControls = styled.div`
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

// Helper function to format seconds to HH:MM:SS
const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const TimelineToolbar: React.FC<TimelineToolbarProps> = ({
    currentTime,
    repeatEnabled,
    isPlaying = false,
    onSkipToStart,
    onRewindBack,
    onPlayPause,
    onRewindForward,
    onSkipToEnd,
    onRepeatToggle,
}) => {
    return (
        <Container>
            <Tools>
                <Duration>
                    <Typography variant="LabelMediumRegular">{formatTime(currentTime)}</Typography>
                </Duration>
                <PlaybackControls>
                    <IconButton
                        variant="flat"
                        size="small"
                        icon={<SkipToStartIcon size={16} />}
                        onClick={onSkipToStart}
                    />
                    <IconButton
                        variant="flat"
                        size="small"
                        icon={<RewindBackIcon size={16} />}
                        onClick={onRewindBack}
                    />
                    <IconButton
                        variant="flat"
                        size="small"
                        icon={isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
                        onClick={onPlayPause}
                    />
                    <IconButton
                        variant="flat"
                        size="small"
                        icon={<RewindForwardIcon size={16} />}
                        onClick={onRewindForward}
                    />
                    <IconButton variant="flat" size="small" icon={<SkipToEndIcon size={16} />} onClick={onSkipToEnd} />
                    <ToggleIconButton
                        variant="flat"
                        size="small"
                        icon={<RepeatIcon size={16} />}
                        checked={repeatEnabled}
                        onClick={onRepeatToggle}
                    />
                </PlaybackControls>
            </Tools>
        </Container>
    );
};
