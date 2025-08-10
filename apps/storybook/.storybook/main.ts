import { StorybookConfig } from '@storybook/react-vite';
import { pigment } from '@pigment-css/vite-plugin';
import { Theme } from '@hautechai/webui.theme';

const config: StorybookConfig = {
    stories: ['../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: async (config) => {
        config.plugins?.push(
            pigment({
                theme: Theme,
                transformLibraries: ['@hautechai/webui.themeprovider'],
            })
        );
        return config;
    },
};
export default config;
