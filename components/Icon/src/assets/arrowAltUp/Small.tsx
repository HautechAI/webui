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
                fill={
                    resolveIconColor(props.color)
                }
                fillRule="evenodd"
                d="M9.593 7.025a.625.625 0 0 1 .814 0l5.833 5a.624.624 0 0 1-.123 1.032.62.62 0 0 1-.69-.082L10 8.322l-5.427 4.651a.625.625 0 1 1-.813-.948z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
