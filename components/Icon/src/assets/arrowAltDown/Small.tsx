import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M3.692 7.093a.625.625 0 0 1 .881-.067L10 11.676l5.427-4.65a.625.625 0 0 1 .813.948l-5.833 5a.625.625 0 0 1-.814 0l-5.833-5a.625.625 0 0 1-.068-.88"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
