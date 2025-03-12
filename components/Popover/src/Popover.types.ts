import { ReactNode } from 'react';
import { PopoverPosition } from 'react-tiny-popover';

export type PopoverProps = {
    content: ({ close }: { close: () => void }) => ReactNode;
    contentPositions?: PopoverPosition[];
    trigger: () => ReactNode;
    cleanStyle?: boolean;
};

export type PopoverRef = {
    close: () => void;
};
