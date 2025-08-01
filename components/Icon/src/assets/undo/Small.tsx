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
                d="M7.109 2.891a.625.625 0 0 1 0 .884l-3.1 3.1h8.074a5.209 5.209 0 1 1 0 10.417H9.167a.625.625 0 0 1 0-1.25h2.916a3.959 3.959 0 0 0 0-7.917H4.01l3.1 3.1a.625.625 0 0 1-.884.884L2.058 7.942a.625.625 0 0 1 0-.884l4.167-4.167a.625.625 0 0 1 .884 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
