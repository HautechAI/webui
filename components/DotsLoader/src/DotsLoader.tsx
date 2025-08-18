import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { keyframes } from '@emotion/react';
import React from 'react';

export type DotsLoaderProps = {
    className?: string;
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

const Container = styled.div`
    width: 36px;
    height: 10px;
    position: relative;
    display: inline-block;
`;

const Dot = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    background-color: ${themeVars.actions.secondary};
    border-radius: ${themeVars.cornerRadius.xxl};
    animation: ${pulseAnimation} 3s ${themeVars.animation.timing.easeInOut} infinite;
    transition: all ${themeVars.animation.duration.fast}s ${themeVars.animation.timing.easeOut};

    &[data-dot='1'] {
        left: 0px;
        animation-delay: 0s;
    }

    &[data-dot='2'] {
        left: 14px;
        animation-delay: 1s;
    }

    &[data-dot='3'] {
        left: 28px;
        animation-delay: 2s;
    }
`;

export const DotsLoader = (props: DotsLoaderProps) => {
    return (
        <Container className={props.className}>
            <Dot data-dot="1" />
            <Dot data-dot="2" />
            <Dot data-dot="3" />
        </Container>
    );
};
