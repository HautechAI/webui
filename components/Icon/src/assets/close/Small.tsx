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
                d="M4.18 4.18c.24-.24.63-.24.87 0L10 9.13l4.95-4.95a.615.615 0 0 1 .87.87L10.87 10l4.95 4.95a.615.615 0 0 1-.87.87L10 10.87l-4.95 4.95a.615.615 0 0 1-.87-.87L9.13 10 4.18 5.05a.615.615 0 0 1 0-.87"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
