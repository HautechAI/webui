import img from '../../../assets/Avatar.png';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Avatar } from '../../../components/Avatar/src';

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

export const WithIcon = {
    args: {
        icon: <PlaceholderIcon />,
    },
};

export const WithInitials = {
    args: {
        initials: 'JC',
    },
};
