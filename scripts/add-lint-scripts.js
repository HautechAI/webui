#!/usr/bin/env node
/*
Adds linting scripts to every package.json under components/* and apps/*
Idempotent: re-writes values if present. Preserves other fields and key order.
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const APPS_DIR = path.join(ROOT, 'apps');

const LINT_SCRIPTS = {
    'lint:eslint': 'eslint src --ext .ts,.tsx',
    'lint:eslint:fix': 'eslint src --ext .ts,.tsx --fix',
    'lint:tsc': 'tsc --noEmit',
    'lint:prettier': 'prettier --check src',
    'lint:prettier:fix': 'prettier --write src',
    'lint': 'pnpm lint:eslint && pnpm lint:tsc && pnpm lint:prettier',
    'lint:fix': 'pnpm lint:eslint:fix && pnpm lint:prettier:fix',
};

function isDir(p) {
    try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function exists(p) {
    try { fs.accessSync(p); return true; } catch { return false; }
}

function updatePackageJson(pkgPath) {
    const src = fs.readFileSync(pkgPath, 'utf8');
    let data;
    try {
        data = JSON.parse(src);
    } catch (e) {
        console.error(`✖ Skipping invalid JSON: ${pkgPath}`);
        return false;
    }

    const beforeScripts = JSON.stringify(data.scripts || {});
    if (!data.scripts) data.scripts = {};

    let changed = false;
    for (const [k, v] of Object.entries(LINT_SCRIPTS)) {
        if (data.scripts[k] !== v) {
            data.scripts[k] = v;
            changed = true;
        }
    }

    if (!changed) return false;

    // Write back with 4-space indentation and trailing newline
    fs.writeFileSync(pkgPath, JSON.stringify(data, null, 4) + '\n', 'utf8');
    console.log(`✔ Updated scripts in ${path.relative(ROOT, pkgPath)}`);
    return true;
}

function processDirectory(dir, dirName) {
    if (!isDir(dir)) {
        console.log(`ℹ ${dirName} directory not found: ${dir}`);
        return { updated: 0, checked: 0 };
    }

    const entries = fs.readdirSync(dir).filter((name) => !name.startsWith('.'));
    let updated = 0;
    let checked = 0;

    for (const name of entries) {
        const subDir = path.join(dir, name);
        if (!isDir(subDir)) continue;

        const pkgPath = path.join(subDir, 'package.json');
        if (!exists(pkgPath)) continue;

        checked += 1;
        if (updatePackageJson(pkgPath)) updated += 1;
    }

    return { updated, checked };
}

function main() {
    const components = processDirectory(COMPONENTS_DIR, 'Components');
    const apps = processDirectory(APPS_DIR, 'Apps');

    const totalUpdated = components.updated + apps.updated;
    const totalChecked = components.checked + apps.checked;

    console.log(`\n✔ Processed ${totalChecked} packages. Updated ${totalUpdated} package.json files.`);
    console.log(`  Components: ${components.checked} checked, ${components.updated} updated`);
    console.log(`  Apps: ${apps.checked} checked, ${apps.updated} updated`);
}

if (require.main === module) main();