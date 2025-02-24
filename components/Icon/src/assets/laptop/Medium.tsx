import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M8.3 3.25h7.4c.899 0 1.648 0 2.243.08.627.084 1.194.27 1.65.725.455.456.64 1.023.725 1.65.08.595.08 1.345.08 2.243v7.284l1.513 1.561.003.004.008.007.007.008.006.006.01.01.01.011.005.005.008.009.009.01.008.01.012.015c.372.43.703 1.074.748 1.717v.004l.003.023v.013l.002.014v.115c0 .13 0 .319-.005.4a2.75 2.75 0 0 1-2.57 2.57c-.088.006-.185.006-.311.006H4.137c-.126 0-.223 0-.31-.006a2.75 2.75 0 0 1-2.572-2.57 9 9 0 0 1-.004-.398v-.143l.004-.024v-.004c.046-.643.377-1.286.749-1.717l.012-.015.008-.01.01-.01.007-.009.004-.005.01-.01.01-.011.006-.006.008-.008.007-.007.004-.004 1.513-1.561V7.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.343-.08 2.242-.08M4.67 16.286l-1.514 1.563c-.227.253-.394.626-.405.877v.353a1.25 1.25 0 0 0 1.17 1.168c.034.003.079.003.24.003h15.678c.16 0 .206 0 .24-.003a1.25 1.25 0 0 0 1.168-1.168v-.035l.002-.257v-.06c-.011-.252-.178-.625-.406-.878l-1.514-1.563zm14.227-1.5V8c0-.964-.002-1.612-.067-2.095-.062-.461-.17-.659-.3-.789-.131-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H8.353c-.964 0-1.612.002-2.095.067-.461.062-.66.169-.79.3s-.237.327-.3.788c-.064.483-.065 1.131-.065 2.095v6.786zM2.33 18.024l-.031-.012.009.005zm6.419.476a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
