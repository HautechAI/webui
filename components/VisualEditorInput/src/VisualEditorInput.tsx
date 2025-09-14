import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
    flex: 1;
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export type VisualEditorInputProps = {
    children: React.ReactNode;
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    disabled?: boolean;
    size?: 'medium' | 'small';
    testId?: string;
};

export const VisualEditorInput = (props: VisualEditorInputProps) => {
    const size = props.size ?? 'small';

    const handleKeyframeClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // Prevent triggering other events
            props.onToggleKeyframe?.();
        },
        [props.onToggleKeyframe],
    );

    const handlePortClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // Prevent triggering other events
            props.onTogglePort?.();
        },
        [props.onTogglePort],
    );

    // Create port toggle button based on isPort state
    const renderPortToggle = () => {
        if (props.isPort) {
            // When isPort is true, show UnlinkIcon
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<UnlinkIcon size={16} />}
                    onClick={handlePortClick}
                    disabled={props.disabled}
                />
            );
        }

        // When not isPort, show WorkflowIcon
        return (
            <ToggleIconButton
                variant="flat"
                size="xsmall"
                icon={<WorkflowIcon size={16} />}
                onClick={handlePortClick}
                disabled={props.disabled}
            />
        );
    };

    return (
        <Container size={size} data-testid={props.testId}>
            {props.children}
            <ControlsContainer>
                {renderPortToggle()}
                <KeyframeContainer>
                    <KeyframeToggle
                        state={props.keyframesState}
                        onClick={handleKeyframeClick}
                        disabled={props.disabled}
                    />
                </KeyframeContainer>
            </ControlsContainer>
        </Container>
    );
};
