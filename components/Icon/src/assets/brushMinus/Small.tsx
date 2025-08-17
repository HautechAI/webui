import * as React from 'react';
import type { SVGProps } from 'react';
import { resolveIconColor, type IconColorProp } from '../../color';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: IconColorProp;
    },
) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: props.size ?? '24px', height: props.size ?? '24px' }}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                fill={resolveIconColor(props.color)}
                d="M15.22 2.3a1.8 1.8 0 0 1 2.257.218 1.764 1.764 0 0 1 .221 2.237L15.482 8.05a9.3 9.3 0 0 1-4.141 3.39 4.6 4.6 0 0 0-1.104-1.742 4.7 4.7 0 0 0-1.758-1.095 9.24 9.24 0 0 1 3.42-4.106zm-8.274 7.776a2.92 2.92 0 0 0-2.057.844 2.87 2.87 0 0 0-.851 2.04.57.57 0 0 1-.263.482.59.59 0 0 1-.552.046.88.88 0 0 0-.973.186.86.86 0 0 0-.17.968 4.05 4.05 0 0 0 1.882 1.932c.832.412 1.78.53 2.689.333a4.08 4.08 0 0 0 2.304-1.414c.583-.718.9-1.612.9-2.534a2.87 2.87 0 0 0-.853-2.039 2.92 2.92 0 0 0-2.056-.844M16.5 15a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"
            />
        </svg>
    );
};
export default SvgSmall;
