import { defineConfig } from 'vite';
import linaria from '@linaria/vite';

export default defineConfig({
    plugins: [
        linaria({
            sourceMap: true,
            // Explicitly configure Babel options for Linaria
            babelOptions: {
                presets: [
                    ['@babel/preset-typescript', { 
                        allowNamespaces: true,
                        allowDeclareFields: true,
                    }],
                    ['@babel/preset-react', { 
                        runtime: 'automatic' 
                    }],
                ],
            },
        }),
    ],
});