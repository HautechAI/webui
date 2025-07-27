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
                d="M17.291 5.833a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 1 1 0-1.25h13.333a.625.625 0 0 1 .625.625"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
