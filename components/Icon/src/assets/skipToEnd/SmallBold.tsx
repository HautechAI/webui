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
                d="M13.7405 12.1175C15.17 11.1943 15.17 8.8056 13.7405 7.88243L5.10873 2.3082C3.72077 1.41142 2.01282 2.57939 2.01282 4.42653V15.5734C2.01282 17.4214 3.71997 18.5885 5.10873 17.6917L13.7405 12.1175Z"
            />
            <path
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                d="M18.6123 4.40013C18.6123 4.24101 18.5491 4.0884 18.4366 3.97588C18.3241 3.86336 18.1715 3.80015 18.0123 3.80015C17.8532 3.80015 17.7006 3.86336 17.5881 3.97588C17.4756 4.0884 17.4124 4.24101 17.4124 4.40013V15.5998C17.4124 15.7589 17.4756 15.9115 17.5881 16.0241C17.7006 16.1366 17.8532 16.1998 18.0123 16.1998C18.1715 16.1998 18.3241 16.1366 18.4366 16.0241C18.5491 15.9115 18.6123 15.7589 18.6123 15.5998V4.40013Z"
            />
        </svg>
    );
};

export default SvgSmallBold;
