import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType } from '@hautechai/webui.themeprovider';
import { type Paths } from 'type-fest';

import { resolveIconColor } from '../../color';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
            <path
                fill={resolveIconColor(props.color)}
                fillRule="evenodd"
                d="M7.923 2.138a.47.47 0 0 1 .667 0l3.773 3.773a.473.473 0 1 1-.667.666L8.728 3.61v8.924a.472.472 0 0 1-.943 0V3.609L4.817 6.577a.472.472 0 1 1-.667-.666z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
