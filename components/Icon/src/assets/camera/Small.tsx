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
                d="M2.757 16.583q-.549 0-.944-.396a1.3 1.3 0 0 1-.396-.944V6.756q0-.548.396-.944.395-.396.944-.396h2.42l1.5-2h5.663V4.5H7.242l-1.508 2H2.757a.25.25 0 0 0-.185.072.25.25 0 0 0-.072.184v8.487a.25.25 0 0 0 .072.185.25.25 0 0 0 .185.072h12.487a.25.25 0 0 0 .184-.072.25.25 0 0 0 .072-.185V7.66h1.084v7.583q0 .548-.389.944a1.28 1.28 0 0 1-.951.396zM15.5 6V4.5H14V3.417h1.5v-1.5h1.084v1.5h1.5V4.5h-1.5V6zM9 14.18q1.373 0 2.276-.925.904-.925.904-2.255 0-1.31-.904-2.245Q10.373 7.82 9 7.82q-1.371 0-2.275.935t-.904 2.255.904 2.245q.903.924 2.275.924Zm0-1.084q-.922 0-1.51-.61-.585-.611-.586-1.507 0-.88.587-1.477.585-.598 1.51-.598.923 0 1.509.598.587.597.587 1.477 0 .897-.587 1.507-.586.61-1.51.61"
            />
        </svg>
    );
};
export default SvgSmall;
