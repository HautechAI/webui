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
                d="M20.292 7.698a.7.7 0 0 1-.698.699H4.698a.698.698 0 1 1 0-1.397h14.896a.7.7 0 0 1 .698.698m0 4.655a.7.7 0 0 1-.698.698H4.698a.698.698 0 1 1 0-1.396h14.896a.7.7 0 0 1 .698.698m0 4.655a.7.7 0 0 1-.698.698H4.698a.698.698 0 0 1 0-1.396h14.896a.7.7 0 0 1 .698.698"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
