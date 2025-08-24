import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { TimelineTrackKeyframes } from '../src/TimelineTrackKeyframes';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={testTheme}>{component}</ThemeProvider>);
};

describe('TimelineTrackKeyframes', () => {
    const mockKeyframes = [
        { id: 'keyframe1', time: 1, selected: false },
        { id: 'keyframe2', time: 3, selected: true },
        { id: 'keyframe3', time: 5, selected: false },
    ];

    it('renders without crashing', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} />);

        expect(container.firstChild).toBeInTheDocument();
    });

    it('positions keyframes correctly based on scale', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} />);

        // Keyframes should be positioned based on time * scale
        // keyframe1: 1 * 50 = 50px
        // keyframe2: 3 * 50 = 150px
        // keyframe3: 5 * 50 = 250px
        const keyframes = container.querySelectorAll('[data-part="keyframe"]');
        expect(keyframes).toHaveLength(3);

        expect(keyframes[0]).toHaveStyle('left: 50px');
        expect(keyframes[1]).toHaveStyle('left: 150px');
        expect(keyframes[2]).toHaveStyle('left: 250px');
    });

    it('renders connection lines between keyframes', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} />);

        // Should have 2 connection lines (between 3 keyframes)
        const lines = container.querySelectorAll('[data-part="connection-line"]');
        expect(lines).toHaveLength(2);
    });

    it('shows selected state for keyframes', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} />);

        const keyframes = container.querySelectorAll('[data-part="keyframe"]');

        // Only keyframe2 should be selected
        expect(keyframes[0]).toHaveAttribute('data-selected', 'false');
        expect(keyframes[1]).toHaveAttribute('data-selected', 'true');
        expect(keyframes[2]).toHaveAttribute('data-selected', 'false');
    });

    it('shows selected state for connection lines', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} />);

        const lines = container.querySelectorAll('[data-part="connection-line"]');

        // First line (to keyframe2): should be selected since keyframe2 is selected
        // Second line (to keyframe3): should not be selected since keyframe3 is not selected
        expect(lines[0]).toHaveAttribute('data-selected', 'true');
        expect(lines[1]).toHaveAttribute('data-selected', 'false');
    });

    it('calls onClick when keyframe is clicked', () => {
        const mockOnClick = vi.fn();
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} onClick={mockOnClick} />,
        );

        const keyframes = container.querySelectorAll('[data-part="keyframe"]');
        fireEvent.click(keyframes[0]);

        expect(mockOnClick).toHaveBeenCalledWith({ id: 'keyframe1' });
    });

    it('calls onClick when connection line is clicked', () => {
        const mockOnClick = vi.fn();
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} onClick={mockOnClick} />,
        );

        const lines = container.querySelectorAll('[data-part="connection-line"]');
        fireEvent.click(lines[0]);

        // Clicking a line should trigger onClick for the keyframe that the line connects to
        expect(mockOnClick).toHaveBeenCalledWith({ id: 'keyframe2' });
    });

    it('shows container selected state', () => {
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={mockKeyframes} selected={true} />,
        );

        expect(container.firstChild).toHaveAttribute('data-selected', 'true');
    });

    it('handles empty keyframes array', () => {
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={[]} />);

        const keyframes = container.querySelectorAll('[data-part="keyframe"]');
        const lines = container.querySelectorAll('[data-part="connection-line"]');

        expect(keyframes).toHaveLength(0);
        expect(lines).toHaveLength(0);
    });

    it('handles single keyframe', () => {
        const singleKeyframe = [{ id: 'keyframe1', time: 2, selected: false }];
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={singleKeyframe} />);

        const keyframes = container.querySelectorAll('[data-part="keyframe"]');
        const lines = container.querySelectorAll('[data-part="connection-line"]');

        expect(keyframes).toHaveLength(1);
        expect(lines).toHaveLength(0); // No lines for single keyframe
    });

    it('sorts keyframes by time', () => {
        const unsortedKeyframes = [
            { id: 'keyframe2', time: 5, selected: false },
            { id: 'keyframe1', time: 1, selected: false },
            { id: 'keyframe3', time: 3, selected: false },
        ];

        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={unsortedKeyframes} />);

        const keyframes = container.querySelectorAll('[data-part="keyframe"]');

        // Should be positioned in time order: 50px, 150px, 250px
        expect(keyframes[0]).toHaveStyle('left: 50px');
        expect(keyframes[1]).toHaveStyle('left: 150px');
        expect(keyframes[2]).toHaveStyle('left: 250px');
    });

    it('calls onStartMove when keyframe drag starts', () => {
        const onStartMove = vi.fn();
        const keyframes = [{ id: 'keyframe1', time: 2, selected: false }];
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={keyframes} onStartMove={onStartMove} />,
        );

        const keyframe = container.querySelector('[data-part="keyframe"]');
        fireEvent.mouseDown(keyframe!, { clientX: 100 });

        expect(onStartMove).toHaveBeenCalledWith('keyframe1');
    });

    it('calls onFinishMove when keyframe drag ends', () => {
        const onFinishMove = vi.fn();
        const keyframes = [{ id: 'keyframe1', time: 2, selected: false }];
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={keyframes} onFinishMove={onFinishMove} />,
        );

        const keyframe = container.querySelector('[data-part="keyframe"]');
        fireEvent.mouseDown(keyframe!, { clientX: 100 });
        fireEvent.mouseUp(document, { clientX: 150 });

        expect(onFinishMove).toHaveBeenCalledWith('keyframe1', 2);
    });

    it('works without onStartMove and onFinishMove callbacks', () => {
        const keyframes = [{ id: 'keyframe1', time: 2, selected: false }];
        const { container } = renderWithTheme(<TimelineTrackKeyframes scale={50} keyframes={keyframes} />);

        const keyframe = container.querySelector('[data-part="keyframe"]');

        expect(() => {
            fireEvent.mouseDown(keyframe!, { clientX: 100 });
            fireEvent.mouseUp(document, { clientX: 150 });
        }).not.toThrow();
    });

    it('calls both onMove and onStartMove/onFinishMove during keyframe operations', () => {
        const onMove = vi.fn();
        const onStartMove = vi.fn();
        const onFinishMove = vi.fn();
        const keyframes = [{ id: 'keyframe1', time: 2, selected: false }];
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes
                scale={50}
                keyframes={keyframes}
                onMove={onMove}
                onStartMove={onStartMove}
                onFinishMove={onFinishMove}
            />,
        );

        const keyframe = container.querySelector('[data-part="keyframe"]');

        fireEvent.mouseDown(keyframe!, { clientX: 100 });
        expect(onStartMove).toHaveBeenCalledWith('keyframe1');

        fireEvent.mouseMove(document, { clientX: 120 });
        expect(onMove).toHaveBeenCalled();

        fireEvent.mouseUp(document, { clientX: 120 });
        expect(onFinishMove).toHaveBeenCalledWith('keyframe1', 2.4);
    });

    it('calls onStartMove with correct keyframe ID for different keyframes', () => {
        const onStartMove = vi.fn();
        const keyframes = [
            { id: 'keyframe1', time: 1, selected: false },
            { id: 'keyframe2', time: 3, selected: false },
        ];
        const { container } = renderWithTheme(
            <TimelineTrackKeyframes scale={50} keyframes={keyframes} onStartMove={onStartMove} />,
        );

        const keyframeElements = container.querySelectorAll('[data-part="keyframe"]');

        // Start dragging first keyframe
        fireEvent.mouseDown(keyframeElements[0], { clientX: 50 });
        expect(onStartMove).toHaveBeenCalledWith('keyframe1');

        // Start dragging second keyframe
        fireEvent.mouseDown(keyframeElements[1], { clientX: 150 });
        expect(onStartMove).toHaveBeenCalledWith('keyframe2');
    });
});
