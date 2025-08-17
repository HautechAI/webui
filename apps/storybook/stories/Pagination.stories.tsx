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
    decorators: [],
};

export const Main = (args: PaginationProps) => {
    const [value, setValue] = useState(1);
    return <Pagination {...args} currentPage={value} onPageChange={setValue} />;
};
Main.args = {} as Partial<PaginationProps>;

export const WithOne = {
    args: {
        totalPages: 1,
        currentPage: 1,
    },
};
