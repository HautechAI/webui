import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M12.906 3.692a.624.624 0 0 1 .068.881L8.323 10l4.65 5.427a.626.626 0 1 1-.948.813l-5-5.833a.625.625 0 0 1 0-.814l5-5.833a.625.625 0 0 1 .881-.068"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
