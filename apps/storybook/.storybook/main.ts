import { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';

const config: StorybookConfig = {
    stories: ['../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: async (config) => {
        // Ensure plugins array exists
        config.plugins = config.plugins || [];
        
        // Add Linaria plugin at the beginning to ensure it processes files first
        config.plugins.unshift(
            linaria({
                sourceMap: true,
                babelOptions: {
                    presets: [
                        '@linaria/babel-preset',
                        ['@babel/preset-typescript', { 
                            allowNamespaces: true,
                            allowDeclareFields: true,
                            isTSX: true,
                            allExtensions: true,
                        }],
                        ['@babel/preset-react', { 
                            runtime: 'automatic' 
                        }],
                    ],
                },
            })
        );
        
        return config;
    },
};

export default config;
