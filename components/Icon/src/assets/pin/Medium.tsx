import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
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
                d="m15.022 11.9 1.788 1.79v1.5h-4.538v5.5l-.75.75-.75-.75v-5.5H6.233v-1.5l1.789-1.79V4.69h-1v-1.5h9v1.5h-1zm-6.65 1.79h6.3l-1.15-1.15V4.69h-4v7.85z"
            />
        </svg>
    );
};
export default SvgMedium;
