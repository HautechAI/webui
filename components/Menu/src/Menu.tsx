import { Column } from '@hautechai/webui.column';
import { MenuItem, MenuItemProps } from '@hautechai/webui.menuitem';
import { Popover, PopoverProps, PopoverRef } from '@hautechai/webui.popover';
import { useRef } from 'react';

export type MenuProps = {
    options: (MenuItemProps & { value?: string })[];
    value?: string;
    onChange?: (value: string) => void;
    trigger?: () => React.ReactNode;
    contentPositions?: PopoverProps['contentPositions'];
};

export const Menu = (props: MenuProps) => {
    const popoverRef = useRef<PopoverRef>(null);

    const renderMenuList = () => (
        <Column spacing="s">
            {props.options.map((opt) => (
                <MenuItem
                    key={opt.value ?? opt.label}
                    type="main"
                    {...opt}
                    isSelected={props.value ? opt.value === props.value : opt.isSelected}
                    onClick={() => (props.onChange && opt.value ? props.onChange?.(opt.value) : opt.onClick?.())}
                />
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
