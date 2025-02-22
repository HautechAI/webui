import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M13.528 5.132a.466.466 0 0 1-.466.466h-9.93a.465.465 0 0 1 0-.931h9.93a.465.465 0 0 1 .466.465m0 3.103a.466.466 0 0 1-.466.466h-9.93a.465.465 0 0 1 0-.931h9.93a.465.465 0 0 1 .466.465m0 3.104a.465.465 0 0 1-.466.465h-9.93a.466.466 0 0 1 0-.93h9.93a.465.465 0 0 1 .466.465"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
