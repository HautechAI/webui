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
            viewBox={`0 0 ${props.size ?? 24} ${props.size ?? 24}`}
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
                d="M8.354 5.708c1.564-.626 2.497-1 3.646-1s2.083.374 3.647 1l2.475.99c.795.318 1.44.575 1.882.807.223.117.44.25.607.411.172.165.348.415.348.75 0 .337-.175.587-.348.752-.166.16-.383.293-.608.41-.442.232-1.086.49-1.882.809l-2.475.989c-1.562.626-2.496 1-3.646 1s-2.082-.374-3.646-1l-2.475-.99c-.795-.318-1.44-.575-1.882-.807a2.7 2.7 0 0 1-.608-.411c-.171-.165-.347-.415-.347-.751s.175-.586.347-.751a2.7 2.7 0 0 1 .609-.41c.441-.232 1.086-.49 1.881-.81z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M4.083 11.535zl.002.002.02.018.099.078c.09.07.231.173.423.297.383.25.968.581 1.753.895l2.341.936c1.688.675 2.395.949 3.279.949s1.591-.274 3.278-.949l2.34-.936a10 10 0 0 0 1.754-.895q.28-.183.542-.393l.002-.002h.001a.625.625 0 0 1 .833.931v.002h-.002l-.004.004-.012.01-.037.033a8 8 0 0 1-.642.465q-.936.598-1.97 1.005l-2.34.936-.097.039c-1.564.625-2.497.999-3.646.999s-2.083-.374-3.647-1l-.096-.038-2.34-.936a11.4 11.4 0 0 1-1.97-1.006 8 8 0 0 1-.642-.465l-.038-.033-.012-.01-.004-.003v-.002H3.25L3.666 12l-.416.466a.625.625 0 1 1 .833-.932m0 3.333a.625.625 0 0 0-.882.05l.881-.05Zm0 0 .002.002.02.018.099.078c.09.07.231.174.423.298.383.249.968.58 1.753.895l2.341.936c1.688.675 2.395.948 3.279.948s1.591-.273 3.278-.948l2.34-.936a10 10 0 0 0 1.754-.895 7 7 0 0 0 .542-.394l.002-.001.001-.001a.625.625 0 0 1 .833.932l-.001.001-.001.001-.004.003-.012.01a8 8 0 0 1-.68.497q-.935.6-1.969 1.007l-2.34.936-.097.039c-1.564.626-2.497.999-3.646.999s-2.083-.373-3.647-1l-.096-.038-2.34-.937a11.4 11.4 0 0 1-1.97-1.006 8 8 0 0 1-.642-.465l-.038-.032-.012-.01-.004-.004H3.25a.62.62 0 0 1-.049-.883"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
