import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M8.52 4.177a.775.775 0 0 1 1.093.085l6.2 7.234a.776.776 0 0 1 0 1.009l-6.2 7.234a.775.775 0 0 1-1.176-1.009L14.204 12 8.437 5.27a.775.775 0 0 1 .083-1.092"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
