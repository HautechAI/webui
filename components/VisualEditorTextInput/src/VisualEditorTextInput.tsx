import React from 'react';
import { TextInput } from '@hautechai/webui.textinput';
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

export type VisualEditorTextInputProps = {
    // Visual editor specific props
    isPort: boolean;
    onTogglePort?: () => void;
    keyframesState: KeyframeToggleState;
    onToggleKeyframe?: () => void;

    // TextInput props
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
    className?: string;
    testId?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    step?: number;
};

export const VisualEditorTextInput = (props: VisualEditorTextInputProps) => {
    const { isPort, onTogglePort, keyframesState, onToggleKeyframe, disabled, ...textInputProps } = props;

    const isInputDisabled = disabled || isPort;

    const hoverControls = (
        <>
            <PortToggle isPort={isPort} onTogglePort={onTogglePort} disabled={disabled} />
            <LocalKeyframeToggle
                keyframesState={keyframesState}
                onToggleKeyframe={onToggleKeyframe}
                disabled={isInputDisabled}
            />
        </>
    );

    return (
        <TextInput
            {...textInputProps}
            disabled={isInputDisabled}
            hoverControls={hoverControls}
            type={textInputProps.type || 'text'}
        />
    );
};
