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
                d="M9.41651 15.8335V8.07556L7.9126 9.57947C7.68479 9.80727 7.31521 9.80727 7.0874 9.57947C6.8596 9.35166 6.8596 8.98208 7.0874 8.75427L9.5874 6.25427C9.81521 6.02647 10.1848 6.02647 10.4126 6.25427L12.9126 8.75427C13.1404 8.98208 13.1404 9.35166 12.9126 9.57947C12.6848 9.80727 12.3152 9.80727 12.0874 9.57947L10.5835 8.07556V15.8335C10.5835 16.1557 10.3222 16.417 10 16.417C9.67784 16.417 9.41651 16.1557 9.41651 15.8335ZM16.6667 3.58337C16.9888 3.58337 17.2502 3.8447 17.2502 4.16687C17.2502 4.48904 16.9888 4.75037 16.6667 4.75037H3.33334C3.01117 4.75037 2.74984 4.48904 2.74984 4.16687C2.74984 3.8447 3.01117 3.58337 3.33334 3.58337H16.6667Z"
            />
        </svg>
    );
};

export default SvgSmall;
