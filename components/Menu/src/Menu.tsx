import React, { useCallback, useRef } from 'react';
import { Popover, PopoverProps, PopoverRef } from '@hautechai/webui.popover';
import { Row } from '@hautechai/webui.row';
import { Typography } from '@hautechai/webui.typography';
import { CustomContainer, Divider, ItemContainer, Container } from './Menu.styles';

export type MenuItem = {
    label?: string;
    onClick?: () => void;
    type?: 'divider';
    custom?: React.ReactNode;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};

export type MenuProps = {
    model: MenuItem[];
    trigger: () => React.ReactNode;
    contentPositions?: PopoverProps['contentPositions'];
};

const Menu: React.FC<MenuProps> = ({ model, trigger, contentPositions }) => {
    const popoverRef = useRef<PopoverRef>(null);

    const handleClickItem = useCallback((item: MenuItem) => {
        item.onClick?.();
        popoverRef.current?.close();
    }, []);

    const renderMenuItem = (item: MenuItem, index: number) => {
        if (item.custom) {
            return (
                <CustomContainer key={index} onClick={() => handleClickItem(item)}>
                    {item.custom}
                </CustomContainer>
            );
        }
        if (item.type === 'divider') {
            return <Divider key={index} />;
        }
        return (
            <ItemContainer key={index} onClick={() => handleClickItem(item)}>
                <Row spacing="m">
                    {item.leadingIcon}
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.secondary">
                        {item.label}
                    </Typography>
                </Row>
                {item.trailingIcon}
            </ItemContainer>
        );
    };

    const renderMenuList = () => (
        <Container>
            {model.map((item, index) => {
                return renderMenuItem(item, index);
            })}
        </Container>
    );

    if (trigger) {
        return (
            <Popover
                ref={popoverRef}
                cleanStyle
                content={renderMenuList}
                contentPositions={contentPositions}
                trigger={trigger}
            />
        );
    }

    return renderMenuList();
};

export default Menu;
