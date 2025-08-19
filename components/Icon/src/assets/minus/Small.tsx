import { type ThemeType } from '@hautechai/webui.themeprovider';
import type { SVGProps } from 'react';
import { type Paths } from 'type-fest';

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
                d="M15 10.832H5a.833.833 0 1 1 0-1.667h10a.833.833 0 0 1 0 1.667"
            />
        </svg>
    );
};
export default SvgSmall;
