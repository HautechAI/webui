import linaria from '@wyw-in-js/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
import fs from 'fs';

// Automatically generate aliases for all workspace components
function generateComponentAliases() {
  const aliases: Record<string, string> = {};
  const componentsDir = path.resolve(__dirname, 'components');
  
  if (fs.existsSync(componentsDir)) {
    const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    componentDirs.forEach(componentDir => {
      const packageJsonPath = path.join(componentsDir, componentDir, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
          if (packageJson.name && packageJson.name.startsWith('@hautechai/webui.')) {
            aliases[packageJson.name] = path.resolve(componentsDir, componentDir, 'src');
          }
        } catch (error) {
          // Ignore invalid package.json files
        }
      }
    });
  }
  
  return aliases;
}

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
        setupFiles: ['./vitest.setup.ts'],
        include: ['components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css}'],
    },
    resolve: {
        alias: generateComponentAliases(),
    },
    esbuild: {
        jsx: 'automatic',
    },
});
