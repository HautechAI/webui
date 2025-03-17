import { Chip } from '../../../components/Chip/src';
import Desert from '../../../assets/desert.png';
import { DownloadIcon } from '../../../components/Icon/src';

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
        icon: <DownloadIcon />,
        label: 'Model',
    },
};

export const WithImage = {
    args: {
        image: Desert,
        label: 'Desert',
    },
};

export const MaxWidth = {
    args: {
        image: Desert,
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        maxWidth: 300,
    },
};
