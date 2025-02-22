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
                d="M5 16.175q.251-.075.487-.125Q5.726 16 6 16h1V4H6a.97.97 0 0 0-.713.287A.97.97 0 0 0 5 5zM6 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 19V5q0-1.25.875-2.125A2.9 2.9 0 0 1 6 2h7v2H9v12h6v-3h2v5H6a.97.97 0 0 0-.713.288A.97.97 0 0 0 5 19q0 .424.287.712Q5.575 20 6 20h13v-8h2v10zm11.5-10q0-2.3 1.6-3.9T23 6.5q-2.3 0-3.9-1.6T17.5 1q0 2.3-1.6 3.9T12 6.5q2.3 0 3.9 1.6t1.6 3.9"
            />
        </svg>
    );
};
export default SvgMedium;
