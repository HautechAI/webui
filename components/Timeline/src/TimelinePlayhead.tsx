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

// Container for the playhead that spans ruler and timeline areas
const PlayheadContainer = styled.div<{ $left: number }>`
    position: absolute;
    left: calc((var(--theme-foundation-spacing-m) + ${(props) => props.$left}) * 1px); // currentTime position
    top: 0;
    width: 2px;
    height: 100%;
    pointer-events: none;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Head positioned in ruler area (top 24px)
const StyledHead = styled.div<{ $isDragging: boolean }>`
    position: absolute;
    left: -7px;
    /* top: 2px; // Small offset from top */
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
    pointer-events: auto;
    z-index: 101;
`;

const StyledShape = styled.svg`
    width: 16px;
    height: 22px;
    display: block;
`;

// Line extends from ruler area down through timeline
const StyledLine = styled.div<{ $height: number }>`
    position: absolute;
    top: 2px;
    width: 2px;
    height: ${(props) => props.$height}px;
    background: ${themeVars.actions.primary};
    border-radius: 2px;
    outline: 1px ${themeVars.layout.surfaceLow} solid;
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
        <PlayheadContainer $left={leftPosition}>
            <StyledHead $isDragging={isDragging} onMouseDown={handleMouseDown}>
                <StyledShape
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    aria-hidden="true"
                >
                    <path
                        d="M15.4004 0.5C16.5847 0.500221 17.5 1.50494 17.5 2.6875V15.4971C17.5 16.2728 17.1042 17.0015 16.4434 17.3955L10.043 21.2109C9.3968 21.596 8.6032 21.596 7.95703 21.2109L1.55664 17.3955C0.895842 17.0015 0.500013 16.2728 0.5 15.4971V2.6875C0.500039 1.50494 1.41525 0.500221 2.59961 0.5H15.4004Z"
                        fill={themeVars.actions.primary}
                        stroke={themeVars.layout.surfaceLow}
                    />
                </StyledShape>
            </StyledHead>
            <StyledLine $height={timelineHeight} />
        </PlayheadContainer>
    );
};
