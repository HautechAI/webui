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
                d="M20.372 11.875a8.497 8.497 0 1 1-8.497-8.497.69.69 0 0 0 0-1.378C6.421 2 2 6.421 2 11.875s4.421 9.875 9.875 9.875 9.875-4.421 9.875-9.875a.69.69 0 0 0-1.378 0"
            />
        </svg>
    );
};
export default SvgMedium;
