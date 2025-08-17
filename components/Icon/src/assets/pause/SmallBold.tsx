import * as React from 'react';
import type { SVGProps } from 'react';
import { resolveIconColor, type IconColorProp } from '../../color';

const SvgSmallBold = (
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
                d="M2 5.19996C2 3.69115 2 2.93754 2.4688 2.46874C2.9376 1.99994 3.69121 1.99994 5.20002 1.99994C6.70882 1.99994 7.46243 1.99994 7.93123 2.46874C8.40003 2.93754 8.40003 3.69115 8.40003 5.19996V14.8C8.40003 16.3088 8.40003 17.0624 7.93123 17.5312C7.46243 18 6.70882 18 5.20002 18C3.69121 18 2.9376 18 2.4688 17.5312C2 17.0624 2 16.3088 2 14.8V5.19996ZM11.6 5.19996C11.6 3.69115 11.6 2.93754 12.0689 2.46874C12.5377 1.99994 13.2913 1.99994 14.8001 1.99994C16.3089 1.99994 17.0625 1.99994 17.5313 2.46874C18.0001 2.93754 18.0001 3.69115 18.0001 5.19996V14.8C18.0001 16.3088 18.0001 17.0624 17.5313 17.5312C17.0625 18 16.3089 18 14.8001 18C13.2913 18 12.5377 18 12.0689 17.5312C11.6 17.0624 11.6 16.3088 11.6 14.8V5.19996Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
