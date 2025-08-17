import React from 'react';
import { fn } from '@storybook/test';

import { UserBalance } from '../../../components/UserBalance/src';

export default {
    title: 'Compositions/User Balance',
    component: UserBalance,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onTopUpClick: fn() as () => void },
    decorators: [
        (Story: React.ComponentType) => (
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
