import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';
import type { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof Column> = {
    title: 'Layout/Column',
    component: Column,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Column>;

export const DefaultSpacing: Story = {
    args: {
        children: (
            <>
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
            </>
        ),
    },
};

export const SpacingXXXL: Story = {
    args: {
        spacing: 'xxxl',
        children: (
            <>
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
            </>
        ),
    },
};
