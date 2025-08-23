import React from 'react';
import { styled, themeVars } from '@hautechai/webui.themeprovider';
import { SIDEBAR_WIDTH, EXTRA_END_PADDING } from './constants';

const ScrollbarContainer = styled.div`
    width: calc(100% - ${SIDEBAR_WIDTH}px);
    padding-left: ${SIDEBAR_WIDTH - 1}px;
    background: ${themeVars.layout.surfaceMid};
    height: 24px;
    position: relative;
    z-index: 30;
    display: flex;
    align-items: center;
    user-select: none;
`;

const ScrollbarTrackContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    width: 100%;
    height: 100%;
    background: transparent;
    border-left: 1px solid ${themeVars.layout.strokes};
`;

const ScrollbarTrack = styled.div`
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    height: 8px;
    background: transparent;
`;

const ScrollbarRange = styled.div<{ left: number; width: number }>`
    position: absolute;
    top: 0;
    height: 8px;
    left: ${(p) => p.left}px;
    width: ${(p) => p.width}px;
    display: flex;
    align-items: center;
    cursor: grab;
`;

const HandleBase = styled.div`
    width: 8px;
    height: 8px;
    background: ${themeVars.layout.onSurface.tertiary};
`;

const RangeFill = styled.div`
    flex: 1 1 auto;
    height: 8px;
    background: ${themeVars.layout.strokes};
`;

const ScrollbarHandleStart = styled(HandleBase)`
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    cursor: ew-resize;
`;

const ScrollbarHandleEnd = styled(HandleBase)`
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    cursor: ew-resize;
`;

export interface TimelineScrollbarProps {
    duration: number;
    scale: number;
    onScaleChange?: (scale: number) => void;
    // Allow nullable initial value; component guards against null internally
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

type DragMode = 'left' | 'right' | 'move' | null;

export const TimelineScrollbar: React.FC<TimelineScrollbarProps> = ({
    duration,
    scale,
    onScaleChange,
    scrollContainerRef,
}) => {
    const trackRef = React.useRef<HTMLDivElement | null>(null);
    // Drag state ref declared early so scroll listener can reference it
    const dragRef = React.useRef<{
        mode: DragMode;
        startX: number;
        startLeft: number;
        startWidth: number;
        trackWidth: number;
        viewportWidth: number;
        contentWidth: number;
    } | null>(null);
    const [rangeLeft, setRangeLeft] = React.useState(0);
    const [rangeWidth, setRangeWidth] = React.useState(0);

    const applyScale = React.useCallback(
        (newScale: number) => {
            const clamped = Math.max(0.1, Math.min(newScale, 5000));
            onScaleChange?.(clamped);
        },
        [onScaleChange],
    );

    const syncRange = React.useCallback(() => {
        const container = scrollContainerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;
        const trackWidth = track.clientWidth;
        const viewportWidth = container.clientWidth - SIDEBAR_WIDTH;
        const timeWidth = duration * scale;
        const contentWidth = timeWidth + EXTRA_END_PADDING;
        if (timeWidth <= 0) return;
        const visibleRatio = Math.min(1, viewportWidth / contentWidth);
        const scrollLeft = container.scrollLeft;
        const newWidth = Math.max(8, visibleRatio * trackWidth);
        const scrollableContent = Math.max(0, contentWidth - viewportWidth);
        if (scrollableContent === 0) {
            setRangeWidth(trackWidth);
            setRangeLeft(0);
            return;
        }
        const maxRangeLeft = trackWidth - newWidth;
        const newLeft = (scrollLeft / scrollableContent) * maxRangeLeft;
        setRangeWidth(newWidth);
        setRangeLeft(newLeft);
    }, [duration, scale, scrollContainerRef]);

    React.useEffect(() => {
        syncRange();
    }, [syncRange]);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const handler = () => {
            // Suppress sync while actively resizing (left/right handles). Allow during 'move'.
            const d = dragRef.current;
            if (d && (d.mode === 'left' || d.mode === 'right')) return;
            syncRange();
        };
        container.addEventListener('scroll', handler);
        window.addEventListener('resize', handler);
        return () => {
            container.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [syncRange, scrollContainerRef]);

    const beginDrag = (e: React.PointerEvent, mode: DragMode) => {
        if (!trackRef.current || !scrollContainerRef.current) return;
        const trackWidth = trackRef.current.clientWidth;
        const viewportWidth = scrollContainerRef.current.clientWidth - SIDEBAR_WIDTH;
        dragRef.current = {
            mode,
            startX: e.clientX,
            startLeft: rangeLeft,
            startWidth: rangeWidth,
            trackWidth,
            viewportWidth,
            contentWidth: duration * scale + EXTRA_END_PADDING,
        };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        e.preventDefault();
    };

    const handlePointerMove = React.useCallback(
        (e: PointerEvent) => {
            const state = dragRef.current;
            if (!state || !scrollContainerRef.current) return;
            const dx = e.clientX - state.startX;
            let newLeft = state.startLeft;
            let newWidth = state.startWidth;
            if (state.mode === 'move') {
                newLeft = Math.min(Math.max(0, state.startLeft + dx), state.trackWidth - state.startWidth);
            }
            if (state.mode === 'left') {
                newLeft = Math.min(Math.max(0, state.startLeft + dx), state.startLeft + state.startWidth - 16);
                newWidth = state.startWidth + (state.startLeft - newLeft);
            }
            if (state.mode === 'right') {
                newWidth = Math.max(16, state.startWidth + dx);
                if (newLeft + newWidth > state.trackWidth) newWidth = state.trackWidth - newLeft;
            }
            setRangeLeft(newLeft);
            setRangeWidth(newWidth);
            const rangeRatioWidthContent = newWidth / state.trackWidth;
            const padding = EXTRA_END_PADDING;
            let newScale = scale;
            if (rangeRatioWidthContent > 0) {
                newScale =
                    (state.viewportWidth - rangeRatioWidthContent * padding) / (rangeRatioWidthContent * duration);
                if (!isFinite(newScale) || newScale <= 0) newScale = scale;
            }
            applyScale(newScale);
            const timeWidth = duration * newScale;
            const contentWidth = timeWidth + EXTRA_END_PADDING;
            const viewportWidth = state.viewportWidth;
            const scrollableContent = Math.max(0, contentWidth - viewportWidth);
            if (scrollableContent > 0) {
                const maxRangeLeft = state.trackWidth - newWidth;
                const normalizedLeft = maxRangeLeft === 0 ? 0 : newLeft / maxRangeLeft;
                scrollContainerRef.current.scrollLeft = normalizedLeft * scrollableContent;
            } else {
                scrollContainerRef.current.scrollLeft = 0;
            }
        },
        [applyScale, duration, scale, scrollContainerRef],
    );

    const handlePointerUp = React.useCallback(() => {
        const wasResizing = !!dragRef.current && (dragRef.current.mode === 'left' || dragRef.current.mode === 'right');
        dragRef.current = null;
        // After resize finished, ensure range is in sync with any scroll adjustments just applied
        if (wasResizing) {
            syncRange();
        }
    }, [syncRange]);

    React.useEffect(() => {
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [handlePointerMove, handlePointerUp]);

    React.useEffect(() => {
        if (!scrollContainerRef.current) return;
        const viewportWidth = scrollContainerRef.current.clientWidth - SIDEBAR_WIDTH;
        if (viewportWidth > 0 && duration > 0) {
            const fitScale = viewportWidth / duration;
            if (scale > fitScale) {
                applyScale(fitScale);
            }
        }
    }, []);

    return (
        <ScrollbarContainer data-timeline-scrollbar="true">
            <ScrollbarTrackContainer>
                <ScrollbarTrack ref={trackRef}>
                    <ScrollbarRange left={rangeLeft} width={rangeWidth} onPointerDown={(e) => beginDrag(e, 'move')}>
                        <ScrollbarHandleStart
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                beginDrag(e, 'left');
                            }}
                        />
                        <RangeFill />
                        <ScrollbarHandleEnd
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                beginDrag(e, 'right');
                            }}
                        />
                    </ScrollbarRange>
                </ScrollbarTrack>
            </ScrollbarTrackContainer>
        </ScrollbarContainer>
    );
};
