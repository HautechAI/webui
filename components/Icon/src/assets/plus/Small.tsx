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
                d="M15 10.832h-4.166v4.166a.833.833 0 0 1-1.667 0v-4.166H5a.833.833 0 1 1 0-1.667h4.167V4.998a.833.833 0 0 1 1.667 0v4.167H15a.833.833 0 0 1 0 1.667"
            />
        </svg>
    );
};
export default SvgSmall;
