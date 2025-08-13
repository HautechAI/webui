import { defineConfig } from 'vite';
import linaria from '@wyw-in-js/vite';

export default defineConfig({
    plugins: [
        linaria({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
});
