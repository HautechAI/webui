import { fn } from '@storybook/test';
import { ContextMenu } from '../../../components/ContextMenu/src';
import { DataItem } from '../../../components/DataItem/src';
import { MoreIcon, UploadIcon } from '../../../components/Icon/src';
import { Menu } from '../../../components/Menu/src';

export default {
    title: 'Navigation/ContextMenu',
    component: ContextMenu,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
};

const menus = [
    <Menu
        options={[
            {
                label: 'Option 1',
                leadingIcon: <UploadIcon />,
                onClick: () => fn(),
                size: 'medium',
            },
            { label: 'Any text', onClick: fn(), size: 'medium' },
        ]}
    />,
    <Menu
        options={[
            {
                label: 'Option 2',
                onClick: () => fn(),
                size: 'small',
            },
            {
                label: 'Any text very very long text',
                trailingIcon: <UploadIcon />,
                onClick: () => fn(),
                size: 'small',
            },
        ]}
    />,
    <Menu options={[{ label: 'Delete', trailingIcon: <MoreIcon />, onClick: () => fn(), size: 'medium' }]} />,
];

export const Default = {
    args: {
        menus,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Right Click me (Context Menu)</div>,
    },
};

export const WithHeading = {
    args: {
        heading: {
            data: <DataItem primary="heading" direction="column" label="Heading" value="Data" />,
            badge: 'Label',
        },
        menus,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Right Click me (Context Menu)</div>,
    },
};

export const LeftClickMenu = {
    args: {
        isLeftClick: true,
        menus,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Left Click me (Menu).</div>,
    },
};

export const ForMobile = {
    args: {
        menus,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Right Click me (Context Menu)</div>,
        variation: 'bottomSheet',
    },
};
