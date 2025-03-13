import { ContextMenu } from '../../../components/ContextMenu/src';
import { menuItems } from './Menu.stories';

export default {
    title: 'Navigation/ContextMenu',
    component: ContextMenu,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
};

export const Default = {
    args: {
        items: menuItems,
        children: <div style={{ border: '1px dashed gray', padding: '50px' }}>Right Click me (Context Menu)</div>,
    },
};
