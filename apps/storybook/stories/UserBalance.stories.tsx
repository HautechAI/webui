import { fn } from '@storybook/test';

import { UserBalance } from '../../../components/UserBalance/src';

export default {
    title: 'Compositions/User Balance',
    component: UserBalance,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onTopUp: fn() as any },
    decorators: [
        (Story: any) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Main = {
    args: {
        balance: '100.05',
    },
};
