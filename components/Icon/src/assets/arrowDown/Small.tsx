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
                d="M10.32 3a.59.59 0 0 1 .59.59v11.153l3.71-3.71a.59.59 0 0 1 .848-.015.59.59 0 0 1-.015.848l-4.716 4.716a.59.59 0 0 1-.833 0l-4.716-4.716a.59.59 0 1 1 .833-.833l3.71 3.71V3.589A.59.59 0 0 1 10.32 3"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
