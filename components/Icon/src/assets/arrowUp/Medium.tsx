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
                d="M11.424 4.19a.65.65 0 0 1 .921 0l5.216 5.217a.651.651 0 1 1-.921.921l-4.104-4.103V18.56a.652.652 0 1 1-1.304 0V6.225L7.13 10.328a.654.654 0 0 1-1.082-.2.65.65 0 0 1 .16-.721l5.217-5.216Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
