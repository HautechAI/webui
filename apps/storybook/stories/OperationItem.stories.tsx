import Desert from '../../../assets/desert.png';
import img from '../../../assets/Avatar.png';
import { OperationItem } from '../../../components/OperationItem/src';

export default {
    title: 'Compositions/OperationItem',
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
        previews: {
            images: [img, img, img, img],
            size: 24,
        },
        badge: {
            color: 'success',
            label: 'Success',
        },
        chips: [
            { image: Desert, label: 'Desert' },
            { image: Desert, label: 'Desert' },
            { image: Desert, label: 'Very long label here' },
        ],
        date: '15 mins ago',
        unread: true,
        title: 'Operation',
    },
};
