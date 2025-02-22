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
                d="M15 10.832h-4.166v4.166a.833.833 0 0 1-1.667 0v-4.166H5a.833.833 0 1 1 0-1.667h4.167V4.998a.833.833 0 0 1 1.667 0v4.167H15a.833.833 0 0 1 0 1.667"
            />
        </svg>
    );
};
export default SvgSmall;
