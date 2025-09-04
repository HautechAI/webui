import React, { useMemo } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export type TimelineRulerProps = {
    /** Pixels per second - determines the scale of the ruler */
    scale: number;
    /** Total length of the timeline in seconds */
    length: number;
    /** Distance between numbered graduations in pixels */
    numberedGraduationsDistance: number;
    testId?: string;
};

const StyledRuler = styled.div`
    padding: ${themeVars.spacing.xs} ${themeVars.spacing.m};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
`;

const StyledTimelineRuler = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledRulerSection = styled.div`
    flex: 1 1 0;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const StyledFrameLine = styled.div<{ $width: number }>`
    width: ${(props) => props.$width}px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
`;

const StyledLine = styled.div`
    width: ${themeVars.stroke.thin};
    height: 12px;
    background: ${themeVars.layout.onSurface.tertiary};
`;

const StyledSmallLine = styled.div`
    width: ${themeVars.stroke.thin};
    height: 2.4px; /* 1/5 of the regular line height (12px / 5 = 2.4px) */
    background: ${themeVars.layout.onSurface.tertiary};
`;

const StyledTimeLabel = styled(Typography)`
    color: ${themeVars.layout.onSurface.tertiary};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`;

// Helper function to determine appropriate time intervals for numbered graduations
const getTimeInterval = (totalSeconds: number, numberedGraduationsDistance: number, scale: number): number => {
    // Available scale division values as specified
    const scaleIntervals = [0.01, 0.1, 1, 10];

    // Find the smallest interval where distance between numbered graduations >= numberedGraduationsDistance
    for (const interval of scaleIntervals) {
        const distanceBetweenGraduations = interval * scale;
        if (distanceBetweenGraduations >= numberedGraduationsDistance) {
            return interval;
        }
    }

    // Fallback to the largest interval if none satisfy the condition
    return scaleIntervals[scaleIntervals.length - 1];
};

// Helper function to format time labels
const formatTimeLabel = (seconds: number): string => {
    if (seconds === 0) {
        return '0s';
    } else if (seconds < 1) {
        return `${seconds.toFixed(1)}s`;
    } else if (seconds === Math.floor(seconds)) {
        return `${Math.floor(seconds)}s`;
    } else {
        return `${seconds.toFixed(1)}s`;
    }
};

export const TimelineRuler: React.FC<TimelineRulerProps> = (props) => {
    const { scale, length, numberedGraduationsDistance, testId } = props;

    const graduationData = useMemo(() => {
        const timeInterval = getTimeInterval(length, numberedGraduationsDistance, scale);
        const numberedGraduations: number[] = [];

        // Generate numbered graduations that fit within the length
        let currentTime = 0;
        while (currentTime <= length) {
            numberedGraduations.push(currentTime);
            currentTime += timeInterval;
        }

        // Calculate section width (distance between numbered graduations in pixels)
        const sectionWidth = timeInterval * scale;
        const subGraduationWidth = sectionWidth / 5; // 5 divisions per section (4 unnumbered + 1 numbered)

        // Calculate how many additional unnumbered graduations we need after the last numbered graduation
        const lastNumberedTime = numberedGraduations[numberedGraduations.length - 1];
        const remainingTime = length - lastNumberedTime;
        const subGraduationTimeInterval = timeInterval / 5; // Each unnumbered graduation represents this much time
        const additionalUnnumberedGraduations = Math.floor(remainingTime / subGraduationTimeInterval);

        // Calculate total ruler width (should always be scale * length)
        const totalWidth = length * scale;

        return {
            numberedGraduations,
            timeInterval,
            sectionWidth,
            subGraduationWidth,
            additionalUnnumberedGraduations,
            totalWidth,
        };
    }, [scale, length, numberedGraduationsDistance]);

    const { numberedGraduations, subGraduationWidth, additionalUnnumberedGraduations } = graduationData;

    return (
        <StyledRuler data-testid={testId}>
            <StyledTimelineRuler style={{ width: `${graduationData.totalWidth}px` }}>
                {numberedGraduations.map((time, index) => {
                    const isLast = index === numberedGraduations.length - 1;

                    return (
                        <StyledRulerSection key={time}>
                            {/* Numbered graduation with label and small line */}
                            <StyledFrameLine $width={subGraduationWidth}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <StyledTimeLabel variant="CaptionRegular">{formatTimeLabel(time)}</StyledTimeLabel>
                                    <StyledSmallLine />
                                </div>
                            </StyledFrameLine>

                            {/* Unnumbered graduations (only if not the last section) */}
                            {!isLast && (
                                <>
                                    <StyledFrameLine $width={subGraduationWidth}>
                                        <StyledLine />
                                    </StyledFrameLine>
                                    <StyledFrameLine $width={subGraduationWidth}>
                                        <StyledLine />
                                    </StyledFrameLine>
                                    <StyledFrameLine $width={subGraduationWidth}>
                                        <StyledLine />
                                    </StyledFrameLine>
                                    <StyledFrameLine $width={subGraduationWidth}>
                                        <StyledLine />
                                    </StyledFrameLine>
                                </>
                            )}

                            {/* Additional unnumbered graduations after the last numbered graduation */}
                            {isLast && additionalUnnumberedGraduations > 0 && (
                                <>
                                    {Array.from({ length: additionalUnnumberedGraduations }).map(
                                        (_, unnumberedIndex) => (
                                            <StyledFrameLine
                                                key={`additional-${unnumberedIndex}`}
                                                $width={subGraduationWidth}
                                            >
                                                <StyledLine />
                                            </StyledFrameLine>
                                        ),
                                    )}
                                </>
                            )}
                        </StyledRulerSection>
                    );
                })}
            </StyledTimelineRuler>
        </StyledRuler>
    );
};
