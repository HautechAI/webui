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
                d="M5.75 17.584q-.554 0-.944-.393a1.3 1.3 0 0 1-.389-.947V8.757q0-.555.392-.948.393-.392.948-.392h.66v-2q0-1.492 1.047-2.538t2.541-1.046c1.494 0 1.841.35 2.536 1.046q1.043 1.046 1.043 2.538v2h.66q.554 0 .947.392.393.393.393.948v7.487q0 .554-.393.947a1.3 1.3 0 0 1-.948.393zm.007-1.084h8.487a.25.25 0 0 0 .184-.072.25.25 0 0 0 .072-.184V8.757a.25.25 0 0 0-.072-.185.25.25 0 0 0-.184-.072H5.757a.25.25 0 0 0-.185.072.25.25 0 0 0-.072.185v7.487a.25.25 0 0 0 .072.184.25.25 0 0 0 .185.072m4.248-2.708q.54 0 .914-.378.372-.378.373-.918c.001-.54-.126-.665-.378-.914a1.26 1.26 0 0 0-.918-.373q-.54 0-.914.377a1.26 1.26 0 0 0-.373.918q0 .54.378.915.377.372.918.373M7.5 7.417h5v-2a2.4 2.4 0 0 0-.729-1.771 2.4 2.4 0 0 0-1.77-.73 2.4 2.4 0 0 0-1.772.73 2.4 2.4 0 0 0-.729 1.77z"
            />
        </svg>
    );
};
export default SvgSmall;
