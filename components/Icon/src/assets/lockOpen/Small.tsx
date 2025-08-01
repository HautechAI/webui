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
                d="M5.36 7.485h7.35v-2.18q0-1.134-.794-1.93a2.63 2.63 0 0 0-1.93-.794q-1.135 0-1.93.794a2.63 2.63 0 0 0-.795 1.93h-1.18q0-1.632 1.14-2.769Q8.365 1.401 9.992 1.4c1.627-.001 2.007.38 2.764 1.14q1.137 1.14 1.136 2.766v2.18h.72q.604 0 1.032.427.428.429.428 1.033v8.16q0 .604-.428 1.033-.428.427-1.033.427H5.354a1.4 1.4 0 0 1-1.03-.427 1.41 1.41 0 0 1-.424-1.033v-8.16q0-.604.428-1.033a1.4 1.4 0 0 1 1.033-.428Zm0 9.9h9.251a.27.27 0 0 0 .201-.078.27.27 0 0 0 .079-.2V8.945a.27.27 0 0 0-.079-.201.27.27 0 0 0-.2-.079H5.36a.27.27 0 0 0-.201.079.27.27 0 0 0-.079.2v8.161a.27.27 0 0 0 .279.28Zm4.63-2.951q.59 0 .997-.412a1.37 1.37 0 0 0 .407-1q0-.59-.412-.997a1.37 1.37 0 0 0-1-.407q-.59 0-.997.412a1.37 1.37 0 0 0-.407 1q0 .59.412.997a1.37 1.37 0 0 0 1 .407"
            />
        </svg>
    );
};
export default SvgSmall;
