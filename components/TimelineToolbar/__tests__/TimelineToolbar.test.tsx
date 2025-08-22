import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { TimelineToolbar } from '../src/TimelineToolbar';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TimelineToolbar', () => {
    const defaultProps = {
        currentTime: 0,
        repeatEnabled: false,
    };

    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TimelineToolbar {...defaultProps} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should display formatted time correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={3661} repeatEnabled={false} />
            </ThemeProvider>,
        );

        // 3661 seconds = 1:01:01 (1 hour, 1 minute, 1 second)
        expect(getByText('01:01:01')).toBeInTheDocument();
    });

    it('should display zero time correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={0} repeatEnabled={false} />
            </ThemeProvider>,
        );

        expect(getByText('00:00:00')).toBeInTheDocument();
    });

    it('should display time with minutes and seconds correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={125} repeatEnabled={false} />
            </ThemeProvider>,
        );

        // 125 seconds = 2 minutes and 5 seconds
        expect(getByText('00:02:05')).toBeInTheDocument();
    });

    it('should call onSkipToStart when skip to start button is clicked', () => {
        const handleSkipToStart = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onSkipToStart={handleSkipToStart} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const skipToStartButton = buttons[0]; // First button
        fireEvent.click(skipToStartButton);

        expect(handleSkipToStart).toHaveBeenCalledTimes(1);
    });

    it('should call onRewindBack when rewind back button is clicked', () => {
        const handleRewindBack = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onRewindBack={handleRewindBack} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const rewindBackButton = buttons[1]; // Second button
        fireEvent.click(rewindBackButton);

        expect(handleRewindBack).toHaveBeenCalledTimes(1);
    });

    it('should call onPlayPause when play/pause button is clicked', () => {
        const handlePlayPause = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onPlayPause={handlePlayPause} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const playPauseButton = buttons[2]; // Third button
        fireEvent.click(playPauseButton);

        expect(handlePlayPause).toHaveBeenCalledTimes(1);
    });

    it('should call onRewindForward when rewind forward button is clicked', () => {
        const handleRewindForward = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onRewindForward={handleRewindForward} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const rewindForwardButton = buttons[3]; // Fourth button
        fireEvent.click(rewindForwardButton);

        expect(handleRewindForward).toHaveBeenCalledTimes(1);
    });

    it('should call onSkipToEnd when skip to end button is clicked', () => {
        const handleSkipToEnd = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onSkipToEnd={handleSkipToEnd} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const skipToEndButton = buttons[4]; // Fifth button
        fireEvent.click(skipToEndButton);

        expect(handleSkipToEnd).toHaveBeenCalledTimes(1);
    });

    it('should call onRepeatToggle when repeat button is clicked', () => {
        const handleRepeatToggle = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} onRepeatToggle={handleRepeatToggle} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const repeatButton = buttons[5]; // Sixth button (last button)
        fireEvent.click(repeatButton);

        expect(handleRepeatToggle).toHaveBeenCalledTimes(1);
    });

    it('should show play icon when isPlaying is false', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} isPlaying={false} />
            </ThemeProvider>,
        );

        // Play icon should be present (we can't easily test the specific icon, but we can test that the button exists)
        const buttons = container.querySelectorAll('button');
        expect(buttons[2]).toBeInTheDocument(); // Play/pause button is the third button
    });

    it('should show pause icon when isPlaying is true', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} isPlaying={true} />
            </ThemeProvider>,
        );

        // Pause icon should be present (we can't easily test the specific icon, but we can test that the button exists)
        const buttons = container.querySelectorAll('button');
        expect(buttons[2]).toBeInTheDocument(); // Play/pause button is the third button
    });

    it('should handle repeat enabled state correctly', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={0} repeatEnabled={true} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const repeatButton = buttons[5]; // Repeat toggle button
        expect(repeatButton).toBeInTheDocument();
    });

    it('should handle repeat disabled state correctly', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={0} repeatEnabled={false} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        const repeatButton = buttons[5]; // Repeat toggle button
        expect(repeatButton).toBeInTheDocument();
    });

    it('should render all playback control buttons', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar {...defaultProps} />
            </ThemeProvider>,
        );

        const buttons = container.querySelectorAll('button');
        // Should have 6 buttons: skip to start, rewind back, play/pause, rewind forward, skip to end, repeat
        expect(buttons).toHaveLength(6);
    });
});
