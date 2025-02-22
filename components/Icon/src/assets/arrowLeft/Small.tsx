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
                d="M8.824 5.176a.6.6 0 0 1 0 .848L5.048 9.8H16.4a.6.6 0 0 1 0 1.2H5.048l3.776 3.776a.6.6 0 1 1-.848.848l-4.8-4.8a.6.6 0 0 1 0-.848l4.8-4.8a.6.6 0 0 1 .848 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
