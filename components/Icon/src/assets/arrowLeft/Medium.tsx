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
                fillRule="evenodd"
                d="M10.404 4.838a.814.814 0 0 1 0 1.151l-5.125 5.125h15.407a.814.814 0 1 1 0 1.628H5.279l5.125 5.125a.815.815 0 1 1-1.151 1.151l-6.515-6.514a.814.814 0 0 1 0-1.151l6.515-6.515a.814.814 0 0 1 1.15 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
