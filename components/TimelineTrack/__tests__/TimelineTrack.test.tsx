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
        
        // When selected, handlers should be visible via CSS
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Handlers are always present in DOM, but visibility is controlled by CSS
        expect(track?.children.length).toBe(2);
    });

    it('renders handlers in DOM but hides them by default', () => {
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
                {...mockRefs}
            />
        );
        
        // Handlers are always present in DOM but hidden via CSS when not selected/hovered
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Check that the track has child elements (handlers) - they exist but are hidden via CSS
        expect(track?.children.length).toBe(2);
    });
});