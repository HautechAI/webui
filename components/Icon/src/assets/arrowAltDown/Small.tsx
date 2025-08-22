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
                fillRule="evenodd"
                d="M3.692 7.093a.625.625 0 0 1 .881-.067L10 11.676l5.427-4.65a.625.625 0 0 1 .813.948l-5.833 5a.625.625 0 0 1-.814 0l-5.833-5a.625.625 0 0 1-.068-.88"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
