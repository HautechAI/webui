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
                d="M12.891 2.892a.625.625 0 0 1 .884 0l4.167 4.166a.625.625 0 0 1 0 .884l-4.167 4.167a.625.625 0 0 1-.884-.884L16.616 7.5 12.89 3.775a.625.625 0 0 1 0-.883Z"
                clipRule="evenodd"
            />
            <path
                fill={resolveIconColor(props.color)}
                fillRule="evenodd"
                d="M4.233 8.4a5.2 5.2 0 0 1 3.683-1.525h8.75a.625.625 0 1 1 0 1.25h-8.75a3.958 3.958 0 0 0 0 7.917h2.917a.625.625 0 0 1 0 1.25H7.916A5.208 5.208 0 0 1 4.233 8.4"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
