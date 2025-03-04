import { Chip } from '../../../components/Chip/src';
import Desert from '../../../assets/desert.png';
import { UploadSmall } from '../../../components/Icon/src';

export default {
    title: 'Compositions/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const WithIcon = {
    args: {
        icon: <UploadSmall />,
        label: 'Model',
    },
};

export const WithImage = {
    args: {
        image: Desert,
        label: 'Desert',
    },
};
