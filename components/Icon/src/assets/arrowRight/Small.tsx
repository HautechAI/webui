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
                d="M11.176 5.175a.6.6 0 0 1 .848 0l4.8 4.8a.6.6 0 0 1 0 .848l-4.8 4.8a.6.6 0 1 1-.848-.847l3.777-3.777H3.6a.6.6 0 1 1 0-1.2h11.352l-3.776-3.776a.6.6 0 0 1 0-.848"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
