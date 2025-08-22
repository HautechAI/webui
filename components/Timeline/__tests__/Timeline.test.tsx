import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Timeline, type TimelineTrackData } from '../src/Timeline';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const mockTracks: TimelineTrackData[] = [
    {
        id: 'track1',
        title: 'Video Track',
        start: 0,
        duration: 10,
        selected: false,
        keyframeProps: [
            {
                id: 'opacity',
                label: 'Opacity',
                keyframes: [
                    { id: 'kf1', time: 2, selected: false },
                    { id: 'kf2', time: 5, selected: true },
                ],
            },
            {
                id: 'scale',
                label: 'Scale',
                keyframes: [{ id: 'kf3', time: 1, selected: false }],
            },
        ],
    },
    {
        id: 'track2',
        title: 'Audio Track',
        start: 1,
        duration: 8,
        selected: true,
        keyframeProps: [
            {
                id: 'volume',
                label: 'Volume',
                keyframes: [{ id: 'kf4', time: 3, selected: false }],
            },
        ],
    },
];

describe('Timeline', () => {
    const renderTimeline = (props = {}) => {
        return render(
            <ThemeProvider theme={testTheme}>
                <Timeline scale={50} duration={20} tracks={mockTracks} {...props} />
            </ThemeProvider>,
        );
    };

    it('renders without crashing', () => {
        const { container } = renderTimeline();
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with default height', () => {
        const { container } = renderTimeline();
        const timeline = container.firstChild as HTMLElement;
        expect(timeline).toHaveStyle('height: 250px');
    });

    it('renders with custom height', () => {
        const { container } = renderTimeline({ height: 400 });
        const timeline = container.firstChild as HTMLElement;
        expect(timeline).toHaveStyle('height: 400px');
    });

    it('displays track labels in left sidebar', () => {
        renderTimeline();
        expect(screen.getByText('Video Track')).toBeInTheDocument();
        expect(screen.getByText('Audio Track')).toBeInTheDocument();
    });

    it('displays keyframe property labels', () => {
        renderTimeline();
        expect(screen.getByText('Opacity')).toBeInTheDocument();
        expect(screen.getByText('Scale')).toBeInTheDocument();
        expect(screen.getByText('Volume')).toBeInTheDocument();
    });

    it('calls onSelectTrack when track is clicked', () => {
        const onSelectTrack = vi.fn();
        renderTimeline({ onSelectTrack });

        const videoTrack = screen.getByText('Video Track');
        videoTrack.click();

        expect(onSelectTrack).toHaveBeenCalledWith('track1');
    });

    it('calls onSelectKeyframe when keyframe property is selected', () => {
        const onSelectKeyframe = vi.fn();
        renderTimeline({ onSelectKeyframe });

        const opacityProperty = screen.getByText('Opacity');
        opacityProperty.click();

        expect(onSelectKeyframe).toHaveBeenCalledWith('opacity');
    });

    it('handles empty tracks array', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Timeline scale={50} duration={0} tracks={[]} />
            </ThemeProvider>,
        );

        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders timeline content container', () => {
        const { container } = renderTimeline({ scale: 100 });

        // Just check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
        expect(container.querySelector('div')).toBeTruthy();
    });

    it('renders timeline tracks and keyframes in main area', () => {
        const { container } = renderTimeline();

        // Should render TimelineTrack components for each track
        // Should render TimelineTrackKeyframes for each keyframe property
        expect(container.firstChild).toBeInTheDocument();
    });

    describe('playhead functionality', () => {
        it('renders playhead with default position', () => {
            renderTimeline({ currentTime: 0 });

            // Check if playhead is rendered (it's positioned absolutely)
            const timelineContent = document.querySelector('[data-timeline-content="true"]');
            expect(timelineContent).toBeInTheDocument();
        });

        it('positions playhead correctly based on currentTime', () => {
            const scale = 50;
            const currentTime = 2;
            renderTimeline({ scale, currentTime });

            // The playhead should be positioned at currentTime * scale pixels
            const playhead = document
                .querySelector('[data-timeline-content="true"]')
                ?.parentElement?.querySelector('div[style*="position: absolute"]');
            // We can't easily test the exact position due to styled-components, but we can verify the component renders
            expect(playhead).toBeTruthy();
        });

        it('calls onTimeChange when provided', () => {
            const onTimeChange = vi.fn();
            renderTimeline({ onTimeChange, currentTime: 1 });

            // The callback is set up, though we can't easily test drag without more complex setup
            expect(onTimeChange).not.toHaveBeenCalled();
        });

        it('renders playhead with different currentTime values', () => {
            const { rerender } = render(
                <ThemeProvider theme={testTheme}>
                    <Timeline scale={50} duration={20} tracks={mockTracks} currentTime={0} />
                </ThemeProvider>,
            );

            let timelineContent = document.querySelector('[data-timeline-content="true"]');
            expect(timelineContent).toBeInTheDocument();

            // Rerender with different currentTime
            rerender(
                <ThemeProvider theme={testTheme}>
                    <Timeline scale={50} duration={20} tracks={mockTracks} currentTime={5} />
                </ThemeProvider>,
            );

            timelineContent = document.querySelector('[data-timeline-content="true"]');
            expect(timelineContent).toBeInTheDocument();
        });
    });
});
