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
                d="M18.3333 14.645V5.35501C18.3333 3.81584 17 2.84251 15.9142 3.59001L10.8333 7.30668V5.93584C10.8333 4.58918 9.61083 3.73751 8.61583 4.39168L2.43333 8.45584C1.41 9.12834 1.41 10.8717 2.43333 11.5442L8.615 15.6083C9.61 16.2625 10.8325 15.4108 10.8325 14.0642V12.6933L15.9133 16.41C16.9983 17.1575 18.3333 16.185 18.3333 14.645Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
