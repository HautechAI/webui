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
    },
};

export const Empty = {
    args: {
        images: [],
    },
};
