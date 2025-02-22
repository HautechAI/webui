import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill="#656565"
            d="M16.977 10.03a7.08 7.08 0 1 1-7.08-7.082.574.574 0 1 0 0-1.148 8.23 8.23 0 1 0 8.228 8.23.574.574 0 0 0-1.148 0"
        />
    </svg>
);
export default SvgSmall;
