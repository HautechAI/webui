import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M4.435 4.435a.8.8 0 0 1 1.13 0L12 10.869l6.434-6.434a.8.8 0 0 1 1.132 1.13L13.132 12l6.434 6.434a.8.8 0 0 1-1.131 1.132L12 13.132l-6.434 6.434a.8.8 0 0 1-1.131-1.131L10.869 12 4.435 5.566a.8.8 0 0 1 0-1.131"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMedium;
