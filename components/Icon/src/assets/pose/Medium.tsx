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
                d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-4 2.25a4.124 4.124 0 0 0-4.095 3.642l-.65 5.52a.75.75 0 0 0 1.49.176l.65-5.52a2.62 2.62 0 0 1 1.855-2.209v4.193c0 .899 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08.627-.084 1.194-.27 1.65-.726s.64-1.022.725-1.65c.08-.594.08-1.343.08-2.242v-4.193a2.62 2.62 0 0 1 1.856 2.208l.65 5.52a.752.752 0 0 0 1.118.588.75.75 0 0 0 .371-.763l-.65-5.52A4.124 4.124 0 0 0 16 12.25z"
            />
        </svg>
    );
};
export default SvgMedium;
