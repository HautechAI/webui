import { Chip } from '../../../components/Chip/src';
import Desert from '../../../assets/desert.png';

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

export const Main = {
    args: {
        image: Desert,
        label: 'Model',
    },
};
