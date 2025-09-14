import { type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { NumberWithUnitsInput } from '@hautechai/webui.numberwithunitsinput';
import { VisualEditorInput } from '../../VisualEditorInput/src';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';
import React from 'react';

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
        <VisualEditorInput
            isPort={props.isPort}
            keyframesState={props.keyframesState}
            onToggleKeyframe={props.onToggleKeyframe}
            onTogglePort={props.onTogglePort}
            disabled={props.disabled}
            size={size}
            testId={props.testId}
        >
            <NumberWithUnitsInput
                value={props.value}
                onChange={props.onChange}
                units={props.units}
                availableUnits={props.availableUnits}
                onChangeUnits={props.onChangeUnits}
                placeholder={props.placeholder}
                disabled={props.disabled || props.isPort}
                size={size}
                variation={props.variation}
                leadingIcon={props.leadingIcon}
                hoverControls={renderHoverControls()}
                hasError={props.hasError}
                className={props.className}
            />
        </VisualEditorInput>
    );
};
