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
                d="M5.777 10.296v7.97c0 1.322 0 1.984.449 2.546.448.562.985.66 2.058.858.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.13a1.6 1.6 0 0 0-.949.702c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362c-.937.866-1.405 1.3-1.401 1.988.004.69.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968.132.3.132.643.132 1.327"
            />
        </svg>
    );
};
export default SvgMedium;
