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
                d="M15.463 4.194a.773.773 0 0 1 .083 1.091L9.791 12l5.755 6.714a.774.774 0 1 1-1.173 1.006l-6.187-7.217a.77.77 0 0 1 0-1.007l6.187-7.217a.773.773 0 0 1 1.09-.084"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
