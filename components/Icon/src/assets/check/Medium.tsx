import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import get from 'lodash/get';
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
                d="M19.945 6.205a.7.7 0 0 1 0 .99L9.266 17.873a.7.7 0 0 1-.99 0l-4.271-4.27a.7.7 0 1 1 .99-.99l3.776 3.776L18.955 6.205a.7.7 0 0 1 .99 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
