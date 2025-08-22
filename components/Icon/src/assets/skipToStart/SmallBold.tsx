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
                d="M6.88461 12.1175C5.45506 11.1943 5.45506 8.8056 6.88461 7.88243L15.5164 2.3082C16.9051 1.41142 18.6123 2.57939 18.6123 4.42653V15.5734C18.6123 17.4214 16.9051 18.5885 15.5164 17.6917L6.88461 12.1175ZM2.01276 4.40013C2.01276 4.24101 2.07597 4.0884 2.18849 3.97588C2.30101 3.86336 2.45361 3.80015 2.61274 3.80015C2.77186 3.80015 2.92447 3.86336 3.03699 3.97588C3.14951 4.0884 3.21272 4.24101 3.21272 4.40013V15.5998C3.21272 15.7589 3.14951 15.9115 3.03699 16.0241C2.92447 16.1366 2.77186 16.1998 2.61274 16.1998C2.45361 16.1998 2.30101 16.1366 2.18849 16.0241C2.07597 15.9115 2.01276 15.7589 2.01276 15.5998V4.40013Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
