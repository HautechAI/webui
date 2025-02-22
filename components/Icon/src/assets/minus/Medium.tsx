import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path fill={props.color ?? '#656565'} d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
    </svg>
);
export default SvgMedium;
