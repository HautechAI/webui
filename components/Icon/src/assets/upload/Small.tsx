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
                d="M10 1.927a.75.75 0 0 1 .75.75v10.021a.75.75 0 0 1-1.5 0V2.677a.75.75 0 0 1 .75-.75"
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
                d="M10.461 2.078a.625.625 0 0 0-.922 0L6.206 5.724a.625.625 0 0 0 .921.843l2.247-2.459v9.225a.625.625 0 1 0 1.25 0V4.11l2.247 2.458a.625.625 0 1 0 .923-.844z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M3.125 12.5a.625.625 0 1 0-1.25 0v.046c0 1.139 0 2.058.097 2.78.1.75.317 1.382.818 1.884.502.502 1.133.717 1.883.818.723.097 1.642.097 2.781.097h5.092c1.139 0 2.058 0 2.78-.097.75-.101 1.382-.316 1.884-.818s.717-1.133.818-1.883c.097-.723.097-1.642.097-2.781V12.5a.624.624 0 1 0-1.25 0c0 1.196-.002 2.03-.086 2.66-.082.612-.233.935-.463 1.166-.231.23-.554.38-1.167.463-.629.084-1.463.086-2.659.086h-5c-1.196 0-2.03-.002-2.66-.086-.612-.082-.935-.233-1.166-.463-.23-.231-.38-.554-.463-1.167-.084-.629-.086-1.463-.086-2.659"
            />
        </svg>
    );
};
export default SvgSmall;
