import { Column } from '@hautechai/webui.column';
import { MenuItem } from '@hautechai/webui.menuitem';

export type MenuProps = {
    value?: string;
    options: Array<{ label: string; value: string; leadingIcon?: React.ReactNode; trailingIcon?: React.ReactNode }>;
    onChange?: (value: string) => void;
};

export const Menu = (props: MenuProps) => {
    return (
        <Column spacing="s">
            {props.options.map((opt) => (
                <MenuItem
                    key={opt.value}
                    label={opt.label}
                    type="main"
                    size="small"
                    leadingIcon={opt.leadingIcon}
                    trailingIcon={opt.trailingIcon}
                    isSelected={opt.value === props.value}
                    onClick={() => props.onChange?.(opt.value)}
                />
            ))}
        </Column>
    );
};
