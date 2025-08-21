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
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                d="M9.367 4.65a.677.677 0 0 1 1.265 0l1.2 3.128c.069.18.21.32.39.39l3.129 1.2a.677.677 0 0 1 0 1.264l-3.129 1.2a.68.68 0 0 0-.39.39l-1.2 3.129a.677.677 0 0 1-1.265 0l-1.2-3.129a.68.68 0 0 0-.39-.39l-3.128-1.2a.677.677 0 0 1 0-1.265l3.129-1.2a.68.68 0 0 0 .39-.39l1.2-3.128Z"
            />
        </svg>
    );
};
export default SvgSmall;
