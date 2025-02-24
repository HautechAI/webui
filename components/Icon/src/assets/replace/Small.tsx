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
                d="M2.441 9.333c.06-4.133 3.455-7.458 7.624-7.458a7.63 7.63 0 0 1 6.512 3.63.625.625 0 0 1-1.064.656 6.38 6.38 0 0 0-5.448-3.036c-3.487 0-6.312 2.773-6.373 6.207L4.025 9a.625.625 0 0 1 .881.887l-1.4 1.389a.625.625 0 0 1-.88 0l-1.4-1.389A.625.625 0 1 1 2.106 9zm14.047-.61a.625.625 0 0 1 .88 0l1.404 1.388a.63.63 0 0 1 .013.89.626.626 0 0 1-.891-.001l-.342-.338c-.058 4.138-3.467 7.463-7.65 7.463a7.67 7.67 0 0 1-6.535-3.63.625.625 0 1 1 1.064-.657 6.42 6.42 0 0 0 5.471 3.037c3.505 0 6.342-2.777 6.4-6.21l-.34.335a.625.625 0 0 1-.88-.89z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
