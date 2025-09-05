import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React from 'react';

export type ToolButtonProps = {
    icon: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    testId?: string;
};

// Styled components
const StyledButton = styled(ButtonBase)`
    width: ${themeVars.spacing.xxl};
    height: ${themeVars.spacing.xxl};
    padding: ${themeVars.spacing.s};
    border-radius: ${themeVars.cornerRadius.m};
    border: none;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    transition: background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    /* Default state */
    background-color: transparent;
    color: ${themeVars.layout.onSurface.secondary};

    &:hover:not(:disabled) {
        background-color: ${themeVars.layout.surfaceMid};
    }

    &[data-selected='true'] {
        background-color: ${themeVars.actions.secondary};
        color: ${themeVars.actions.onSecondary};
    }

    &[data-selected='true']:hover:not(:disabled) {
        background-color: ${themeVars.actions.secondary};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const IconContainer = styled('div')`
    width: ${themeVars.spacing.xl};
    height: ${themeVars.spacing.xl};
    justify-content: center;
    align-items: center;
    display: flex;
    /* children (icons) inherit currentColor */
`;

// Helper function to inject size into icon using theme values
const getIcon = (icon: React.ReactNode) => (
    <IconContainer>
        {React.Children.map(icon, (child) => {
            if (React.isValidElement<{ size: number }>(child)) {
                return React.cloneElement(child, {
                    size: 24,
                });
            }
            return child;
        })}
    </IconContainer>
);

export const ToolButton = (props: ToolButtonProps) => {
    const { selected = false, icon, testId, ...rest } = props;

    return (
        <StyledButton data-selected={selected ? 'true' : undefined} testId={testId} {...rest}>
            {getIcon(icon)}
        </StyledButton>
    );
};
