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
                d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            />
        </svg>
    );
};
export default SvgSmall;
