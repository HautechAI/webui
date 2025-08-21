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
                d="M1.9165 2.5C1.9165 2.17783 2.17783 1.9165 2.5 1.9165C2.82217 1.9165 3.0835 2.17783 3.0835 2.5V9.42301C4.01194 9.45518 4.92813 9.65207 5.78776 10.0081C6.73022 10.3986 7.58677 10.9706 8.30811 11.6919C9.02945 12.4132 9.60145 13.2698 9.99186 14.2122C10.3479 15.0719 10.5448 15.9881 10.577 16.9165H17.5C17.8222 16.9165 18.0835 17.1778 18.0835 17.5C18.0835 17.8222 17.8222 18.0835 17.5 18.0835H5.40283C4.47828 18.0834 3.59159 17.7159 2.93783 17.0622C2.28406 16.4084 1.91661 15.5217 1.9165 14.5972V2.5ZM3.0835 14.5972C3.0836 15.2123 3.32805 15.802 3.76302 16.237C4.19799 16.672 4.7877 16.9164 5.40283 16.9165H9.40999C9.37839 16.1414 9.21177 15.377 8.91439 14.659C8.5826 13.858 8.09597 13.1302 7.48291 12.5171C6.86985 11.904 6.14199 11.4174 5.34098 11.0856C4.62297 10.7882 3.85862 10.6216 3.0835 10.59V14.5972Z"
            />
        </svg>
    );
};
export default SvgSmall;
