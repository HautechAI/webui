import img from '../../assets/Avatar.png';
import { Avatar } from './src';

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Empty = {
    args: {},
};

export const WithImage = {
    args: {
        src: img,
    },
};
