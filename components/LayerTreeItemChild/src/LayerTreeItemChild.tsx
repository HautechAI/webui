import React, { useState } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { EditableText } from '@hautechai/webui.editabletext';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface LayerTreeItemChildProps {
    /** Text label to display */
    label: string;
    /** Whether the item is in selected state */
    selected?: boolean;
    /** Optional React Node to display/edit value on the right side */
    input?: React.ReactNode;
    /** Handler for when the label text changes */
    onChange?: (value: string) => void;
    /** Handler for when the item is selected */
    onSelect?: () => void;
    /** Whether the label text is user editable (defaults to true) */
    editable?: boolean;
    /** Test ID for testing purposes */
    testId?: string;
}

const Container = styled.div<{ selected: boolean }>`
    width: 100%;
    height: 36px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
    background: ${(props) => (props.selected ? themeVars.layout.surfaceHigh : 'transparent')};
    cursor: pointer;

    &:hover {
        background: ${themeVars.layout.surfaceHigh};
    }
`;

const ChildIndent = styled.div`
    width: 32px;
    align-self: stretch;
    flex-shrink: 0;
`;

const Content = styled.div`
    flex: 1 1 0;
    gap: ${themeVars.spacing.m};
    align-self: stretch;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    overflow: hidden;
`;

const EditableTextContainer = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    min-width: 0;
    overflow: hidden;
`;

const InputContainer = styled.div`
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
`;

export const LayerTreeItemChild = (props: LayerTreeItemChildProps) => {
    const { label, selected = false, input, onChange, onSelect, editable = true, testId } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [currentLabel, setCurrentLabel] = useState(label);

    const handleStartEditing = () => {
        if (!editable) return;
        setIsEditing(true);
    };

    const handleFinishEditing = () => {
        if (!editable) return;
        setIsEditing(false);
        if (onChange && currentLabel !== label) {
            onChange(currentLabel);
        }
    };

    const handleTextChange = (value: string) => {
        if (!editable) return;
        setCurrentLabel(value);
    };

    const handleContainerClick = () => {
        if (!isEditing && onSelect) {
            onSelect();
        }
    };

    React.useEffect(() => {
        setCurrentLabel(label);
    }, [label]);

    // If editable prop becomes false while editing, exit edit mode without firing change
    React.useEffect(() => {
        if (!editable && isEditing) {
            setIsEditing(false);
            setCurrentLabel(label); // revert to prop label
        }
    }, [editable, isEditing, label]);

    return (
        <Container selected={selected} onClick={handleContainerClick} data-testid={testId}>
            <ChildIndent />
            <Content>
                <EditableTextContainer>
                    <EditableText
                        text={currentLabel}
                        mode={editable && isEditing ? 'edit' : 'view'}
                        size="small"
                        selected={selected}
                        onStartEditing={editable ? handleStartEditing : undefined}
                        onChange={editable ? handleTextChange : undefined}
                        onFinishEditing={editable ? handleFinishEditing : undefined}
                    />
                </EditableTextContainer>
                {input && <InputContainer>{input}</InputContainer>}
            </Content>
        </Container>
    );
};
