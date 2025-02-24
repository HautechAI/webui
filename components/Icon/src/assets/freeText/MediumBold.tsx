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
                d="M13.5 5.426c0-.783-.5-1.678-1.283-1.68h-.765c-1.933 0-3.447 0-4.63.16-1.208.162-2.163.502-2.912 1.25-.75.75-1.089 1.704-1.25 2.914-.16 1.181-.16 2.696-.16 4.629v.095c0 1.933 0 3.448.16 4.63.161 1.209.501 2.163 1.25 2.913.75.749 1.704 1.088 2.913 1.25 1.182.16 2.696.16 4.63.16h.095c1.933 0 3.447 0 4.63-.16 1.208-.162 2.163-.502 2.912-1.25.75-.75 1.088-1.704 1.25-2.914.16-1.181.16-2.696.16-4.629V12.7q.002-.985-.006-1.83c-.009-.77-.724-1.318-1.494-1.318-3.038 0-5.5-1.847-5.5-4.125Z"
                clipRule="evenodd"
            />
            <path
                fill="#F3F8F8"
                d="M10.199 10.6c-.27 0-.523 0-.73.03-.233.035-.472.118-.664.331-.185.206-.25.45-.279.685-.026.218-.026.49-.026.796v.359a.472.472 0 0 0 .943 0v-.332c0-.342 0-.555.02-.71a.6.6 0 0 1 .028-.139.1.1 0 0 1 .015-.028l.007-.005a.4.4 0 0 1 .096-.024 5 5 0 0 1 .62-.02h.786v5.344h-1.1a.472.472 0 0 0 0 .943h3.457a.471.471 0 1 0 0-.943h-1.414v-5.344h.786c.31 0 .491.001.62.02a.4.4 0 0 1 .095.024l.007.004a.1.1 0 0 1 .015.029c.009.024.02.066.03.139.018.155.019.368.019.71v.332a.472.472 0 0 0 .943 0v-.359c0-.307 0-.578-.027-.796-.028-.234-.093-.48-.278-.686-.192-.212-.432-.295-.665-.33a5 5 0 0 0-.73-.03z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m21.298 4.973-.807-.24a2.06 2.06 0 0 1-1.417-1.415l-.24-.806c-.087-.283-.544-.283-.631 0l-.24.806a2.06 2.06 0 0 1-1.417 1.416l-.806.24c-.131.043-.24.173-.24.304 0 .13.087.262.24.305l.806.24c.698.196 1.22.74 1.417 1.415l.24.806c.043.13.174.24.305.24a.32.32 0 0 0 .305-.24l.24-.806a2.06 2.06 0 0 1 1.416-1.415l.807-.24c.13-.043.24-.174.24-.305 0-.13-.066-.261-.218-.305M18.53 6.868A2.78 2.78 0 0 0 16.96 5.3a2.78 2.78 0 0 0 1.57-1.568c.283.719.85 1.285 1.569 1.568a2.78 2.78 0 0 0-1.57 1.568Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M18.53 6.868A2.78 2.78 0 0 0 16.96 5.3a2.78 2.78 0 0 0 1.57-1.568c.283.719.85 1.285 1.569 1.568a2.78 2.78 0 0 0-1.57 1.568Z"
            />
        </svg>
    );
};
export default SvgMedium;
