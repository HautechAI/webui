import React from 'react';
import { Dropdown } from '@hautechai/webui.dropdown';
import { KeyframeToggle, type KeyframeToggleState } from '@hautechai/webui.keyframetoggle';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { WorkflowIcon, UnlinkIcon } from '@hautechai/webui.icon';

// Local PortToggle component
const PortToggle = ({
    isPort,
    onTogglePort,
    disabled,
}: {
    isPort: boolean;
    onTogglePort?: () => void;
    disabled?: boolean;
}) => (
    <ToggleIconButton
        variant="flat"
        size="xsmall"
        icon={isPort ? <UnlinkIcon size={16} /> : <WorkflowIcon size={16} />}
        onClick={onTogglePort}
        disabled={disabled}
    />
);

// Local KeyframeToggle wrapper
const LocalKeyframeToggle = ({
    keyframesState,
    onToggleKeyframe,
    disabled,
}: {
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;
    disabled?: boolean;
}) => <KeyframeToggle state={keyframesState} onClick={onToggleKeyframe} disabled={disabled} />;

export type VisualEditorDropdownProps = {
    // Visual editor specific props
    isPort: boolean;
    onTogglePort?: () => void;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;

    // Dropdown props
    label?: string;
    disabled?: boolean;
    type?: 'filled' | 'outlined' | 'flat';
    size?: 'xsmall' | 'small' | 'medium';
    collapsed?: boolean;
    value?: string;
    options: Array<{ label: string; value: string }>;
    onChange?: (value: string) => void;
    hasError?: boolean;
    testId?: string;
};

export const VisualEditorDropdown = (props: VisualEditorDropdownProps) => {
    const { isPort, onTogglePort, keyframesState, onToggleKeyframe, disabled, ...dropdownProps } = props;

    const isComponentDisabled = disabled || isPort;

    const hoverControls = (
        <>
            <PortToggle isPort={isPort} onTogglePort={onTogglePort} disabled={disabled} />
            <LocalKeyframeToggle
                keyframesState={keyframesState}
                onToggleKeyframe={onToggleKeyframe}
                disabled={isComponentDisabled}
            />
        </>
    );

    return <Dropdown {...dropdownProps} disabled={isComponentDisabled} hoverControls={hoverControls} />;
};
