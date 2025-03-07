import { Avatars } from '../../../components/Avatars/src';
import img from '../../../assets/Avatar.png';

export default {
    title: 'Data Display/Avatars',
    component: Avatars,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const WithImage = {
    args: {
        images: [img, img, img],
        maxAmount: 3,
    },
};

export const Empty = {
    args: {
        images: [],
    },
};

export const CutBymaxAmount = {
    args: {
        images: [img, img, img],
        maxAmount: 2,
    },
};
