import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import { get } from 'lodash-es';
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
                d="M4.757 17.583q-.555 0-.948-.392a1.3 1.3 0 0 1-.392-.948V7.724a1.38 1.38 0 0 1-.715-.496 1.3 1.3 0 0 1-.285-.824V3.756q0-.554.392-.947.393-.393.948-.393h12.487q.554 0 .947.393t.393.947v2.648q0 .455-.285.824a1.38 1.38 0 0 1-.715.496v8.517q0 .563-.393.953c-.393.39-.577.39-.947.39H4.757ZM4.5 7.743v8.46q0 .129.092.213a.33.33 0 0 0 .229.084h10.423a.25.25 0 0 0 .184-.072.25.25 0 0 0 .072-.185v-8.5zM3.757 6.66h12.487a.25.25 0 0 0 .184-.072.25.25 0 0 0 .072-.184V3.756a.25.25 0 0 0-.072-.184.25.25 0 0 0-.184-.072H3.757a.25.25 0 0 0-.185.072.25.25 0 0 0-.072.184v2.648a.25.25 0 0 0 .072.184.25.25 0 0 0 .185.072m4.404 4.367h3.68V10H8.16z"
            />
        </svg>
    );
};
export default SvgSmall;
