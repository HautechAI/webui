import * as React from 'react';
import type { SVGProps } from 'react';
const SvgXsmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M8.256 2a.47.47 0 0 1 .472.472v8.923l2.968-2.968a.472.472 0 1 1 .667.666L8.59 12.866a.47.47 0 0 1-.667 0L4.15 9.093a.471.471 0 1 1 .667-.666l2.968 2.968V2.472A.47.47 0 0 1 8.256 2"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgXsmall;
