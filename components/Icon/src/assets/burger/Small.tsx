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
                fill={resolveIconColor(props.color)}
                fillRule="evenodd"
                d="M17.291 5.833a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 1 1 0-1.25h13.333a.625.625 0 0 1 .625.625"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
