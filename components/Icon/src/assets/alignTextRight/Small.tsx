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
                d="M17.5 14.4165C17.8222 14.4165 18.0835 14.6778 18.0835 15C18.0835 15.3222 17.8222 15.5835 17.5 15.5835H5.83333C5.51117 15.5835 5.24984 15.3222 5.24984 15C5.24984 14.6778 5.51117 14.4165 5.83333 14.4165H17.5ZM17.5 9.4165C17.8222 9.4165 18.0835 9.67783 18.0835 10C18.0835 10.3222 17.8222 10.5835 17.5 10.5835H7.5C7.17783 10.5835 6.9165 10.3222 6.9165 10C6.9165 9.67783 7.17783 9.4165 7.5 9.4165H17.5ZM17.5 4.4165C17.8222 4.4165 18.0835 4.67783 18.0835 5C18.0835 5.32217 17.8222 5.5835 17.5 5.5835H2.5C2.17783 5.5835 1.9165 5.32217 1.9165 5C1.9165 4.67783 2.17783 4.4165 2.5 4.4165H17.5Z"
            />
        </svg>
    );
};

export default SvgSmall;
