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
                d="M1.66666 14.645V5.35503C1.66666 3.81669 2.99999 2.84253 4.08582 3.59003L9.16666 7.30669V5.93586C9.16666 4.58919 10.3892 3.73753 11.3842 4.39169L17.565 8.45586C18.5892 9.12836 18.5892 10.8717 17.565 11.5442L11.3842 15.6084C10.3892 16.2625 9.16666 15.4109 9.16666 14.0642V12.6934L4.08582 16.41C3.00082 17.1575 1.66666 16.185 1.66666 14.645Z"
            />
        </svg>
    );
};

export default SvgSmallBold;