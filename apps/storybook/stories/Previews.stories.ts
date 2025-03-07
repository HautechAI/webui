import { Previews } from '../../../components/Previews/src';
import img from '../../../assets/Avatar.png';

export default {
    title: 'Data Display/Previews',
    component: Previews,
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
