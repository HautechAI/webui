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
                d="M16.6667 15.25C16.9888 15.25 17.2502 15.5114 17.2502 15.8335C17.2502 16.1557 16.9888 16.417 16.6667 16.417H3.33334C3.01118 16.417 2.74985 16.1557 2.74985 15.8335C2.74985 15.5114 3.01118 15.25 3.33334 15.25H16.6667ZM9.41651 4.16687C9.41651 3.8447 9.67784 3.58337 10 3.58337C10.3222 3.58337 10.5835 3.8447 10.5835 4.16687V11.9248L12.0874 10.4209C12.3152 10.1931 12.6848 10.1931 12.9126 10.4209C13.1404 10.6487 13.1404 11.0183 12.9126 11.2461L10.4126 13.7461C10.1848 13.9739 9.81522 13.9739 9.58741 13.7461L7.08741 11.2461C6.85961 11.0183 6.85961 10.6487 7.08741 10.4209C7.31522 10.1931 7.6848 10.1931 7.91261 10.4209L9.41651 11.9248V4.16687Z"
            />
        </svg>
    );
};

export default SvgSmall;
