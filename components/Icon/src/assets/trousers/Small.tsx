import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M17.335 16.74 15.616 2.99a1.094 1.094 0 0 0-1.085-.959H5.47a1.094 1.094 0 0 0-1.085.958l-1.72 13.75a1.094 1.094 0 0 0 1.086 1.23H6.93a1.094 1.094 0 0 0 1.06-.825L10 9.375l2.01 7.769a1.09 1.09 0 0 0 1.061.825h3.179a1.095 1.095 0 0 0 1.085-1.23Zm-2.083-9.11a2.66 2.66 0 0 1-2.241-2.161h1.971l.27 2.16ZM5.469 2.969h9.062a.156.156 0 0 1 .156.136l.178 1.426h-9.73l.178-1.426a.156.156 0 0 1 .156-.136m-.451 2.5h1.971a2.66 2.66 0 0 1-2.24 2.16zM7.08 16.913a.156.156 0 0 1-.151.118H3.75a.157.157 0 0 1-.156-.175l1.035-8.272a3.6 3.6 0 0 0 3.309-3.115H9.53V7.44l-2.45 9.472Zm9.287.065a.16.16 0 0 1-.117.053h-3.179a.156.156 0 0 1-.152-.122l-2.45-9.468V5.469h1.594a3.6 3.6 0 0 0 3.308 3.115l1.035 8.271a.16.16 0 0 1-.039.123"
            />
        </svg>
    );
};
export default SvgSmall;
