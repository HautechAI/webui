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
                d="M16.621 5.17a.583.583 0 0 1 0 .826l-8.899 8.899a.583.583 0 0 1-.825 0l-3.56-3.56a.583.583 0 0 1 .826-.825l3.147 3.147 8.486-8.486a.583.583 0 0 1 .825 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
