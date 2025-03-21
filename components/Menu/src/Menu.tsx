import { Column } from '@hautechai/webui.column';
import { MenuItem, MenuItemProps } from '@hautechai/webui.menuitem';
import { Popover, PopoverProps, PopoverRef } from '@hautechai/webui.popover';
import { useRef } from 'react';

export type MenuProps = {
    options: MenuItemProps[];
    trigger?: () => React.ReactNode;
    contentPositions?: PopoverProps['contentPositions'];
};

export const Menu = (props: MenuProps) => {
    const popoverRef = useRef<PopoverRef>(null);

    const renderMenuList = () => (
        <Column spacing="s">
            {props.options.map((opt) => (
                <MenuItem key={opt.label} type="main" {...opt} />
            ))}
        </Column>
    );

    if (props.trigger) {
        return (
            <Popover
                ref={popoverRef}
                content={renderMenuList}
                contentPositions={props.contentPositions}
                trigger={props.trigger}
            />
        );
    }

    return renderMenuList();
};
