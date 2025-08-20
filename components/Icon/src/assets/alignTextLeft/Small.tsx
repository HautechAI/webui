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
                d="M14.1667 14.4165C14.4888 14.4165 14.7502 14.6778 14.7502 15C14.7502 15.3222 14.4888 15.5835 14.1667 15.5835H2.5C2.17783 15.5835 1.9165 15.3222 1.9165 15C1.9165 14.6778 2.17783 14.4165 2.5 14.4165H14.1667ZM12.5 9.4165C12.8222 9.4165 13.0835 9.67783 13.0835 10C13.0835 10.3222 12.8222 10.5835 12.5 10.5835H2.5C2.17783 10.5835 1.9165 10.3222 1.9165 10C1.9165 9.67783 2.17783 9.4165 2.5 9.4165H12.5ZM17.5 4.4165C17.8222 4.4165 18.0835 4.67783 18.0835 5C18.0835 5.32217 17.8222 5.5835 17.5 5.5835H2.5C2.17783 5.5835 1.9165 5.32217 1.9165 5C1.9165 4.67783 2.17783 4.4165 2.5 4.4165H17.5Z"
            />
        </svg>
    );
};

export default SvgSmall;
