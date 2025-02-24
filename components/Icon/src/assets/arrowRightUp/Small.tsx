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
                d="M7.5 5.625a.625.625 0 0 1 0-1.25H15a.625.625 0 0 1 .625.625v7.5a.625.625 0 1 1-1.25 0V6.508l-8.933 8.934a.625.625 0 0 1-.884-.884l8.934-8.933z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
