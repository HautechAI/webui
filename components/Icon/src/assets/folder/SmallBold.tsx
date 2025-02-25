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
                fillRule="evenodd"
                d="M1.725 4.173c-.058.307-.058.675-.058 1.41v5.875c0 3.143 0 4.714.976 5.69.977.976 2.548.977 5.69.977h3.334c3.142 0 4.714 0 5.69-.977.976-.976.976-2.547.976-5.69V9.623c0-2.193 0-3.29-.641-4.003a3 3 0 0 0-.187-.187c-.712-.641-1.81-.641-4.003-.641h-.312c-.96 0-1.442 0-1.89-.128a3.3 3.3 0 0 1-.707-.293c-.406-.226-.746-.567-1.426-1.246l-.459-.458a7 7 0 0 0-.461-.442 3.33 3.33 0 0 0-1.817-.752c-.155-.015-.317-.015-.638-.015-.736 0-1.104 0-1.41.059a3.33 3.33 0 0 0-2.657 2.656M10 9.167a.625.625 0 0 1 .625.625v1.041h1.042a.625.625 0 0 1 0 1.25h-1.042v1.042a.625.625 0 1 1-1.25 0v-1.042H8.333a.625.625 0 1 1 0-1.25h1.042V9.792A.625.625 0 0 1 10 9.167"
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
                d="M10 9.167a.625.625 0 0 1 .625.625v1.041h1.042a.625.625 0 0 1 0 1.25h-1.042v1.042a.625.625 0 1 1-1.25 0v-1.042H8.333a.625.625 0 1 1 0-1.25h1.042V9.792A.625.625 0 0 1 10 9.167"
            />
        </svg>
    );
};
export default SvgSmall;
