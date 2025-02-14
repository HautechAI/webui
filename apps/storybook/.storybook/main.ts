import { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
    stories: ['../../../components/*/*.mdx', '../../../components/*/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    staticDirs: [{ from: '../node_modules/@hautechai/webui.theme/fonts', to: '/fonts' }],
};
export default config;
