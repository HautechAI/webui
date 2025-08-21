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
                d="M6.50028 3.33423C5.31986 2.69266 3.90425 3.53965 3.90425 4.81459V15.1853C3.90425 16.461 5.31986 17.3072 6.50028 16.6657L16.0359 11.4803C17.2268 10.8328 17.2268 9.1671 16.0359 8.52033L6.50028 3.33423ZM2.78784 4.81459C2.78784 2.65247 5.14496 1.32617 7.03393 2.35402L16.5696 7.53938C18.5374 8.60964 18.5374 11.3903 16.5696 12.4605L7.03393 17.6459C5.14496 18.673 2.78784 17.3482 2.78784 15.1853V4.81459Z"
            />
            <path
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                d="M6.50028 3.33423C5.31986 2.69266 3.90425 3.53965 3.90425 4.81459V15.1853C3.90425 16.461 5.31986 17.3072 6.50028 16.6657L16.0359 11.4803C17.2268 10.8328 17.2268 9.1671 16.0359 8.52033L6.50028 3.33423Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
