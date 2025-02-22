import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M14.42 11.747c.258.23.281.625.052.883l-4.58 5.151a.625.625 0 0 1-.842.085l-2.29-1.717a.625.625 0 0 1 .75-1l1.83 1.372 4.197-4.722a.625.625 0 0 1 .883-.052"
                clipRule="evenodd"
            />
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M7.249 3.008a6.15 6.15 0 0 1 9.365 4.445 4.525 4.525 0 0 1-1.221 8.876.625.625 0 1 1-.006-1.25 3.274 3.274 0 0 0 .732-6.463.98.98 0 0 1-.727-.838 4.9 4.9 0 0 0-9.514-1.153.95.95 0 0 1-.868.603 3.935 3.935 0 0 0-.296 7.818.625.625 0 1 1-.182 1.237 5.185 5.185 0 0 1 .247-10.29 6.15 6.15 0 0 1 2.47-2.985"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
