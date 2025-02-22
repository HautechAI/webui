import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            d="M7.556 11.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0m6.222 0a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0m6.222 0a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0"
        />
    </svg>
);
export default SvgMedium;
