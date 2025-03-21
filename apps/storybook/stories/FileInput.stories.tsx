import { fn } from '@storybook/test';

import { FileInput } from '../../../components/FileInput/src';

export default {
    title: 'Input/FileInput',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() as any },
};

export const Main = {
    args: {
        onChange: (files: File[]) => console.log(files),
    },
};
