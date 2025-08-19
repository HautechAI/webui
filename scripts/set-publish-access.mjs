#!/usr/bin/env node
// Ensures every components/*/package.json has publishConfig.access = "public"
// Preserves existing publishConfig fields and only writes when a change is needed.

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

async function fileExists(p) {
    try {
        await stat(p);
        return true;
    } catch {
        return false;
    }
}

async function main() {
    const cwd = process.cwd();
    const componentsDir = path.resolve(cwd, 'components');

    const entries = await readdir(componentsDir, { withFileTypes: true });

    let updated = 0;
    let skipped = 0;
    let missing = 0;

    await Promise.all(
        entries
            .filter((e) => e.isDirectory())
            .map(async (dir) => {
                const pkgPath = path.join(componentsDir, dir.name, 'package.json');
                if (!(await fileExists(pkgPath))) {
                    missing++;
                    return;
                }
                const raw = await readFile(pkgPath, 'utf8');
                let json;
                try {
                    json = JSON.parse(raw);
                } catch (e) {
                    console.error(`❌ Failed to parse JSON for ${pkgPath}:`, e.message);
                    skipped++;
                    return;
                }

                const before = JSON.stringify(json);
                if (typeof json.publishConfig !== 'object' || json.publishConfig === null) {
                    json.publishConfig = {};
                }
                if (json.publishConfig.access !== 'public') {
                    json.publishConfig.access = 'public';
                }

                const afterObj = json;
                const after = JSON.stringify(afterObj);
                if (before !== after) {
                    // Use 4-space indentation to closely match existing formatting in component package.json files
                    await writeFile(pkgPath, JSON.stringify(afterObj, null, 4) + '\n', 'utf8');
                    console.log(`✅ Updated publishConfig.access in ${path.relative(cwd, pkgPath)}`);
                    updated++;
                } else {
                    skipped++;
                }
            }),
    );

    console.log(`\nDone. Updated: ${updated}, Unchanged/Skipped: ${skipped}, Missing package.json: ${missing}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
