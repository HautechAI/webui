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
                style={{ color: resolveIconColor(props.color) }}
                fill="currentColor"
                d="M15.8333 17.0834V18.3334H4.16667V17.0834H15.8333ZM17.0833 15.8334V4.16669C17.0833 3.47633 16.5237 2.91669 15.8333 2.91669H4.16667C3.47632 2.91669 2.91667 3.47633 2.91667 4.16669V15.8334C2.91667 16.5237 3.47632 17.0834 4.16667 17.0834V18.3334L4.03809 18.3301C2.71713 18.2632 1.66667 17.1709 1.66667 15.8334V4.16669C1.66667 2.78598 2.78596 1.66669 4.16667 1.66669H15.8333C17.2141 1.66669 18.3333 2.78598 18.3333 4.16669V15.8334C18.3333 17.2141 17.2141 18.3334 15.8333 18.3334V17.0834C16.5237 17.0834 17.0833 16.5237 17.0833 15.8334Z"
            />
        </svg>
    );
};
export default SvgSmall;
