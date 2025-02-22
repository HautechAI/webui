import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M4.178 8.27a.775.775 0 0 1 1.093-.083l6.73 5.768 6.73-5.768a.775.775 0 0 1 1.008 1.176l-7.234 6.2a.775.775 0 0 1-1.009 0l-7.234-6.2a.775.775 0 0 1-.083-1.092"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMedium;
