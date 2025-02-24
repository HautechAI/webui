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
                d="M4.178 8.27a.775.775 0 0 1 1.093-.083l6.73 5.768 6.73-5.768a.775.775 0 0 1 1.008 1.176l-7.234 6.2a.775.775 0 0 1-1.009 0l-7.234-6.2a.775.775 0 0 1-.083-1.092"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
