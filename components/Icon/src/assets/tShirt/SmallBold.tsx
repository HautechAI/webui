import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size ?? 24}
            viewBox="0 0 20 20"
            height={props.size ?? 24}
            fill="none"
            {...props}
        >
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M4.814 8.58v6.64c0 1.103 0 1.655.374 2.123s.821.55 1.715.715c.827.152 1.875.275 3.097.275a17 17 0 0 0 3.097-.275c.894-.165 1.341-.247 1.716-.715.373-.468.373-1.02.373-2.122V8.579c0-.57 0-.854.11-1.105.109-.25.315-.436.726-.807l.155-.139c.88-.793 1.32-1.19 1.323-1.765s-.387-.935-1.168-1.657a7 7 0 0 0-.348-.301c-.393-.315-.948-.66-1.373-.909a1.7 1.7 0 0 0-1.306-.17l-.408.107a1.33 1.33 0 0 0-.791.586c-1.002 1.58-3.21 1.58-4.212 0a1.33 1.33 0 0 0-.79-.586l-.408-.107a1.7 1.7 0 0 0-1.307.17c-.425.249-.98.594-1.373.909q-.18.145-.348.301c-.781.722-1.171 1.083-1.168 1.657s.443.972 1.323 1.765l.155.14c.411.37.617.556.726.806.11.25.11.536.11 1.106"
            />
        </svg>
    );
};
export default SvgSmall;
