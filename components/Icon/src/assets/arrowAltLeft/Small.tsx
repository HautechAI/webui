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
                fillRule="evenodd"
                d="M12.906 3.692a.624.624 0 0 1 .068.881L8.323 10l4.65 5.427a.626.626 0 1 1-.948.813l-5-5.833a.625.625 0 0 1 0-.814l5-5.833a.625.625 0 0 1 .881-.068"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
