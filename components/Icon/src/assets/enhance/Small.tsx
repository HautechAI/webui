import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import { get } from 'lodash-es';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size ?? 24}
            viewBox="0 0 20 20"
            height={props.size ?? 24}
            fill="none"
            {...props}
        >
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M13.923 9.782a.59.59 0 0 0 .591-.592V3.52l1.357 1.356a.593.593 0 1 0 .836-.836L14.34 1.673a.59.59 0 0 0-.836 0L11.137 4.04a.592.592 0 0 0 .836.836l1.357-1.357V9.19c0 .327.265.592.592.592Z"
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
                d="M9.98 1.5h-.046c-1.821 0-3.248 0-4.362.15-1.139.153-2.038.473-2.744 1.178-.706.706-1.025 1.605-1.178 2.745-.15 1.113-.15 2.54-.15 4.361v.09c0 1.821 0 3.248.15 4.362.153 1.139.473 2.038 1.178 2.744.706.706 1.605 1.025 2.745 1.178 1.113.15 2.54.15 4.361.15h.09c1.821 0 3.248 0 4.362-.15 1.139-.153 2.038-.473 2.744-1.178.706-.706 1.025-1.605 1.178-2.745.15-1.113.15-2.54.15-4.36v-.046a.592.592 0 0 0-1.183 0c0 1.876-.002 3.223-.139 4.248l-.017.12-2.188-1.97a2.96 2.96 0 0 0-3.68-.22l-.235.165a.986.986 0 0 1-1.263-.11L6.369 8.828a2.406 2.406 0 0 0-3.285-.109l-.4.35c.004-1.414.024-2.487.138-3.338.136-1.009.394-1.617.843-2.067.45-.448 1.057-.706 2.066-.842 1.025-.137 2.372-.139 4.248-.139a.591.591 0 1 0 0-1.183ZM2.821 14.227c.136 1.01.394 1.617.843 2.067.45.449 1.057.707 2.066.842 1.025.137 2.372.14 4.248.14s3.223-.003 4.248-.14c1.01-.135 1.617-.394 2.067-.843.198-.197.36-.428.476-.682a1 1 0 0 1-.088-.066l-2.542-2.287a1.775 1.775 0 0 0-2.209-.134l-.234.165a2.17 2.17 0 0 1-2.781-.24L5.532 9.665a1.223 1.223 0 0 0-1.67-.055l-1.179 1.032c.003 1.536.018 2.685.139 3.585Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
