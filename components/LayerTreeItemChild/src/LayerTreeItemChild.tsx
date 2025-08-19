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
}

const Container = styled.div<{ selected: boolean }>`
    width: 100%;
    height: 28px;
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
`;

const Content = styled.div`
    flex: 1 1 0;
    align-self: stretch;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const NameForm = styled.div`
    flex: 1;
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
    min-width: 0; /* Allow shrinking */
`;

const EditableTextContainer = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    min-width: 0; /* Allow shrinking to enable text truncation */
    overflow: hidden; /* Ensure container doesn't overflow */
`;

const InputContainer = styled.div`
    flex-shrink: 0; /* Fixed size, don't shrink */
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
`;

export const LayerTreeItemChild = (props: LayerTreeItemChildProps) => {
    const {
        label,
        selected = false,
        input,
        onChange,
        onSelect,
    } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [currentLabel, setCurrentLabel] = useState(label);

    const handleStartEditing = () => {
        setIsEditing(true);
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

    const handleContainerClick = () => {
        if (!isEditing && onSelect) {
            onSelect();
        }
    };

    // Update internal state when label prop changes
    React.useEffect(() => {
        setCurrentLabel(label);
    }, [label]);

    return (
        <Container selected={selected} onClick={handleContainerClick}>
            <ChildIndent />
            <Content>
                <NameForm>
                    <EditableTextContainer>
                        <EditableText
                            text={currentLabel}
                            mode={isEditing ? 'edit' : 'view'}
                            textStyle={selected ? 'medium-emphasized' : 'medium-regular'}
                            onStartEditing={handleStartEditing}
                            onChange={handleTextChange}
                            onFinishEditing={handleFinishEditing}
                        />
                    </EditableTextContainer>
                    {input && (
                        <InputContainer>
                            {input}
                        </InputContainer>
                    )}
                </NameForm>
            </Content>
        </Container>
    );
};