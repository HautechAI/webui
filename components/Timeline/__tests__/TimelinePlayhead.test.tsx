import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { TimelinePlayhead } from '../src/TimelinePlayhead';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TimelinePlayhead', () => {
    const defaultProps = {
        currentTime: 0,
        scale: 50,
        timelineHeight: 250,
    };

    const renderPlayhead = (props = {}) => {
        return render(
            <ThemeProvider theme={testTheme}>
                <div style={{ position: 'relative', width: '1000px', height: '250px' }}>
                    <div data-timeline-content="true" style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <TimelinePlayhead {...defaultProps} {...props} />
                    </div>
                </div>
            </ThemeProvider>,
        );
    };

    it('renders playhead component', () => {
        const { container } = renderPlayhead();

        // Check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders playhead with different currentTime', () => {
        const { container } = renderPlayhead({ currentTime: 2 });

        // Check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders playhead at time zero', () => {
        const { container } = renderPlayhead({ currentTime: 0, scale: 50 });

        // Check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders playhead with different scale', () => {
        const { container } = renderPlayhead({ scale: 100 });

        // Check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders playhead with different timeline height', () => {
        const { container } = renderPlayhead({ timelineHeight: 400 });

        // Check that the component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });

    it('handles onTimeChange callback', () => {
        const onTimeChange = vi.fn();
        const { container } = renderPlayhead({ onTimeChange });

        // Check that the component renders with callback
        expect(container.firstChild).toBeInTheDocument();
        expect(onTimeChange).not.toHaveBeenCalled(); // Not called until user interaction
    });

    it('renders without onTimeChange callback', () => {
        const { container } = renderPlayhead({ onTimeChange: undefined });

        // Check that the component renders without callback
        expect(container.firstChild).toBeInTheDocument();
    });

    it('updates when props change', () => {
        const { container, rerender } = render(
            <ThemeProvider theme={testTheme}>
                <div style={{ position: 'relative', width: '1000px', height: '250px' }}>
                    <div data-timeline-content="true" style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <TimelinePlayhead currentTime={1} scale={50} timelineHeight={250} />
                    </div>
                </div>
            </ThemeProvider>,
        );

        expect(container.firstChild).toBeInTheDocument();

        // Rerender with different props
        rerender(
            <ThemeProvider theme={testTheme}>
                <div style={{ position: 'relative', width: '1000px', height: '250px' }}>
                    <div data-timeline-content="true" style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <TimelinePlayhead currentTime={5} scale={80} timelineHeight={300} />
                    </div>
                </div>
            </ThemeProvider>,
        );

        expect(container.firstChild).toBeInTheDocument();
    });
});
