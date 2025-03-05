import { useCallback, useState } from 'react';
import { Popover as TinyPopover } from 'react-tiny-popover';
import { PopoverProps } from './Popover.types';
import S from './Popover.styles';

export const Popover = (props: PopoverProps) => {
    const [isOpen, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
    }, []);
    const open = useCallback(() => {
        setOpen(true);
    }, []);

    return (
        <TinyPopover
            content={<S.Container>{props.content({ close })}</S.Container>}
            isOpen={isOpen}
            onClickOutside={close}
            positions={props.contentPositions ?? ['top', 'bottom', 'left', 'right']}
        >
            <div onClick={open}>{props.trigger()}</div>
        </TinyPopover>
    );
};
