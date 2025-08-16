import { type ThemeType } from '@hautechai/webui.themeprovider';
import type { SVGProps } from 'react';
import { Paths } from 'type-fest';

import { resolveIconColor } from '../../color';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: props.size ?? '24px', height: props.size ?? '24px' }}
            viewBox="0 0 20 20"
            
            fill="none"
            {...props}
        >
            <path
                fill={resolveIconColor(props.color)}
                d="M16.977 10.03a7.08 7.08 0 1 1-7.08-7.082.574.574 0 1 0 0-1.148 8.23 8.23 0 1 0 8.228 8.23.574.574 0 0 0-1.148 0"
            />
        </svg>
    );
};
export default SvgSmall;
