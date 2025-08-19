import { type ThemeType } from '@hautechai/webui.themeprovider';
import type { SVGProps } from 'react';
import { type Paths } from 'type-fest';

import { resolveIconColor } from '../../color';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="M8.232 3.542a1.876 1.876 0 0 1 3.537 0 .624.624 0 1 0 1.179-.417 3.125 3.125 0 0 0-5.894 0 .625.625 0 1 0 1.178.417M2.292 5a.625.625 0 0 1 .625-.625h14.167a.625.625 0 0 1 0 1.25H2.917A.625.625 0 0 1 2.292 5m1.972 1.46a.625.625 0 0 1 .665.582l.384 5.75c.075 1.122.128 1.904.245 2.491.114.571.272.873.5 1.086s.54.352 1.116.427c.595.077 1.379.079 2.504.079h.645c1.125 0 1.908-.002 2.503-.08.577-.074.888-.213 1.117-.426.227-.213.386-.515.5-1.086.117-.587.17-1.369.245-2.491l.383-5.75a.624.624 0 0 1 1.216-.159q.04.118.032.242l-.387 5.793c-.07 1.069-.128 1.932-.263 2.61-.141.705-.38 1.293-.873 1.754-.493.46-1.096.66-1.808.753-.685.09-1.55.09-2.621.09h-.733c-1.071 0-1.936 0-2.621-.09-.713-.093-1.316-.292-1.809-.753s-.731-1.05-.872-1.754c-.135-.678-.192-1.541-.263-2.61l-.387-5.793a.625.625 0 0 1 .582-.665"
            />
        </svg>
    );
};
export default SvgSmall;
