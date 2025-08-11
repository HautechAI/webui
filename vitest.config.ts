import linaria from '@wyw-in-js/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [
        linaria({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css}'],
    },
    esbuild: {
        jsx: 'automatic',
    },
});
