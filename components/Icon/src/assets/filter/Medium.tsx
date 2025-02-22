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
                d="M21.5 7.663a.663.663 0 0 1-.663.663H3.163a.663.663 0 1 1 0-1.326h17.674a.663.663 0 0 1 .663.663m-2.651 4.418a.663.663 0 0 1-.663.663H5.814a.663.663 0 1 1 0-1.325h12.372a.663.663 0 0 1 .663.662M16.198 16.5a.663.663 0 0 1-.663.663h-7.07a.663.663 0 1 1 0-1.326h7.07a.66.66 0 0 1 .663.663"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
