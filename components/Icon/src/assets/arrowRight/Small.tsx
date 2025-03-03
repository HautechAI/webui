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
                fillRule="evenodd"
                d="M11.176 5.175a.6.6 0 0 1 .848 0l4.8 4.8a.6.6 0 0 1 0 .848l-4.8 4.8a.6.6 0 1 1-.848-.847l3.777-3.777H3.6a.6.6 0 1 1 0-1.2h11.352l-3.776-3.776a.6.6 0 0 1 0-.848"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
