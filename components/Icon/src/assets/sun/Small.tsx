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
                fillRule="evenodd"
                d="M10 1.042a.625.625 0 0 1 .625.625V2.5a.625.625 0 1 1-1.25 0v-.833A.625.625 0 0 1 10 1.042M3.666 3.666a.625.625 0 0 1 .883 0l.328.326a.625.625 0 0 1-.883.885l-.328-.328a.625.625 0 0 1 0-.883m12.668 0a.625.625 0 0 1 0 .883l-.327.327a.625.625 0 0 1-.883-.883l.327-.327a.625.625 0 0 1 .883 0M10 5.625a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75M4.375 10a5.625 5.625 0 1 1 11.25 0 5.625 5.625 0 0 1-11.25 0m-3.333 0a.625.625 0 0 1 .625-.625H2.5a.625.625 0 1 1 0 1.25h-.833A.625.625 0 0 1 1.042 10m15.833 0a.625.625 0 0 1 .625-.625h.834a.625.625 0 0 1 0 1.25H17.5a.625.625 0 0 1-.625-.625m-1.751 5.123a.625.625 0 0 1 .883 0l.327.328a.625.625 0 1 1-.883.883l-.327-.328a.625.625 0 0 1 0-.883m-10.247 0a.625.625 0 0 1 0 .883l-.328.328a.624.624 0 1 1-.883-.883l.327-.328a.624.624 0 0 1 .884 0M10 16.875a.625.625 0 0 1 .625.625v.833a.625.625 0 1 1-1.25 0V17.5a.625.625 0 0 1 .625-.625"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
