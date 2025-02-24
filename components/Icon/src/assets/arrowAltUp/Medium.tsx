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
                d="M11.497 8.186a.774.774 0 0 1 1.006 0l7.22 6.188a.775.775 0 0 1-.444 1.36.77.77 0 0 1-.563-.184L12 9.791l-6.716 5.755a.773.773 0 1 1-1.006-1.173l7.219-6.188Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
