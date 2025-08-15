import { ButtonBase } from '../../ButtonBase/src';
import { css } from '@linaria/core';
import { themeVars } from '../../ThemeProvider/src';
import React from 'react';

export type ToolButtonProps = {
    icon: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// Base styles following the Figma pseudo-code structure
const buttonBase = css`
    width: ${themeVars.spacing.xxl}px;
    height: ${themeVars.spacing.xxl}px;
    padding: 4px;
    border-radius: 8px;
    border: none;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    transition: background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

// Default state (not selected, not hovered)
const defaultState = css`
    background-color: transparent;
    
    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
    }
`;

// Selected state
const selectedState = css`
    background-color: ${themeVars.actions.secondary};
    
    &:hover:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
    }
`;

// Icon container - fixed 24x24px as per Figma pseudo-code
const iconContainer = css`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    
    /* Apply color to icon children */
    * {
        color: var(--tool-button-icon-color, ${themeVars.layout.onSurface.secondary});
    }
`;

// Helper function to inject size into icon
const getIcon = (icon: React.ReactNode) => (
    <div className={iconContainer}>
        {React.Children.map(icon, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    size: 24,
                } as any);
            }
            return child;
        })}
    </div>
);

export const ToolButton = (props: ToolButtonProps) => {
    const { selected = false, icon, ...rest } = props;

    const buttonClassName = [
        buttonBase,
        selected ? selectedState : defaultState,
    ].join(' ');

    // Set CSS custom property for icon color based on selected state
    const iconColorVar = selected 
        ? themeVars.actions.onSecondary 
        : themeVars.layout.onSurface.secondary;

    return (
        <span style={{ ['--tool-button-icon-color' as any]: iconColorVar }}>
            <ButtonBase className={buttonClassName} {...rest}>
                {getIcon(icon)}
            </ButtonBase>
        </span>
    );
};