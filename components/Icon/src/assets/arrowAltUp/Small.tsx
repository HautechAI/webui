import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M9.593 7.025a.625.625 0 0 1 .814 0l5.833 5a.624.624 0 0 1-.123 1.032.62.62 0 0 1-.69-.082L10 8.322l-5.427 4.651a.625.625 0 1 1-.813-.948z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmall;
