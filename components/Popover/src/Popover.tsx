import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Popover as TinyPopover } from 'react-tiny-popover';
import { PopoverProps, PopoverRef } from './Popover.types';
import S from './Popover.styles';

export const Popover = forwardRef<PopoverRef, PopoverProps>((props: PopoverProps, ref) => {
    const [isOpen, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
    }, []);
    const toggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    useImperativeHandle(ref, () => ({
        close,
    }));

    return (
        <TinyPopover
            content={<S.Container>{props.content({ close })}</S.Container>}
            isOpen={isOpen}
            onClickOutside={close}
            positions={props.contentPositions ?? ['top', 'bottom', 'left', 'right']}
        >
            <div onClick={toggle}>{props.trigger()}</div>
        </TinyPopover>
    );
});
