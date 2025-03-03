import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
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
            width={props.size ?? 20}
            viewBox="0 0 20 20"
            height={props.size ?? 20}
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
                d="M10 5.208a.625.625 0 0 1 .625.625v5a.625.625 0 1 1-1.25 0v-5A.625.625 0 0 1 10 5.208m0 8.959a.834.834 0 1 0 0-1.668.834.834 0 0 0 0 1.668"
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
                d="M1.042 10a8.958 8.958 0 1 1 17.917 0 8.958 8.958 0 0 1-17.917 0M10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
