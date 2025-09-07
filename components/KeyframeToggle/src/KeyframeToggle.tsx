import { DiamondIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React from 'react';

export type KeyframeToggleState = 'noKeyframes' | 'hasKeyframes' | 'isKeyframe';

export type KeyframeToggleProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    state: KeyframeToggleState;
    disabled?: boolean;
    testId?: string;
};

const StyledButton = styled('button')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    /* State variants */
    &[data-state='noKeyframes'] {
        color: ${themeVars.layout.onSurface.secondary};

        &:hover:not(:disabled) {
            color: ${themeVars.layout.onSurface.primary};
        }
    }

    &[data-state='hasKeyframes'],
    &[data-state='isKeyframe'] {
        color: ${themeVars.actions.primary};

        &:hover:not(:disabled) {
            color: ${themeVars.actions.onSecondary};
        }
    }
`;

export const KeyframeToggle = (props: KeyframeToggleProps) => {
    const { state, onClick, disabled, testId, ...rest } = props;

    // Determine icon style based on state
    const iconStyle = state === 'isKeyframe' ? 'bold' : 'outlined';

    return (
        <StyledButton data-state={state} onClick={onClick} disabled={disabled} data-testid={testId} {...rest}>
            <DiamondIcon size={16} style={iconStyle} color="currentColor" />
        </StyledButton>
    );
};
