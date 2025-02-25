import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="M21.418 8.912c.45-.15.932.16.942.634.018.828.018 1.749.018 2.77v.111c0 2.23 0 3.976-.183 5.339-.188 1.394-.58 2.494-1.442 3.358-.865.864-1.965 1.255-3.36 1.443-1.362.183-3.109.183-5.338.183h-.11c-2.229 0-3.975 0-5.339-.183-1.394-.188-2.494-.58-3.358-1.443s-1.255-1.964-1.443-3.36c-.183-1.361-.183-3.108-.183-5.337v-.11c0-2.23 0-3.976.183-5.339.188-1.394.58-2.494 1.443-3.358s1.964-1.255 3.36-1.443c.92-.124 2.015-.164 3.316-.177.51-.005.78.67.54 1.121a.6.6 0 0 1-.529.327c-1.273.013-2.292.051-3.135.164-1.234.166-1.979.483-2.529 1.032-.55.55-.865 1.294-1.03 2.528-.123.908-.157 2.02-.167 3.436a.293.293 0 0 0 .487.222 2.944 2.944 0 0 1 4.02.134l4.142 4.142a1.206 1.206 0 0 0 1.547.133l.287-.203a3.62 3.62 0 0 1 4.504.272l2.568 2.311a.08.08 0 0 0 .131-.047c.168-1.255.17-2.904.17-5.2 0-1.052 0-1.969-.017-2.774a.73.73 0 0 1 .505-.686"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m21.638 4.468-1.34-.4a3.43 3.43 0 0 1-2.356-2.366L17.544.355c-.145-.473-.906-.473-1.051 0l-.398 1.347a3.43 3.43 0 0 1-2.356 2.365l-1.34.4c-.218.073-.399.292-.399.51s.145.437.399.51l1.34.4a3.43 3.43 0 0 1 2.355 2.366l.399 1.347c.073.218.29.4.507.4a.534.534 0 0 0 .508-.4l.398-1.347a3.43 3.43 0 0 1 2.355-2.366l1.34-.4c.218-.073.4-.291.4-.51 0-.218-.11-.437-.363-.51Zm-4.602 3.166a4.63 4.63 0 0 0-2.608-2.62 4.63 4.63 0 0 0 2.608-2.62 4.63 4.63 0 0 0 2.61 2.62 4.63 4.63 0 0 0-2.61 2.62"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M17.037 7.634a4.63 4.63 0 0 0-2.61-2.62 4.63 4.63 0 0 0 2.61-2.62 4.63 4.63 0 0 0 2.608 2.62 4.63 4.63 0 0 0-2.608 2.62"
            />
        </svg>
    );
};
export default SvgMedium;
