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
                d="M13.618 4.892a.827.827 0 0 1 1.169 0l6.615 6.615a.827.827 0 0 1 0 1.17l-6.615 6.615a.827.827 0 1 1-1.169-1.17l5.204-5.203H3.177a.827.827 0 0 1 0-1.654h15.645L13.618 6.06a.827.827 0 0 1 0-1.17Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
