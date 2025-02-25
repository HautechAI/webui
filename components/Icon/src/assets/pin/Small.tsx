import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m13.054 9.381 2.153 2.154v1.279h-4.564v5.116l-.64.64-.639-.64v-5.116H4.8v-1.28l2.153-2.153V2.68h-1.18V1.4h8.462v1.28h-1.181zm-6.445 2.154h6.79L11.774 9.91V2.68H8.232v7.232L6.61 11.535Z"
            />
        </svg>
    );
};
export default SvgSmall;
