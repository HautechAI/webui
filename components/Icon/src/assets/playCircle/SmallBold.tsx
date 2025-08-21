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
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99998 18C14.4184 18 18 14.4184 18 9.99998C18 5.58156 14.4184 1.99994 9.99998 1.99994C5.58156 1.99994 1.99994 5.58156 1.99994 9.99998C1.99994 14.4184 5.58156 18 9.99998 18ZM8.95517 13.0768L12.7312 10.8472C13.356 10.4776 13.356 9.52238 12.7312 9.15278L8.95517 6.92316C8.34717 6.56476 7.59997 7.03196 7.59997 7.77117V12.2296C7.59997 12.968 8.34717 13.4352 8.95517 13.0768Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
