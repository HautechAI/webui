import { FullScreen } from '../../../components/FullScreen/src';
import { fn } from '@storybook/test';

export default {
    title: 'Surfaces/FullScreen',
    component: FullScreen,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        onClose: fn() as any,
    },
    argTypes: {},
};

export const Main = {
    args: {
        children: <div style={{ background: 'red', width: '100%', height: '100%' }} />,
    },
};
