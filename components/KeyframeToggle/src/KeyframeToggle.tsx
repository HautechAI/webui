import { DiamondIcon } from '@hautechai/webui.icon';
import { css } from '@linaria/core';
import { themeVars } from '@hautechai/webui.themeprovider';
import React from 'react';

export type KeyframeToggleState = 'noKeyframes' | 'hasKeyframes' | 'isKeyframe';

export type KeyframeToggleProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    state: KeyframeToggleState;
};

// Base styles for the toggle button
const baseButton = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    transition: 
        color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

// State-specific styles
const noKeyframesStyle = css`
    color: ${themeVars.layout.onSurface.secondary};

    &:hover:not(:disabled) {
        color: ${themeVars.layout.onSurface.primary};
    }
`;

const hasKeyframesStyle = css`
    color: ${themeVars.actions.primary};

    &:hover:not(:disabled) {
        color: ${themeVars.actions.onSecondary};
    }
`;

const isKeyframeStyle = css`
    color: ${themeVars.actions.primary};

    &:hover:not(:disabled) {
        color: ${themeVars.actions.onSecondary};
    }
`;

const stateStyles = {
    noKeyframes: noKeyframesStyle,
    hasKeyframes: hasKeyframesStyle,
    isKeyframe: isKeyframeStyle,
};

export const KeyframeToggle = (props: KeyframeToggleProps) => {
    const { state, onClick, ...rest } = props;
    
    // Determine icon style based on state
    const iconStyle = state === 'isKeyframe' ? 'bold' : 'outlined';
    
    const buttonClassName = [
        baseButton,
        stateStyles[state],
    ].join(' ');

    return (
        <button 
            className={buttonClassName}
            onClick={onClick}
            {...rest}
        >
            <DiamondIcon 
                size={20}
                style={iconStyle}
                color="currentColor"
            />
        </button>
    );
};