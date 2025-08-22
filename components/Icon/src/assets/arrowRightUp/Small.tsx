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
                d="M7.5 5.625a.625.625 0 0 1 0-1.25H15a.625.625 0 0 1 .625.625v7.5a.625.625 0 1 1-1.25 0V6.508l-8.933 8.934a.625.625 0 0 1-.884-.884l8.934-8.933z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
