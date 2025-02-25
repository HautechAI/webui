import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M18.526 2.38a2.224 2.224 0 0 1 2.82.276 2.25 2.25 0 0 1 .277 2.834l-2.77 4.172a11.65 11.65 0 0 1-5.177 4.294 5.9 5.9 0 0 0-1.38-2.207 5.8 5.8 0 0 0-2.197-1.387 11.68 11.68 0 0 1 4.275-5.2l4.152-2.783ZM8.182 12.23c-.964 0-1.888.384-2.57 1.069a3.66 3.66 0 0 0-1.065 2.583.733.733 0 0 1-.666.728.7.7 0 0 1-.352-.058 1.09 1.09 0 0 0-1.216.235 1.1 1.1 0 0 0-.213 1.226 5.1 5.1 0 0 0 2.353 2.447 5.06 5.06 0 0 0 3.36.422 5.1 5.1 0 0 0 2.88-1.79 5.13 5.13 0 0 0 1.125-3.21c0-.97-.383-1.898-1.065-2.583a3.63 3.63 0 0 0-2.57-1.07ZM18.5 22a.594.594 0 0 1-.594-.594v-5.812a.594.594 0 0 1 1.188 0v5.812A.594.594 0 0 1 18.5 22m-2.906-2.906a.594.594 0 0 1 0-1.188h5.812a.594.594 0 0 1 0 1.188z"
            />
        </svg>
    );
};
export default SvgMedium;
