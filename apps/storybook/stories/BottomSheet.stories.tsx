import { Decorator } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../../components/Button/src';
import { BottomSheet } from '../../../components/BottomSheet/src';
import { BottomSheetProps } from '../../../components/BottomSheet/src';
import { Logo } from '../../../components/Logo/src';
import { fn } from '@storybook/test';

const OnChangeSyncArgs: Decorator<BottomSheetProps> = (Story, context) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen((v) => !v)} label="Toggle BottomSheet" />
            <Story
                {...{
                    ...context,
                    args: {
                        ...context.args,
                        open,
                        onClose: () => setOpen(false),
                    },
                }}
            />
        </>
    );
};

export default {
    title: 'Surfaces/BottomSheet',
    component: BottomSheet,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        onClose: fn() as () => void,
    },
    argTypes: {},
    decorators: [OnChangeSyncArgs],
};

export const Main = {
    args: {
        children: <Logo />,
        inset: {
            top: 30,
            left: 10,
            right: 10,
        },
    },
};

export const LongContent = {
    args: {
        children: (
            <>
                <div>start</div>
                <div style={{ overflow: 'scroll' }}>
                    <div style={{ height: '100vh' }}>Long content</div>
                </div>
                <div>end</div>
            </>
        ),
        inset: {
            top: 30,
            left: 10,
            right: 10,
        },
    },
};

export const CustomBackdropColor = {
    args: {
        children: <Logo />,
        inset: {
            top: 30,
            left: 10,
            right: 10,
        },
        backdropStyle: {
            backgroundColor: 'rgba(111, 222, 333, 0.5)',
        },
    },
};
