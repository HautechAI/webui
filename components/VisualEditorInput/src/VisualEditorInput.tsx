import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback, useState } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
    flex: 1;
    &[data-disabled='true'] {
        cursor: not-allowed;
        color: ${themeVars.layout.strokes};
    }
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

const InputWrapper = styled.div`
    flex: 1;
    position: relative;
`;

const HoverControlsContainer = styled.div`
    position: absolute;
    right: ${themeVars.spacing.s};
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    opacity: 0;
    pointer-events: none;
    transition: opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    &[data-show='true'] {
        opacity: 1;
        pointer-events: auto;
    }
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
    const [isHovered, setIsHovered] = useState(false);

    const size = props.size ?? 'small';

    const handleKeyframeClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // Prevent triggering input focus
            props.onToggleKeyframe?.();
        },
        [props.onToggleKeyframe],
    );

    const handleKeyframeMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering input hover
    }, []);

    const handleKeyframeMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering input hover leave
    }, []);

    const renderHoverControls = () => {
        if (props.isPort) {
            // When isPort is true, show UnlinkIcon
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<UnlinkIcon size={16} />}
                    onClick={props.onTogglePort}
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
                onClick={props.onTogglePort}
                disabled={props.disabled}
            />
        );
    };

    const showHoverControls = isHovered && !props.disabled;

    return (
        <Container
            data-disabled={!!props.disabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-testid={props.testId}
        >
            <InputWrapper>
                {props.children}
                <HoverControlsContainer data-show={showHoverControls}>{renderHoverControls()}</HoverControlsContainer>
            </InputWrapper>
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={props.keyframesState} onClick={handleKeyframeClick} disabled={props.disabled} />
            </KeyframeContainer>
        </Container>
    );
};
