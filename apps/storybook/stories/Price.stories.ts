import { Price } from '../../../components/Price/src';

export default {
    title: 'Data Display/Price',
    component: Price,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        price: '$11.99',
        period: 'month',
    },
};
