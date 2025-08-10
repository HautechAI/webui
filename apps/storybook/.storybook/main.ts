import { StorybookConfig } from '@storybook/react-vite';
import linaria from '@wyw-in-js/vite';

const config: StorybookConfig = {
    stories: ['../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: async (config) => {
        return {
            ...config,
            plugins: [
                linaria({
                    include: ['**/*.{ts,tsx}'],
                    babelOptions: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react'],
                    },
                }),
                ...(config.plugins ?? []),
            ],
        };
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
