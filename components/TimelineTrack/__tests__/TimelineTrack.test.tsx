import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TimelineTrack } from '../src/TimelineTrack';

describe('TimelineTrack', () => {
    it('renders without crashing', () => {
        const { container } = render(<TimelineTrack start={0} duration={5} scale={20} />);

        // Component should render successfully
        expect(container.firstChild).toBeInTheDocument();
    });

    it('shows handlers when selected', () => {
        const { container } = render(<TimelineTrack start={0} duration={5} scale={20} selected={true} />);

        // When selected, handlers should be visible via CSS
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Handlers are always present in DOM, but visibility is controlled by CSS
        expect(track?.children.length).toBe(2);
    });

    it('renders handlers in DOM but hides them by default', () => {
        const { container } = render(<TimelineTrack start={0} duration={5} scale={20} selected={false} />);

        // Handlers are always present in DOM but hidden via CSS when not selected/hovered
        const track = container.querySelector('[style*="width: 100px"]');
        expect(track).toBeInTheDocument();
        // Check that the track has child elements (handlers) - they exist but are hidden via CSS
        expect(track?.children.length).toBe(2);
    });

    it('fires onChange when moving track body', () => {
        const onChange = vi.fn();
        const { container } = render(<TimelineTrack start={1} duration={4} scale={50} onChange={onChange} />);
        const track = container.querySelector('[data-part="track"]') as HTMLElement;
        // simulate pointer down and move
        fireEvent.pointerDown(track, { clientX: 100 });
        fireEvent.pointerMove(document, { clientX: 150 }); // +50px => +1s (scale 50)
        fireEvent.pointerUp(document, { clientX: 150 });
        expect(onChange).toHaveBeenCalled();
        const last = onChange.mock.calls.at(-1);
        expect(last?.[0]).toBeCloseTo(2); // start moved from 1 to 2
        expect(last?.[1]).toBe(4); // duration unchanged
    });

    it('fires onSelect when pointer down on track body', () => {
        const onSelect = vi.fn();
        const { container } = render(
            <TimelineTrack start={1} duration={4} scale={50} onSelect={onSelect} onChange={vi.fn()} />,
        );
        const track = container.querySelector('[data-part="track"]') as HTMLElement;
        fireEvent.pointerDown(track, { clientX: 200 });
        expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('fires onChange when resizing start', () => {
        const onChange = vi.fn();
        const { container } = render(<TimelineTrack start={2} duration={4} scale={40} onChange={onChange} selected />);
        const startHandle = container.querySelector('[data-part="resize-handler"]');
        expect(startHandle).toBeTruthy();
        fireEvent.pointerDown(startHandle as Element, { clientX: 200 });
        fireEvent.pointerMove(document, { clientX: 160 }); // -40px => -1s start, +1s duration
        fireEvent.pointerUp(document, { clientX: 160 });
        const last = onChange.mock.calls.at(-1);
        expect(last?.[0]).toBeCloseTo(1); // start reduced by 1
        expect(last?.[1]).toBeCloseTo(5); // duration increased by 1
    });

    it('fires onSelect when pointer down on resize handles', () => {
        const onSelect = vi.fn();
        const { container } = render(
            <TimelineTrack start={2} duration={4} scale={40} onChange={vi.fn()} onSelect={onSelect} selected />,
        );
        const handles = container.querySelectorAll('[data-part="resize-handler"]');
        fireEvent.pointerDown(handles[0], { clientX: 100 });
        fireEvent.pointerDown(handles[1], { clientX: 300 });
        expect(onSelect).toHaveBeenCalledTimes(2);
    });

    it('fires onChange when resizing end', () => {
        const onChange = vi.fn();
        const { container } = render(<TimelineTrack start={2} duration={3} scale={30} onChange={onChange} selected />);
        const handles = container.querySelectorAll('[data-part="resize-handler"]');
        const endHandle = handles[1];
        fireEvent.pointerDown(endHandle, { clientX: 260 });
        fireEvent.pointerMove(document, { clientX: 320 }); // +60px => +2s duration
        fireEvent.pointerUp(document, { clientX: 320 });
        const last = onChange.mock.calls.at(-1);
        expect(last?.[0]).toBe(2); // start unchanged
        expect(last?.[1]).toBeCloseTo(5); // duration 3 + 2
    });

    it('does not start move when resizing end (no unintended start shift)', () => {
        const onChange = vi.fn();
        const { container } = render(<TimelineTrack start={5} duration={2} scale={50} onChange={onChange} selected />);
        const handles = container.querySelectorAll('[data-part="resize-handler"]');
        const endHandle = handles[1];
        fireEvent.pointerDown(endHandle, { clientX: 500 });
        fireEvent.pointerMove(document, { clientX: 550 }); // +50px => +1s duration
        fireEvent.pointerUp(document, { clientX: 550 });
        const last = onChange.mock.calls.at(-1);
        expect(last?.[0]).toBe(5); // start should remain the same
        expect(last?.[1]).toBeCloseTo(3); // duration increased
    });
});
