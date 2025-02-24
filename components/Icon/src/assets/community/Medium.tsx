import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="M9 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M5.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M15 2.25a.75.75 0 1 0 0 1.5 2.25 2.25 0 0 1 0 4.5.75.75 0 1 0 0 1.5 3.75 3.75 0 0 0 0-7.5"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27s3.922.47 5.322 1.27c1.378.787 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27s-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.693 2.428-3.48m.744 1.303C3.267 15.482 2.75 16.279 2.75 17c0 .72.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25s3.444-.425 4.578-1.073c1.155-.66 1.672-1.459 1.672-2.177 0-.72-.517-1.518-1.672-2.178-1.134-.647-2.751-1.072-4.578-1.072s-3.444.425-4.578 1.072Z"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M18.16 13.267a.75.75 0 1 0-.32 1.466c.792.172 1.425.471 1.843.813.418.343.567.678.567.954 0 .25-.12.544-.453.854-.335.31-.85.598-1.513.797a.75.75 0 1 0 .432 1.438c.823-.248 1.558-.631 2.102-1.136.546-.508.932-1.174.932-1.953 0-.866-.474-1.588-1.117-2.114-.644-.527-1.51-.909-2.473-1.12Z"
            />
        </svg>
    );
};
export default SvgMedium;
