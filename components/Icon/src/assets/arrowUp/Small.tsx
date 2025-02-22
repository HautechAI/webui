import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M9.904 3.172a.59.59 0 0 1 .833 0l4.716 4.716a.59.59 0 1 1-.833.834l-3.71-3.71v11.153a.59.59 0 1 1-1.18 0V5.012l-3.71 3.71a.59.59 0 1 1-.832-.834z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
