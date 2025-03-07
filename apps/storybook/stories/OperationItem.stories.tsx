import img from '../../../assets/Avatar.png';
import { OperationItem } from '../../../components/OperationItem/src';

export default {
    title: 'Data Display/OperationItem',
    component: OperationItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const Main = {
    args: {
        avatars: {
            images: [img, img, img, img],
            maxAmount: 4,
            size: 24,
        },
        badge: {
            color: 'success',
            label: 'Success',
        },
        date: '15 mins ago',
        unread: true,
        title: 'Operation',
    },
};
