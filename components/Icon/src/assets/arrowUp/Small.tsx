import * as React from 'react';
import type { SVGProps } from 'react';
import { resolveIconColor, type IconColorProp } from '../../color';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: IconColorProp;
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
                d="M9.904 3.172a.59.59 0 0 1 .833 0l4.716 4.716a.59.59 0 1 1-.833.834l-3.71-3.71v11.153a.59.59 0 1 1-1.18 0V5.012l-3.71 3.71a.59.59 0 1 1-.832-.834z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
