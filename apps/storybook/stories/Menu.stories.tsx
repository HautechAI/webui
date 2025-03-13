import { MoreIcon, UploadIcon } from '../../../components/Icon/src';
import { Menu } from '../../../components/Menu/src';
import { Typography } from '../../../components/Typography/src';

export default {
    title: 'Navigation/Menu',
    component: Menu,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story: any) => (
            <div style={{ padding: '50px', backgroundColor: 'lightgrey' }}>
                <Story />
            </div>
        ),
    ],
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
    },
};

export const Popover = {
    args: {
        items: menuItems,
        trigger: () => <button>Open Popover Menu</button>,
        contentPositions: ['top'],
    },
};
