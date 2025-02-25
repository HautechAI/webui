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
                d="M4.5 13.998q.175-.102.388-.172.212-.07.459-.07h.814V3.5h-.814a.8.8 0 0 0-.603.261.84.84 0 0 0-.244.585zm.847 3.586q-.804 0-1.367-.559a1.84 1.84 0 0 1-.563-1.355V4.346q0-.804.563-1.366t1.367-.563h5.695V3.5H7.244v10.257h5.513v-3.132h1.083v4.215H5.347a.84.84 0 0 0-.599.237.78.78 0 0 0-.248.587.8.8 0 0 0 .248.594.82.82 0 0 0 .599.242H15.5V9.792h1.084v7.792zM14.5 9.792q0-1.795 1.249-3.043 1.248-1.25 3.043-1.249-1.794 0-3.043-1.248-1.25-1.25-1.249-3.043 0 1.794-1.248 3.043Q12.004 5.5 10.209 5.5q1.794 0 3.043 1.249Q14.5 7.997 14.5 9.792"
            />
        </svg>
    );
};
export default SvgSmall;
