import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M15.47 3.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L19.94 9l-4.47-4.47a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
        />
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M5.08 10.08A6.25 6.25 0 0 1 9.5 8.25H20a.75.75 0 0 1 0 1.5H9.5a4.75 4.75 0 1 0 0 9.5H13a.75.75 0 0 1 0 1.5H9.5a6.25 6.25 0 0 1-4.42-10.67"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMedium;
