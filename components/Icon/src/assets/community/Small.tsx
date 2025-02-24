import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M7.5 1.042a3.958 3.958 0 1 0 0 7.917 3.958 3.958 0 0 0 0-7.917M4.792 5a2.708 2.708 0 1 1 5.417 0 2.708 2.708 0 0 1-5.417 0"
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
                d="M12.5 1.875a.625.625 0 1 0 0 1.25 1.875 1.875 0 1 1 0 3.75.625.625 0 1 0 0 1.25 3.125 3.125 0 1 0 0-6.25"
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
                d="M3.065 11.266c1.167-.666 2.736-1.058 4.435-1.058 1.7 0 3.269.392 4.435 1.058 1.149.657 2.024 1.659 2.024 2.9 0 1.242-.875 2.244-2.024 2.9-1.166.667-2.736 1.059-4.435 1.059s-3.268-.392-4.435-1.059c-1.148-.656-2.023-1.658-2.023-2.9s.875-2.243 2.023-2.9m.62 1.086c-.962.55-1.393 1.214-1.393 1.814s.43 1.264 1.393 1.814c.945.54 2.293.895 3.815.895 1.523 0 2.87-.355 3.815-.895.963-.55 1.394-1.215 1.394-1.814s-.431-1.264-1.394-1.814c-.945-.54-2.292-.894-3.815-.894-1.522 0-2.87.354-3.815.894"
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
                d="M15.134 11.055a.625.625 0 1 0-.267 1.222c.66.144 1.187.393 1.536.678.348.285.472.565.472.795 0 .208-.1.454-.377.711-.28.26-.709.499-1.261.665a.627.627 0 0 0-.304.994.62.62 0 0 0 .664.204c.686-.207 1.298-.526 1.752-.947.455-.422.776-.978.776-1.627 0-.721-.395-1.324-.93-1.762-.537-.44-1.26-.757-2.061-.933"
            />
        </svg>
    );
};
export default SvgSmall;
