import { fn } from '@storybook/test';
import { Pagination, type PaginationProps } from '../../../components/Pagination/src';
import { useState } from 'react';

export default {
    title: 'Navigation/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        totalPages: 16,
        currentPage: 1,
        onPageChange: fn() as (page: number) => void,
    },
    decorators: [
        (Story: React.ComponentType, { args }: { args: PaginationProps }) => {
            const [value, setValue] = useState(1);
            return <Story args={{ ...args, currentPage: value, onPageChange: setValue }} />;
        },
    ],
};

export const Main = {
    args: {},
};

export const WithOne = {
    args: {
        totalPages: 1,
        currentPage: 1,
    },
};
