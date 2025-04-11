import { DownloadIcon } from '../../../components/Icon/src';
import { Chip } from '../../../components/Chip/src';

export default {
    title: 'Data Display/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        showPopover: true,
    },
};

export const TextOnly = {
    args: {
        label: 'Simple text',
    },
};

export const WithIcon = {
    args: {
        icon: <DownloadIcon />,
        label: 'Model',
    },
};

export const WithImage = {
    args: {
        image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb',
        label: 'Apparel',
    },
};

export const MaxWidth = {
    args: {
        icon: <DownloadIcon />,
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lo rem ipsum.',
        maxWidth: 100,
    },
};
