import { Box } from '../../../components/Box/src';

export default {
    title: 'Data Display/Box',
    component: Box,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story: any) => (
            <div style={{ border: 'dashed red 1px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Main = {
    args: {
        children: 'content',
    },
};

export const PaddingTop = {
    args: {
        children: 'content',
        paddingTop: 'l',
    },
};

export const PaddingRight = {
    args: {
        children: 'content',
        paddingRight: 'l',
    },
};

export const PaddingBottom = {
    args: {
        children: 'content',
        paddingBottom: 'l',
    },
};

export const PaddingLeft = {
    args: {
        children: 'content',
        paddingLeft: 'l',
    },
};
