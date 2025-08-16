import * as esbuild from 'esbuild';
import linaria from '@wyw-in-js/esbuild';
import * as tsup from 'tsup';

import path from 'node:path';
import * as fs from 'fs';

function cssAutoImport(options = {}) {
    const { specifier = './index.css' } = options;

    return {
        name: 'css-auto-import',
        setup(build) {
            // Ensure metafile is available so we can inspect outputs
            build.initialOptions.metafile = true;

            build.onEnd((result) => {
                try {
                    const cwd = process.cwd();
                    const outDir = build.initialOptions.outdir || path.dirname(build.initialOptions.outfile || 'dist');

                    // Only inject if the CSS file exists in output directory
                    const cssRel = specifier.startsWith('./') ? specifier.slice(2) : specifier;
                    const cssPath = path.resolve(cwd, outDir, cssRel);
                    if (!fs.existsSync(cssPath)) return;

                    const outputs = result?.metafile?.outputs || {};
                    const entryJsFiles = Object.keys(outputs).filter(
                        (outPath) => outPath.endsWith('.js') && outputs[outPath].entryPoint,
                    );

                    if (entryJsFiles.length === 0) return;

                    const importLine = `import "${specifier}";`;

                    for (const outPath of entryJsFiles) {
                        const abs = path.resolve(cwd, outPath);
                        if (!fs.existsSync(abs)) continue;
                        const content = fs.readFileSync(abs, 'utf8');
                        // Avoid duplicate injection
                        if (content.includes(importLine)) continue;
                        fs.writeFileSync(abs, `${importLine}\n${content}`);
                    }
                } catch (e) {
                    // Swallow errors to avoid failing the build; optionally log if needed
                }
            });
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
