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
                fillRule="evenodd"
                d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061-.001M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.061 0"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6 9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22zM9.81 5.004a3.5 3.5 0 0 0-4.426 5.322c.46-2.437 2.164-4.43 4.426-5.322"
            />
        </svg>
    );
};
export default SvgMedium;
