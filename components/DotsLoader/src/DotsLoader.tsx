import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { keyframes } from '@emotion/react';
import React from 'react';

export type DotsLoaderProps = {
    className?: string;
    /** Animation speed in seconds. Default is 3 seconds. */
    speed?: number;
    testId?: string;
};

const pulseAnimation = keyframes`
    0% {
        width: 8px;
        height: 8px;
        background-color: ${themeVars.actions.secondary};
        top: 2px;
    }
    33% {
        width: 10px;
        height: 10px;
        background-color: ${themeVars.actions.primary};
        top: 0px;
    }
    66% {
        width: 8px;
        height: 8px;
        background-color: ${themeVars.actions.secondary};
        top: 2px;
    }
    100% {
        width: 8px;
        height: 8px;
        background-color: ${themeVars.actions.secondary};
        top: 2px;
    }
`;

const Container = styled.div<{ speed: number }>`
    width: 36px;
    height: 10px;
    position: relative;
    display: inline-block;
    --animation-duration: ${({ speed }) => speed}s;
`;

const Dot = styled.div<{ delay: number }>`
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    background-color: ${themeVars.actions.secondary};
    border-radius: ${themeVars.cornerRadius.xxl};
    animation: ${pulseAnimation} var(--animation-duration) ${themeVars.animation.timing.easeInOut} infinite;
    animation-delay: ${({ delay }) => delay}s;
    transition: all ${themeVars.animation.duration.fast}s ${themeVars.animation.timing.easeOut};

    &[data-dot='1'] {
        left: 0px;
    }

    &[data-dot='2'] {
        left: 14px;
    }

    &[data-dot='3'] {
        left: 28px;
    }
`;

export const DotsLoader = (props: DotsLoaderProps) => {
    const { className, speed = 3 } = props;

    // Calculate delays as fractions of the total speed
    const delay1 = 0;
    const delay2 = speed / 3;
    const delay3 = (speed * 2) / 3;

    return (
        <Container className={className} speed={speed} data-testid={props.testId || testId}>
            <Dot data-dot="1" delay={delay1} />
            <Dot data-dot="2" delay={delay2} />
            <Dot data-dot="3" delay={delay3} />
        </Container>
    );
};
