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
        textStyle: {
            control: { type: 'select' },
            options: ['medium-regular', 'medium-emphasized', 'small-regular', 'small-emphasized'],
        },
        mode: {
            control: { type: 'select' },
            options: ['view', 'edit'],
        },
    },
    decorators: [
        (Story: any) => (
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
            textStyle="medium-regular"
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
        textStyle: 'medium-regular',
    },
};

export const MediumEmphasized = {
    args: {
        text: 'Medium emphasized text',
        mode: 'view', 
        textStyle: 'medium-emphasized',
    },
};

export const SmallRegular = {
    args: {
        text: 'Small regular text',
        mode: 'view',
        textStyle: 'small-regular',
    },
};

export const SmallEmphasized = {
    args: {
        text: 'Small emphasized text',
        mode: 'view',
        textStyle: 'small-emphasized',
    },
};

export const EditMode = {
    args: {
        text: 'Text in edit mode',
        mode: 'edit',
        textStyle: 'medium-regular',
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
            textStyle="medium-emphasized"
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
            textStyle="small-regular"
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
            textStyle="small-emphasized"
            onStartEditing={() => setMode('edit')}
            onChange={setText}
            onFinishEditing={() => setMode('view')}
        />
    );
};