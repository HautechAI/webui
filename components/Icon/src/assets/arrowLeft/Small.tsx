import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash-es/get';
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
                d="M8.824 5.176a.6.6 0 0 1 0 .848L5.048 9.8H16.4a.6.6 0 0 1 0 1.2H5.048l3.776 3.776a.6.6 0 1 1-.848.848l-4.8-4.8a.6.6 0 0 1 0-.848l4.8-4.8a.6.6 0 0 1 .848 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
