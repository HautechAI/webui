import { Decorator, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../../components/Button/src';
import { Modal, ModalContent } from '../../../components/Modal/src';
import { ModalProps } from '../../../components/Modal/src';
import { Logo } from '../../../components/Logo/src';

const OnChangeSyncArgs: Decorator<ModalProps> = (Story, context) => {
    const [open, setOpen] = useState(false);
    console.log({ args: context.args });
    return (
        <>
            <Button onClick={() => setOpen((v) => !v)} label="Toggle Modal" />
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
    title: 'Data Display/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [OnChangeSyncArgs],
};

export const Main = {
    args: {
        children: (
            <ModalContent>
                <Logo />
            </ModalContent>
        ),
    },
};

export const CustomPosition = {
    args: {
        children: (
            <ModalContent>
                <Logo />
            </ModalContent>
        ),
        contentPosition: {
            left: 100,
            top: 100,
        },
    },
};

export const CustomBackdropColor = {
    args: {
        children: (
            <ModalContent>
                <Logo />
            </ModalContent>
        ),
        backdropStyle: {
            backgroundColor: 'rgba(111, 222, 333, 0.5)',
        },
    },
};
