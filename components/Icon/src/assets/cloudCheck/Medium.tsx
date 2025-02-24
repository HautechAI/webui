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
                d="M17.303 14.097a.75.75 0 0 1 .063 1.059l-5.496 6.181a.75.75 0 0 1-1.01.102l-2.749-2.06a.75.75 0 0 1 .9-1.2l2.196 1.646 5.038-5.666a.75.75 0 0 1 1.058-.062"
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
                fillRule="evenodd"
                d="M8.698 3.61a7.38 7.38 0 0 1 11.238 5.334 5.43 5.43 0 0 1-1.465 10.651.75.75 0 1 1-.006-1.5 3.93 3.93 0 0 0 .827-7.77 1.18 1.18 0 0 1-.822-.991A5.881 5.881 0 0 0 7.054 7.95a1.14 1.14 0 0 1-1.042.723 4.722 4.722 0 0 0-.355 9.382.75.75 0 1 1-.219 1.484 6.222 6.222 0 0 1 .296-12.347A7.38 7.38 0 0 1 8.698 3.61"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
