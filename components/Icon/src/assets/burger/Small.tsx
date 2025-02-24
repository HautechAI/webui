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
                d="M17.291 5.833a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 1 1 0-1.25h13.333a.625.625 0 0 1 .625.625"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
