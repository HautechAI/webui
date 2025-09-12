import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { Dropdown } from '@hautechai/webui.dropdown';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React, { useCallback } from 'react';

const Container = styled.div<{ size: 'medium' | 'small' }>`
    display: flex;
    gap: ${({ size }) => (size === 'small' ? themeVars.spacing.s : themeVars.spacing.m)};
    align-items: center;
    flex: 1;
`;

const KeyframeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export type VisualEditorDropDownProps = {
    className?: string;
    label?: string;
    disabled?: boolean;
    value?: string;
    options: Array<{ label: string; value: string }>;
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onChange?: (value: string) => void;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    hasError?: boolean;
    type?: 'filled' | 'outlined' | 'flat';
    size?: 'medium' | 'small';
    collapsed?: boolean;
    testId?: string;
};

export const VisualEditorDropDown = (props: VisualEditorDropDownProps) => {
    const size = props.size ?? 'small';

    const handleKeyframeClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // Prevent triggering dropdown toggle
            props.onToggleKeyframe?.();
        },
        [props.onToggleKeyframe],
    );

    const handleKeyframeMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering dropdown hover
    }, []);

    const handleKeyframeMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent triggering dropdown hover leave
    }, []);

    // Create hover controls based on isPort state
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

    return (
        <Container size={size} data-testid={props.testId} className={props.className}>
            <Dropdown
                label={props.label}
                value={props.value}
                options={props.options}
                onChange={props.onChange}
                disabled={props.disabled || props.isPort}
                size={size}
                type={props.type}
                collapsed={props.collapsed}
                hoverControls={renderHoverControls()}
                hasError={props.hasError}
            />
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={props.keyframesState} onClick={handleKeyframeClick} disabled={props.disabled} />
            </KeyframeContainer>
        </Container>
    );
};
