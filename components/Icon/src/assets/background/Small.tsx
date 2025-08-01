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
                fillRule="evenodd"
                d="M6.25 1.042a.625.625 0 0 1 .625.625v.416a.625.625 0 0 1-1.25 0v-.416a.625.625 0 0 1 .625-.625M2.567 2.567a.625.625 0 0 1 .885 0l.18.18a.625.625 0 0 1-.885.884l-.18-.18a.625.625 0 0 1 0-.884m7.366 0a.624.624 0 0 1 0 .885l-.18.18a.625.625 0 1 1-.883-.884l.18-.18a.625.625 0 0 1 .883 0ZM1.042 6.25a.625.625 0 0 1 .625-.625h.416a.625.625 0 0 1 0 1.25h-.416a.625.625 0 0 1-.625-.625m2.59 2.62a.625.625 0 0 1 0 .882l-.18.18a.625.625 0 0 1-.885-.883l.18-.18a.625.625 0 0 1 .885 0Z"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M13.572 18.333c2.63 0 4.761-2.106 4.761-4.705 0-2.06-1.339-3.811-3.204-4.449C14.864 6.83 12.846 5 10.397 5c-2.63 0-4.762 2.107-4.762 4.706 0 .575.104 1.125.295 1.635a3.7 3.7 0 0 0-.692-.067c-1.972.001-3.571 1.581-3.571 3.53 0 1.95 1.599 3.53 3.571 3.53h8.334ZM8.175 4.17a2.917 2.917 0 0 0-3.688 4.435A5.98 5.98 0 0 1 8.175 4.17"
            />
        </svg>
    );
};
export default SvgSmall;
