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
};

const StyledRuler = styled.div`
    width: 100%;
    height: 100%;
    padding: ${themeVars.spacing.xs} ${themeVars.spacing.m};
    border-bottom: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

const StyledSecond = styled.div<{ $width: number }>`
    width: ${(props) => props.$width}px;
    justify-content: flex-start;
    align-items: flex-start;
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

const StyledTimeLabel = styled(Typography)`
    color: ${themeVars.layout.onSurface.tertiary};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`;

// Helper function to determine appropriate time intervals for numbered graduations
const getTimeInterval = (totalSeconds: number, numberedGraduationsDistance: number, scale: number): number => {
    // Calculate how many numbered graduations we can fit
    const totalWidth = totalSeconds * scale;
    const maxGraduations = Math.floor(totalWidth / numberedGraduationsDistance);

    if (maxGraduations <= 1) return totalSeconds;

    // Calculate ideal time interval
    const idealInterval = totalSeconds / maxGraduations;

    // Choose from standard intervals: 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, etc.
    const standardIntervals = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];

    // Find the best standard interval that's close to our ideal
    let bestInterval = standardIntervals[0];
    let minDiff = Math.abs(idealInterval - bestInterval);

    for (const interval of standardIntervals) {
        const diff = Math.abs(idealInterval - interval);
        if (diff < minDiff) {
            minDiff = diff;
            bestInterval = interval;
        }
    }

    return bestInterval;
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
    const { scale, length, numberedGraduationsDistance } = props;

    const graduationData = useMemo(() => {
        const timeInterval = getTimeInterval(length, numberedGraduationsDistance, scale);
        const numberedGraduations: number[] = [];

        // Generate numbered graduations
        let currentTime = 0;
        while (currentTime <= length) {
            numberedGraduations.push(currentTime);
            currentTime += timeInterval;
        }

        // Calculate section width (distance between numbered graduations in pixels)
        const sectionWidth = timeInterval * scale;
        const subGraduationWidth = sectionWidth / 5; // 5 divisions per section (4 unnumbered + 1 numbered)

        return {
            numberedGraduations,
            timeInterval,
            sectionWidth,
            subGraduationWidth,
        };
    }, [scale, length, numberedGraduationsDistance]);

    const { numberedGraduations, subGraduationWidth } = graduationData;

    return (
        <StyledRuler>
            <StyledTimelineRuler>
                {numberedGraduations.map((time, index) => {
                    const isLast = index === numberedGraduations.length - 1;

                    return (
                        <StyledRulerSection key={time}>
                            {/* Numbered graduation with label */}
                            <StyledSecond $width={24}>
                                <StyledTimeLabel variant="CaptionRegular">{formatTimeLabel(time)}</StyledTimeLabel>
                            </StyledSecond>

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
                        </StyledRulerSection>
                    );
                })}
            </StyledTimelineRuler>
        </StyledRuler>
    );
};
