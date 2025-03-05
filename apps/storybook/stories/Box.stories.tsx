import { Box } from '../../../components/Box/src';
import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';
import { Tile } from '../../../components/Tile/src';

export default {
    title: 'Layout/Box',
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

export const Overflow = {
    args: {
        children: (
            <Column spacing="l">
                <Button label="button" />
                <Button label="button" />
                <Button label="button" />
            </Column>
        ),
        height: 100,
        overflow: 'scroll',
    },
};
