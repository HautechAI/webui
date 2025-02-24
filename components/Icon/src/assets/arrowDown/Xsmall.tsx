import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M8.256 2a.47.47 0 0 1 .472.472v8.923l2.968-2.968a.472.472 0 1 1 .667.666L8.59 12.866a.47.47 0 0 1-.667 0L4.15 9.093a.471.471 0 1 1 .667-.666l2.968 2.968V2.472A.47.47 0 0 1 8.256 2"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
