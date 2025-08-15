import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { IconButton } from '@hautechai/webui.iconbutton';
import { EditableText } from '@hautechai/webui.editabletext';
import { ArrowAltRightIcon } from '@hautechai/webui.icon';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface LayerTreeItemParentProps {
    /** Icon to display next to the label */
    icon: React.ReactNode;
    /** Text label to display */
    label: string;
    /** Whether the item is in selected state */
    selected?: boolean;
    /** Whether the item is in expanded state */
    expanded?: boolean;
    /** Whether the text label is editable */
    editable?: boolean;
    /** Click handler for the expand/collapse button */
    onExpandToggle?: () => void;
    /** Click handler for the item itself */
    onClick?: () => void;
    /** Handler for when the label text changes */
    onChange?: (value: string) => void;
}

const Container = styled.div<{ selected: boolean }>`
    width: 100%;
    height: 36px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
    background: ${(props) => (props.selected ? themeVars.layout.surfaceHigh : 'transparent')};

    &:hover {
        background: ${themeVars.layout.surfaceHigh};
    }
`;

const ExpandButton = styled.div`
    padding-left: 8px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const ArrowContainer = styled.div<{ expanded: boolean }>`
    width: 16px;
    height: 16px;
    position: relative;
    transition: transform ${themeVars.animation.duration.normal} ${themeVars.animation.timing.easeOut};
    transform: ${(props) => (props.expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    flex: 1 1 0;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 2px;
    padding-right: 12px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
    cursor: pointer;
    overflow: hidden;
`;

const IconContainer = styled.div<{ selected: boolean }>`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.selected ? themeVars.layout.onSurface.primary : themeVars.layout.onSurface.secondary)};
`;

const LabelContainer = styled.div`
    width: calc(100% - 24px);
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

export const LayerTreeItemParent = (props: LayerTreeItemParentProps) => {
    const {
        icon,
        label,
        selected = false,
        expanded = false,
        editable = false,
        onExpandToggle,
        onClick,
        onChange,
    } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [currentLabel, setCurrentLabel] = useState(label);

    const handleStartEditing = () => {
        if (editable) {
            setIsEditing(true);
        }
    };

    const handleFinishEditing = () => {
        setIsEditing(false);
        if (onChange && currentLabel !== label) {
            onChange(currentLabel);
        }
    };

    const handleTextChange = (value: string) => {
        setCurrentLabel(value);
    };

    // Update internal state when label prop changes
    React.useEffect(() => {
        setCurrentLabel(label);
    }, [label]);

    return (
        <Container selected={selected}>
            <ExpandButton>
                <IconButton
                    variant="flat"
                    size="xsmall"
                    icon={
                        <ArrowContainer expanded={expanded}>
                            <ArrowAltRightIcon size={16} color="layout.onSurface.secondary" />
                        </ArrowContainer>
                    }
                    onClick={onExpandToggle}
                />
            </ExpandButton>
            <Content onClick={isEditing ? undefined : onClick}>
                <IconContainer selected={selected}>{icon}</IconContainer>
                <LabelContainer>
                    <EditableText
                        text={currentLabel}
                        mode={isEditing ? 'edit' : 'view'}
                        textStyle={selected ? 'medium-emphasized' : 'medium-regular'}
                        onStartEditing={handleStartEditing}
                        onChange={handleTextChange}
                        onFinishEditing={handleFinishEditing}
                    />
                </LabelContainer>
            </Content>
        </Container>
    );
};
