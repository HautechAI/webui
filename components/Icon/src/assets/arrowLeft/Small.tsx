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
                d="M8.824 5.176a.6.6 0 0 1 0 .848L5.048 9.8H16.4a.6.6 0 0 1 0 1.2H5.048l3.776 3.776a.6.6 0 1 1-.848.848l-4.8-4.8a.6.6 0 0 1 0-.848l4.8-4.8a.6.6 0 0 1 .848 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
