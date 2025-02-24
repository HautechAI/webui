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
                d="M11.884 4a.65.65 0 0 1 .652.652v12.336l4.104-4.103a.654.654 0 0 1 1.081.2.65.65 0 0 1-.16.721l-5.216 5.216a.65.65 0 0 1-.921 0l-5.216-5.216a.653.653 0 1 1 .921-.921l4.103 4.103V4.652A.65.65 0 0 1 11.884 4"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
