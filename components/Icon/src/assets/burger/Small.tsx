import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M17.291 5.833a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 0 1 0-1.25h13.333a.625.625 0 0 1 .625.625m0 4.167a.625.625 0 0 1-.625.625H3.333a.625.625 0 1 1 0-1.25h13.333a.625.625 0 0 1 .625.625"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
