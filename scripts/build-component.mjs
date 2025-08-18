import * as esbuild from 'esbuild';
import * as tsup from 'tsup';

import path from 'node:path';
import * as fs from 'fs';

const componentDir = process.cwd();

// bundle sources
await esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'dist',
    packages: 'external',
    target: ['esnext'],
    format: 'esm',
    jsx: 'automatic',
    jsxImportSource: 'react',
    plugins: [],
});

// Create package.json
const { name, description, version, type, author, dependencies, license } = JSON.parse(
    fs.readFileSync(path.resolve(componentDir, 'package.json'), 'utf8'),
);

const newPackageJson = {
    name,
    description,
    version,
    author,
    license,
    type,
    dependencies,
    peerDependencies: {
        react: '^19.0.0',
    },
    main: './index.js',
    module: './index.js',
    types: './index.d.ts',
    exports: {
        '.': {
            import: './index.js',
            require: './index.js',
        },
        './index.css': './index.css',
    },
    sideEffects: ['*.css'],
    // Ensure scoped packages are published publicly when using dist/package.json
    publishConfig: {
        access: 'public',
    },
};

fs.writeFileSync(path.resolve(componentDir, 'dist/package.json'), JSON.stringify(newPackageJson, null, 2));

// Generate TypeScript declaration files
await tsup.build({
    entry: [path.resolve(componentDir, 'src/index.tsx')],
    format: 'esm',
    outDir: path.resolve(componentDir, 'dist'),
    silent: true,
    dts: { only: true },
});

// Copy readme
fs.writeFileSync(
    path.resolve(componentDir, 'dist/README.md'),
    fs.readFileSync(path.resolve(componentDir, 'README.md'), 'utf8'),
);
