import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M4.18 4.18c.24-.24.63-.24.87 0L10 9.13l4.95-4.95a.615.615 0 0 1 .87.87L10.87 10l4.95 4.95a.615.615 0 0 1-.87.87L10 10.87l-4.95 4.95a.615.615 0 0 1-.87-.87L9.13 10 4.18 5.05a.615.615 0 0 1 0-.87"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
