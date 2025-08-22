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
                d="M15.8333 14.4165C16.1555 14.4165 16.4168 14.6778 16.4168 15C16.4168 15.3222 16.1555 15.5835 15.8333 15.5835H4.16667C3.8445 15.5835 3.58317 15.3222 3.58317 15C3.58317 14.6778 3.8445 14.4165 4.16667 14.4165H15.8333ZM14.1667 9.4165C14.4888 9.4165 14.7502 9.67783 14.7502 10C14.7502 10.3222 14.4888 10.5835 14.1667 10.5835H5.83333C5.51117 10.5835 5.24984 10.3222 5.24984 10C5.24984 9.67783 5.51117 9.4165 5.83333 9.4165H14.1667ZM17.5 4.4165C17.8222 4.4165 18.0835 4.67783 18.0835 5C18.0835 5.32217 17.8222 5.5835 17.5 5.5835H2.5C2.17783 5.5835 1.9165 5.32217 1.9165 5C1.9165 4.67783 2.17783 4.4165 2.5 4.4165H17.5Z"
            />
        </svg>
    );
};

export default SvgSmall;
