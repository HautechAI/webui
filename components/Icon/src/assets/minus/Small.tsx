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
                d="M15 10.832H5a.833.833 0 1 1 0-1.667h10a.833.833 0 0 1 0 1.667"
            />
        </svg>
    );
};
export default SvgSmall;
