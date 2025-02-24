import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
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
                d="M10 8.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666m-3.333 1.875a3.437 3.437 0 0 0-3.413 3.035l-.541 4.6a.625.625 0 0 0 1.241.147l.542-4.6a2.18 2.18 0 0 1 1.546-1.84v3.493c0 .75 0 1.374.066 1.869.07.523.225.995.605 1.375s.852.535 1.375.605c.495.066 1.12.066 1.869.066h.086c.75 0 1.374 0 1.87-.066.522-.07.995-.225 1.374-.605s.534-.852.605-1.375c.066-.495.066-1.12.066-1.869V11.55a2.18 2.18 0 0 1 1.547 1.84l.542 4.6a.623.623 0 0 0 .932.49.63.63 0 0 0 .309-.636l-.542-4.6a3.436 3.436 0 0 0-3.413-3.035H6.667Z"
            />
        </svg>
    );
};
export default SvgSmall;
