import { NodePort } from '../../../components/NodePort/src';

export default {
    title: 'Node/NodePort',
    component: NodePort,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const InputPort = {
    args: {
        type: 'input',
        label: 'Input Port',
    },
};

export const OutputPort = {
    args: {
        type: 'output',
        label: 'Output Port',
    },
};

export const InputPortWithoutLabel = {
    args: {
        type: 'input',
    },
};

export const OutputPortWithoutLabel = {
    args: {
        type: 'output',
    },
};

export const WithInteractiveHandle = {
    args: {
        type: 'input',
        label: 'Interactive Port',
        interactiveHandle: (
            <div
                style={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'transparent',
                    border: '1px solid red',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                }}
                title="Draggable interactive handle"
            />
        ),
    },
};

export const WarningState = {
    args: {
        type: 'input',
        label: 'Warning Port',
        state: 'warning',
    },
};

export const WarningStateOutput = {
    args: {
        type: 'output',
        label: 'Warning Output',
        state: 'warning',
    },
};

export const ErrorState = {
    args: {
        type: 'input',
        label: 'Error Port',
        state: 'error',
    },
};

export const ErrorStateOutput = {
    args: {
        type: 'output',
        label: 'Error Output',
        state: 'error',
    },
};
