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
                d="M4.233 4.224c3.162-3.158 8.304-3.125 11.486.058s3.216 8.327.053 11.49c-3.163 3.162-8.307 3.13-11.49-.054a8.18 8.18 0 0 1-2.332-6.9.625.625 0 0 1 1.24.17 6.93 6.93 0 0 0 1.975 5.847c2.704 2.703 7.057 2.72 9.724.053 2.666-2.666 2.65-7.019-.054-9.723-2.702-2.702-7.052-2.72-9.719-.057l.623.003a.625.625 0 0 1-.005 1.25l-2.122-.01a.625.625 0 0 1-.622-.623l-.01-2.12a.625.625 0 1 1 1.25-.006zm5.766 1.817a.625.625 0 0 1 .625.625V9.74l1.901 1.9a.623.623 0 0 1 .008.891.624.624 0 0 1-.891-.007l-2.267-2.267v-3.59A.625.625 0 0 1 10 6.042"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
