import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M8.53 3.47a.75.75 0 0 1 0 1.06L4.81 8.25h9.69a6.25 6.25 0 1 1 0 12.5H11a.75.75 0 0 1 0-1.5h3.5a4.75 4.75 0 0 0 0-9.5H4.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMedium;
