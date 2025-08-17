#!/usr/bin/env node
/*
Adds @linaria/core and @linaria/react as peerDependencies to every component package.json under components/*
Idempotent: re-writes values if present. Preserves other fields and key order.
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const LINARIA_PEERS = {
    '@linaria/core': '^6.3.0',
    '@linaria/react': '^6.3.0',
};

function isDir(p) {
    try {
        return fs.statSync(p).isDirectory();
    } catch {
        return false;
    }
}
function exists(p) {
    try {
        fs.accessSync(p);
        return true;
    } catch {
        return false;
    }
}

function updatePackageJson(pkgPath) {
    const src = fs.readFileSync(pkgPath, 'utf8');
    let data;
    try {
        data = JSON.parse(src);
    } catch (e) {
        console.error(`✖ Skipping invalid JSON: ${pkgPath}`, e);
        return false;
    }
    const before = JSON.stringify(data.peerDependencies || {});
    if (!data.peerDependencies) data.peerDependencies = {};
    let changed = false;
    for (const [k, v] of Object.entries(LINARIA_PEERS)) {
        if (data.peerDependencies[k] !== v) {
            data.peerDependencies[k] = v;
            changed = true;
        }
    }
    if (!changed) return false;
    // Write back with 4-space indentation and trailing newline
    fs.writeFileSync(pkgPath, JSON.stringify(data, null, 4) + '\n', 'utf8');
    return true;
}

function main() {
    if (!isDir(COMPONENTS_DIR)) {
        console.error('Components directory not found:', COMPONENTS_DIR);
        process.exit(1);
    }
    const entries = fs.readdirSync(COMPONENTS_DIR).filter((name) => !name.startsWith('.'));
    let updated = 0;
    let checked = 0;
    for (const name of entries) {
        const dir = path.join(COMPONENTS_DIR, name);
        if (!isDir(dir)) continue;
        const pkgPath = path.join(dir, 'package.json');
        if (!exists(pkgPath)) continue;
        checked += 1;
        if (updatePackageJson(pkgPath)) updated += 1;
    }
    console.log(`✔ Processed ${checked} packages. Updated ${updated} package.json files.`);
}

if (require.main === module) main();
