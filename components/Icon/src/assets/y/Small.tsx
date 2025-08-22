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
                d="M9.99926 15.9916C9.77704 15.9916 9.60482 15.9305 9.48259 15.8083C9.37148 15.675 9.31593 15.4916 9.31593 15.2583V9.79163L9.61593 10.7416L5.43259 4.97497C5.33259 4.83052 5.28259 4.68608 5.28259 4.54163C5.2937 4.38608 5.35482 4.2583 5.46593 4.1583C5.57704 4.0583 5.72148 4.0083 5.89926 4.0083C6.05482 4.0083 6.1937 4.04719 6.31593 4.12497C6.43815 4.19163 6.54926 4.30274 6.64926 4.4583L10.1993 9.3583H9.84926L13.3993 4.4583C13.5215 4.29163 13.6381 4.17497 13.7493 4.1083C13.8604 4.04163 13.9937 4.0083 14.1493 4.0083C14.327 4.0083 14.4659 4.0583 14.5659 4.1583C14.6659 4.24719 14.7159 4.36941 14.7159 4.52497C14.727 4.66941 14.677 4.82497 14.5659 4.99163L10.3993 10.7416L10.6826 9.79163V15.2583C10.6826 15.7472 10.4548 15.9916 9.99926 15.9916Z"
            />
        </svg>
    );
};
export default SvgSmall;
