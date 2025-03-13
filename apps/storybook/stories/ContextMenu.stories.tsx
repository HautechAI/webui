import { ContextMenu } from '../../../components/ContextMenu/src';
import { UploadIcon, MoreIcon } from '../../../components/Icon/src';
import { Typography } from '../../../components/Typography/src';

export default {
    title: 'Navigation/ContextMenu',
    component: ContextMenu,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
};

const menuItems = [
    { label: 'Home', leadingIcon: <UploadIcon size={20} />, onClick: () => console.log('Home clicked') },
    { label: 'Profile', trailingIcon: <MoreIcon size={20} />, onClick: () => console.log('Profile clicked') },
    { type: 'divider' },
    {
        custom: (
            <Typography variant="LabelSmallRegular" color="actions.error">
                Move to trash
            </Typography>
        ),
        onClick: () => console.log('Move to trash clicked'),
    },
];

export const Default = {
    args: {
        items: menuItems,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Right Click me (Context Menu)</div>,
    },
};
