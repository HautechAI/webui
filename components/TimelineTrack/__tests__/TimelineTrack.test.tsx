import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TimelineTrack } from '../src/TimelineTrack';

describe('TimelineTrack', () => {
    it('renders without crashing', () => {
        const mockRefs = {
            startHandlerRef: vi.fn(),
            endHandlerRef: vi.fn(),
            bodyRef: vi.fn(),
        };

        const { container } = render(
            <TimelineTrack
                start={0}
                duration={5}
                scale={20}
                {...mockRefs}
            />
        );
        
        // Component should render successfully
        expect(container.firstChild).toBeInTheDocument();
    });

    it('shows handlers when selected', () => {
        const mockRefs = {
            startHandlerRef: vi.fn(),
            endHandlerRef: vi.fn(),  
            bodyRef: vi.fn(),
        };

        const { container } = render(
            <TimelineTrack
                start={0}
                duration={5}
                scale={20}
                selected={true}
                {...mockRefs}
            />
        );
        
        // When selected, handlers should be present (they have cursor: col-resize in CSS)
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Check that the track has child elements (handlers)
        expect(track?.children.length).toBeGreaterThan(0);
    });

    it('shows handlers when hovered', () => {
        const mockRefs = {
            startHandlerRef: vi.fn(),
            endHandlerRef: vi.fn(),
            bodyRef: vi.fn(),
        };

        const { container } = render(
            <TimelineTrack
                start={0}
                duration={5}
                scale={20}
                hovered={true}
                {...mockRefs}
            />
        );
        
        // When hovered, handlers should be present (they have cursor: col-resize in CSS)  
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Check that the track has child elements (handlers)
        expect(track?.children.length).toBeGreaterThan(0);
    });

    it('does not show handlers when not selected or hovered', () => {
        const mockRefs = {
            startHandlerRef: vi.fn(),
            endHandlerRef: vi.fn(),
            bodyRef: vi.fn(),
        };

        const { container } = render(
            <TimelineTrack
                start={0}
                duration={5}
                scale={20}
                selected={false}
                hovered={false}
                {...mockRefs}
            />
        );
        
        // When not selected or hovered, no handlers should be present
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Check that the track has no child elements (no handlers)
        expect(track?.children.length).toBe(0);
    });
});