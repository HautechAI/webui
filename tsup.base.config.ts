import { defineConfig } from 'tsup';
import linaria from '@linaria/esbuild';

export default defineConfig({
    entry: ['src/index.ts(x)'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    target: 'es2024',
    esbuildPlugins: [
        linaria({
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
});
