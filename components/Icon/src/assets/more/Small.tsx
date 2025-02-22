import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill="#656565"
            d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
    </svg>
);
export default SvgSmall;
