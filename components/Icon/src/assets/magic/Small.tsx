import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import { get } from 'lodash-es';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size ?? 24}
            viewBox="0 0 20 20"
            height={props.size ?? 24}
            fill="none"
            {...props}
        >
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M9.367 4.65a.677.677 0 0 1 1.265 0l1.2 3.128c.069.18.21.32.39.39l3.129 1.2a.677.677 0 0 1 0 1.264l-3.129 1.2a.68.68 0 0 0-.39.39l-1.2 3.129a.677.677 0 0 1-1.265 0l-1.2-3.129a.68.68 0 0 0-.39-.39l-3.128-1.2a.677.677 0 0 1 0-1.265l3.129-1.2a.68.68 0 0 0 .39-.39l1.2-3.128Z"
            />
        </svg>
    );
};
export default SvgSmall;
