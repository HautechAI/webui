import React from 'react';
import { useState } from 'react';
import { EditableText } from '../../../components/EditableText/src';
import { Box } from '../../../components/Box/src';

export default {
    title: 'Input/EditableText',
    component: EditableText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['medium', 'small'],
        },
        selected: {
            control: { type: 'boolean' },
        },
        mode: {
            control: { type: 'select' },
            options: ['view', 'edit'],
        },
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={200}>
                <Story />
            </Box>
        ),
    ],
};

// Stateful story that demonstrates the full functionality
export const Interactive = () => {
    const [text, setText] = useState('Click twice to edit me!');
    const [mode, setMode] = useState<'view' | 'edit'>('view');

    const handleStartEditing = () => {
        setMode('edit');
    };

    const handleChange = (newText: string) => {
        setText(newText);
    };

    const handleFinishEditing = () => {
        setMode('view');
    };

    return (
        <EditableText
            text={text}
            mode={mode}
            size="medium"
            selected={false}
            onStartEditing={handleStartEditing}
            onChange={handleChange}
            onFinishEditing={handleFinishEditing}
        />
    );
};

export const MediumRegular = {
    args: {
        text: 'Medium regular text',
        mode: 'view',
        size: 'medium',
        selected: false,
    },
};

export const MediumEmphasized = {
    args: {
        text: 'Medium emphasized text',
        mode: 'view',
        size: 'medium',
        selected: true,
    },
};

export const SmallRegular = {
    args: {
        text: 'Small regular text',
        mode: 'view',
        size: 'small',
        selected: false,
    },
};

export const SmallEmphasized = {
    args: {
        text: 'Small emphasized text',
        mode: 'view',
        size: 'small',
        selected: true,
    },
};

export const EditMode = {
    args: {
        text: 'Text in edit mode',
        mode: 'edit',
        size: 'medium',
        selected: false,
    },
};

// Stateful story for each text style
export const InteractiveMediumEmphasized = () => {
    const [text, setText] = useState('Double-click to edit (Medium Emphasized)');
    const [mode, setMode] = useState<'view' | 'edit'>('view');

    return (
        <EditableText
            text={text}
            mode={mode}
            size="medium"
            selected={true}
            onStartEditing={() => setMode('edit')}
            onChange={setText}
            onFinishEditing={() => setMode('view')}
        />
    );
};

export const InteractiveSmallRegular = () => {
    const [text, setText] = useState('Double-click to edit (Small Regular)');
    const [mode, setMode] = useState<'view' | 'edit'>('view');

    return (
        <EditableText
            text={text}
            mode={mode}
            size="small"
            selected={false}
            onStartEditing={() => setMode('edit')}
            onChange={setText}
            onFinishEditing={() => setMode('view')}
        />
    );
};

export const InteractiveSmallEmphasized = () => {
    const [text, setText] = useState('Double-click to edit (Small Emphasized)');
    const [mode, setMode] = useState<'view' | 'edit'>('view');

    return (
        <EditableText
            text={text}
            mode={mode}
            size="small"
            selected={true}
            onStartEditing={() => setMode('edit')}
            onChange={setText}
            onFinishEditing={() => setMode('view')}
        />
    );
};
