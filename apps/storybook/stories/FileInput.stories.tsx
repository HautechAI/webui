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

export const VariantButton = {
    args: {
        variant: 'button',
    },
};

export const VariantButtonStretch = {
    args: {
        variant: 'button',
        stretch: true,
    },
    decorators: [
        (Story: any) => (
            <div style={{ width: '300px', display: 'flex', flexDirection:'column', justifyContent:'stretch' }}>
                <Story />
            </div>
        ),
    ],
};
