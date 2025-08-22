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
                fillRule="evenodd"
                d="M18.334 10a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0M10 6.458a.94.94 0 0 0-.937.938.625.625 0 1 1-1.25 0 2.188 2.188 0 1 1 3.756 1.524q-.115.118-.22.222a6 6 0 0 0-.475.514c-.184.236-.249.408-.249.552v.625a.625.625 0 1 1-1.25 0v-.625c0-.546.254-.988.512-1.319.19-.245.43-.483.625-.678l.16-.162A.937.937 0 0 0 10 6.459Zm0 7.708a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
