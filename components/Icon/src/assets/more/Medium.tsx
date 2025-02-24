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
                d="M7.556 11.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0m6.222 0a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0m6.222 0a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0"
            />
        </svg>
    );
};
export default SvgMedium;
