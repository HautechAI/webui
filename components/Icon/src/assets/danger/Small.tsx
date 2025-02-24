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
                d="M10 5.208a.625.625 0 0 1 .625.625v5a.625.625 0 1 1-1.25 0v-5A.625.625 0 0 1 10 5.208m0 8.959a.834.834 0 1 0 0-1.668.834.834 0 0 0 0 1.668"
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
                d="M1.042 10a8.958 8.958 0 1 1 17.917 0 8.958 8.958 0 0 1-17.917 0M10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
