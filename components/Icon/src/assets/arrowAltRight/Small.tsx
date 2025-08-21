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
                d="M7.093 3.692a.625.625 0 0 1 .881.068l5 5.833a.625.625 0 0 1 0 .813l-5 5.834a.625.625 0 0 1-.948-.813L11.676 10l-4.65-5.427a.625.625 0 0 1 .066-.88"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
