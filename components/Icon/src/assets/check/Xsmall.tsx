import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
            <path
                fill="#517D89"
                fillRule="evenodd"
                d="M14.095 3.505a.7.7 0 0 1 0 .99l-8.072 8.071a.7.7 0 0 1-.99 0L1.806 9.338a.7.7 0 1 1 .99-.99l2.733 2.733 7.577-7.576a.7.7 0 0 1 .99 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
