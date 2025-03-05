import { Chip } from '../../../components/Chip/src';
import Desert from '../../../assets/desert.png';
import { Upload } from '../../../components/Icon/src';

export default {
    title: 'Data Display/Chip',
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
        icon: <Upload size={20} />,
        label: 'Model',
    },
};

export const WithImage = {
    args: {
        image: Desert,
        label: 'Desert',
    },
};
