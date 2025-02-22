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
                d="M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V8.725q-.45-.274-.725-.713A1.86 1.86 0 0 1 2 7V4q0-.824.587-1.413A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587.586.589.587 1.413v3q0 .574-.275 1.012T21 8.725V20q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zM5 9v11h14V9zM4 7h16V4H4zm5 7h6v-2H9z"
            />
        </svg>
    );
};
export default SvgMedium;
