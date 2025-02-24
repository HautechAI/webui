import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
const SvgXsmall = (
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
                d="M9.02 5.647a.5.5 0 0 1 0 .706L5.873 9.5h9.46a.5.5 0 0 1 0 1h-9.46l3.147 3.147a.5.5 0 1 1-.707.706l-4-4a.5.5 0 0 1 0-.706l4-4a.5.5 0 0 1 .707 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
