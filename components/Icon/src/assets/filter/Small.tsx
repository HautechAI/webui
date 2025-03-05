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
                d="M17.69 6.363a.53.53 0 0 1-.53.53H3.03a.53.53 0 0 1 0-1.06h14.13a.53.53 0 0 1 .53.53m-2.12 3.533a.53.53 0 0 1-.53.53H5.15a.53.53 0 1 1 0-1.06h9.89a.53.53 0 0 1 .53.53m-2.119 3.533a.53.53 0 0 1-.53.53H7.27a.53.53 0 1 1 0-1.06h5.652a.53.53 0 0 1 .53.53Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
