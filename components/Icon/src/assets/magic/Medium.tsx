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
                d="M11.187 5.12c.286-.745 1.34-.745 1.626 0l1.543 4.023c.088.23.27.413.501.501l4.022 1.543c.746.286.746 1.34 0 1.626l-4.022 1.543a.87.87 0 0 0-.501.501l-1.543 4.022c-.286.746-1.34.746-1.626 0l-1.543-4.022a.87.87 0 0 0-.501-.501L5.12 12.813c-.746-.286-.746-1.34 0-1.626l4.022-1.543a.87.87 0 0 0 .501-.501l1.543-4.022Z"
            />
        </svg>
    );
};
export default SvgMedium;
