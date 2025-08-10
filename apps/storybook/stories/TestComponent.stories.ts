import type { Meta, StoryObj } from '@storybook/react';
import { TestComponent } from '../src/TestComponent';

const meta: Meta<typeof TestComponent> = {
  title: 'Test/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a test of Linaria in Storybook package',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a longer test text to see how the styled component handles more content',
  },
};