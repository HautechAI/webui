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
                d="M10 18.333A8.333 8.333 0 1 0 1.667 10 8.333 8.333 0 0 0 10 18.333m-3.003-5.372a.624.624 0 0 1 .875-.13c.607.45 1.34.71 2.128.71s1.52-.26 2.127-.71a.623.623 0 0 1 .991.345.625.625 0 0 1-.245.659c-.83.62-1.837.955-2.873.957a4.8 4.8 0 0 1-2.873-.957.625.625 0 0 1-.13-.874m6.336-4.211c0 .69-.373 1.25-.833 1.25s-.833-.56-.833-1.25.373-1.25.833-1.25.833.56.833 1.25M7.5 10c.46 0 .833-.56.833-1.25S7.96 7.5 7.5 7.5s-.833.56-.833 1.25S7.04 10 7.5 10"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
