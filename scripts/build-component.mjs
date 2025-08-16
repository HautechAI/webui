import * as esbuild from 'esbuild';
import linaria from '@wyw-in-js/esbuild';
import * as tsup from 'tsup';

import path from 'node:path';
import * as fs from 'fs';

function cssAutoImport(options = {}) {
    const {
        specifier = './index.css', // or 'your-lib/index.css' for bare specifier
    } = options;

    return {
        name: 'css-auto-import',
        setup(build) {
            const line = `import "${specifier}";`;

            // Preserve any existing JS banner and append our import.
            const prev = (build.initialOptions.banner && build.initialOptions.banner.js) || '';
            build.initialOptions.banner = {
                ...(build.initialOptions.banner || {}),
                js: prev ? `${prev}\n${line}` : line,
            };
        },
    };
}

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
    alias: {
        '@hautechai/webui.themeprovider': path.resolve(componentDir, '../ThemeProvider/src/index.tsx'),
        react: path.resolve(componentDir, '../../node_modules/react'),
    },
    plugins: [
        linaria({
            esbuildOptions: {
                jsx: 'automatic',
                jsxImportSource: 'react',
            },
            babelOptions: {
                presets: ['@babel/preset-typescript'],
            },
        }),
        // linaria({}),
        cssAutoImport(),
    ],
});

// Create package.json
const { name, description, version, type, author, dependencies, license } = JSON.parse(
    fs.readFileSync(path.resolve(componentDir, 'package.json'), 'utf8'),
);

if (dependencies?.['@hautechai/webui.themeprovider']) {
    delete dependencies['@hautechai/webui.themeprovider'];
}

const newPackageJson = {
    name,
    description,
    version,
    author,
    license,
    type,
    dependencies,
    peerDependencies: {
        '@linaria/core': '^6.3.0',
        '@linaria/react': '^6.3.0',
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
    access: 'public',
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
