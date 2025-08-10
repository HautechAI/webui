import { defineConfig } from 'tsup';
import linaria from '@linaria/esbuild';

export default defineConfig({
    ...require('../../tsup.base.config.ts').default,
    esbuildPlugins: [
        linaria({
            sourceMap: true,
        }),
    ],
});
