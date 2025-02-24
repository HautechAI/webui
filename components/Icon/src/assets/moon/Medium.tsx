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
                d="M11.177 4.3a7.744 7.744 0 1 0 8.524 8.523A6.07 6.07 0 1 1 11.177 4.3M3 12a9 9 0 0 1 9-9c.6 0 .9.478.952.86.05.366-.086.832-.507 1.087a4.814 4.814 0 1 0 6.608 6.609c.255-.421.721-.557 1.088-.507.381.052.859.351.859.952a9 9 0 0 1-18 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
