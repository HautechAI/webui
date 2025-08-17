import { StorybookConfig } from '@storybook/react-vite';
import linaria from '@wyw-in-js/vite';

const config: StorybookConfig = {
    stories: ['../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
