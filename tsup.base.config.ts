import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts(x)'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    target: 'es2024',
});
