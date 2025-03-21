import { ContextMenu } from '../../../components/ContextMenu/src';
import { DataItem } from '../../../components/DataItem/src';
import { UploadIcon, MoreIcon } from '../../../components/Icon/src';
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
                onClick: () => console.log('clicked'),
                size: 'medium',
            },
            { label: 'Any text', onClick: () => console.log('clicked'), size: 'medium' },
        ]}
    />,
    <Menu
        options={[
            {
                label: 'Option 2',
                onClick: () => console.log('clicked'),
                size: 'small',
            },
            {
                label: 'Any text very very long text',
                trailingIcon: <UploadIcon />,
                onClick: () => console.log('clicked'),
                size: 'small',
            },
        ]}
    />,
    <Menu
        options={[
            { label: 'Delete', trailingIcon: <MoreIcon />, onClick: () => console.log('clicked'), size: 'medium' },
        ]}
    />,
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
