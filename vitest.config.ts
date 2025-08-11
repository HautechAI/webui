import linaria from '@wyw-in-js/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
import fs from 'fs';

// Dynamically generate aliases for all workspace packages
const componentsDir = path.resolve(__dirname, 'components');
const componentDirs = fs.readdirSync(componentsDir).filter(dir => {
    const componentPath = path.join(componentsDir, dir);
    return fs.statSync(componentPath).isDirectory() && dir !== '__tests__';
});

const packageAliases: Record<string, string> = {};
componentDirs.forEach(dir => {
    const packageJsonPath = path.join(componentsDir, dir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
        try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            const packageName = packageJson.name;
            if (packageName && packageName.startsWith('@hautechai/webui.')) {
                packageAliases[packageName] = path.join(componentsDir, dir, 'src');
            }
        } catch (e) {
            // Skip invalid package.json files
        }
    }
});

export default defineConfig({
    plugins: [
        linaria({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
    resolve: {
        alias: packageAliases
    },
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
