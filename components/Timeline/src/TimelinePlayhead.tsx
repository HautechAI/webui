import React, { useRef, useCallback } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface TimelinePlayheadProps {
    /** Current time position in seconds */
    currentTime: number;
    /** Scale in pixels per second */
    scale: number;
    /** Timeline height for the playhead line */
    timelineHeight: number;
    /** Called when playhead position changes */
    onTimeChange?: (time: number) => void;
}

const StyledPlayhead = styled.div<{ $left: number }>`
    width: 2px;
    height: 100%;
    padding-top: 24px;
    left: ${(props) => props.$left}px;
    top: 0;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    pointer-events: none;
    z-index: 30;
`;

const StyledHead = styled.div<{ $isDragging: boolean }>`
    padding-top: 24px;
    left: -7px;
    top: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
    pointer-events: auto;

    &:hover {
        transform: scale(1.1);
    }
`;

const StyledShape = styled.div`
    width: 16px;
    height: 20px;
    background: ${themeVars.actions.primary};
    outline: 1px ${themeVars.layout.surfaceLow} solid;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const StyledLine = styled.div<{ $height: number }>`
    width: 2px;
    height: ${(props) => props.$height}px;
    background: ${themeVars.actions.primary};
    border-radius: 2px;
    outline: 1px ${themeVars.layout.surfaceLow} solid;
    flex: 1 1 0;
`;

export const TimelinePlayhead: React.FC<TimelinePlayheadProps> = ({
    currentTime,
    scale,
    timelineHeight,
    onTimeChange,
}) => {
    const isDraggingRef = useRef(false);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleMouseDown = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();

            if (!onTimeChange) return;

            isDraggingRef.current = true;
            setIsDragging(true);

            const handleMouseMove = (e: MouseEvent) => {
                if (!isDraggingRef.current) return;

                // Get the timeline container to calculate relative position
                const timelineElement = document.querySelector('[data-timeline-content="true"]');
                if (!timelineElement) return;

                const rect = timelineElement.getBoundingClientRect();
                const relativeX = e.clientX - rect.left;
                const newTime = Math.max(0, relativeX / scale);

                onTimeChange(newTime);
            };

            const handleMouseUp = () => {
                isDraggingRef.current = false;
                setIsDragging(false);
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        },
        [scale, onTimeChange],
    );

    const leftPosition = currentTime * scale;

    return (
        <StyledPlayhead $left={leftPosition}>
            <StyledHead $isDragging={isDragging} onMouseDown={handleMouseDown}>
                <StyledShape />
            </StyledHead>
            <StyledLine $height={timelineHeight - 24} />
        </StyledPlayhead>
    );
};
