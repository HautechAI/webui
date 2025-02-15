import avatar from '../../../assets/Avatar.png';

import { User } from '../../../components/User/src';

export default {
    title: 'Data Display/User',
    component: User,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        avatar,
        title: 'John Doe',
        subtitle: '4 min ago',
    },
};
