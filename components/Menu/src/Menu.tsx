import { Column } from '@hautechai/webui.column';
import { MenuItem, MenuItemProps } from '@hautechai/webui.menuitem';
import { Popover, PopoverProps, PopoverRef } from '@hautechai/webui.popover';
import { useCallback, useMemo, useRef } from 'react';

export type MenuProps = {
    options: (MenuItemProps & { value?: string })[];
    value?: string;
    onChange?: (value: string) => void;
    trigger?: () => React.ReactNode;
    contentPositions?: PopoverProps['contentPositions'];
    size?: 'small' | 'medium';
    testId?: string;
};

export const Menu = (props: MenuProps) => {
    const popoverRef = useRef<PopoverRef>(null);
    const size = props.size ?? 'small';

    const renderMenuList = () => (
        <Column spacing="s" testId={props.testId}>
            {props.options.map((opt) => {
                const key = opt.value ?? opt.label;
                const isSelected = props.value ? opt.value === props.value : opt.isSelected;
                const onClick = () => (props.onChange && opt.value ? props.onChange?.(opt.value) : opt.onClick?.());

                if (opt.type === 'CTA') {
                    const { type: _ignored, ...rest } = opt as Extract<typeof opt, { type: 'CTA' }>;
                    return <MenuItem key={key} type="CTA" {...rest} isSelected={isSelected} onClick={onClick} />;
                }

                const { type: _ignored2, ...rest2 } = opt as Extract<typeof opt, { type?: 'main' }>;
                return (
                    <MenuItem key={key} type="main" size={size} {...rest2} isSelected={isSelected} onClick={onClick} />
                );
            })}
        </Column>
    );

    const menu = useMemo(() => renderMenuList(), [props.options, props.onChange]);
    const getMenu = useCallback(() => menu, [menu]);

    if (props.trigger) {
        return (
            <Popover
                ref={popoverRef}
                content={getMenu}
                contentPositions={props.contentPositions}
                trigger={props.trigger}
            />
        );
    }

    return menu;
};
