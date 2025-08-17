import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        include: ['components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css}'],
    },
    esbuild: {
        jsx: 'automatic',
    },
});
