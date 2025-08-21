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
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                fillRule="evenodd"
                d="M4.58331 2.90247C4.58331 1.86247 5.77998 1.27747 6.60081 1.9158L17.8625 10.6766C18.8025 11.4075 18.2858 12.9133 17.0958 12.9133H11.385C10.9641 12.9133 10.5675 13.105 10.3066 13.435L6.81415 17.8516C6.07915 18.7816 4.58331 18.2616 4.58331 17.0766V2.90247ZM17.095 11.6633L5.83331 2.90247V17.0766L9.32581 12.66C9.57149 12.3493 9.88427 12.0983 10.2407 11.9257C10.5972 11.7531 10.9881 11.6634 11.3841 11.6633H17.095Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
