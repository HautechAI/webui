import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { NumberWithUnitsInput } from '@hautechai/webui.numberwithunitsinput';
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

export type VisualEditorNumberWithUnitsInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    value: string;
    units: string;
    availableUnits: string[];
    isPort: boolean;
    keyframesState: KeyframeToggleState;
    onChange?: (value: string) => void;
    onToggleKeyframe?: () => void;
    onTogglePort?: () => void;
    onChangeUnits?: (units: string) => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
    testId?: string;
};

export const VisualEditorNumberWithUnitsInput = (props: VisualEditorNumberWithUnitsInputProps) => {
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

    const handleInputChange = useCallback(
        (value: string) => {
            // Prevent value changes when connected to a port
            if (!props.isPort) {
                props.onChange?.(value);
            }
        },
        [props.onChange, props.isPort],
    );

    const handleUnitsChange = useCallback(
        (units: string) => {
            // Prevent units changes when connected to a port
            if (!props.isPort) {
                props.onChangeUnits?.(units);
            }
        },
        [props.onChangeUnits, props.isPort],
    );

    // Create hover controls based on isPort state
    const renderHoverControls = () => {
        if (props.isPort) {
            // When isPort is true, show UnlinkIcon - keep it accessible so users can disconnect
            return (
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<UnlinkIcon size={16} />}
                    onClick={props.onTogglePort}
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
        <Container size={size} data-testid={props.testId}>
            <NumberWithUnitsInput
                value={props.value}
                onChange={handleInputChange}
                units={props.units}
                availableUnits={props.availableUnits}
                onChangeUnits={handleUnitsChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
                size={size}
                variation={props.variation}
                leadingIcon={props.leadingIcon}
                hoverControls={renderHoverControls()}
                hasError={props.hasError}
                className={props.className}
            />
            <KeyframeContainer onMouseEnter={handleKeyframeMouseEnter} onMouseLeave={handleKeyframeMouseLeave}>
                <KeyframeToggle state={props.keyframesState} onClick={handleKeyframeClick} disabled={props.disabled} />
            </KeyframeContainer>
        </Container>
    );
};
