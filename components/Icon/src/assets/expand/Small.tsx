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
                d="M11.041 5.833c0 .345.28.625.625.625h.992l-1.85 1.85a.625.625 0 1 0 .883.884l1.85-1.85v.992a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625h-2.5a.625.625 0 0 0-.625.625Zm-1.85 5.859a.624.624 0 1 0-.883-.883l-1.85 1.85v-.992a.625.625 0 0 0-1.25 0v2.5c0 .345.28.625.625.625h2.5a.625.625 0 1 0 0-1.25h-.992z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M9.953 1.042c-1.924 0-3.432 0-4.609.158-1.203.161-2.153.5-2.899 1.245C1.7 3.19 1.362 4.14 1.2 5.345c-.158 1.176-.158 2.683-.158 4.607v.095c0 1.925 0 3.432.158 4.609.162 1.203.5 2.153 1.245 2.899s1.696 1.083 2.9 1.245c1.176.158 2.684.158 4.608.158h.095c1.924 0 3.431 0 4.608-.158 1.204-.162 2.153-.5 2.9-1.245.745-.746 1.083-1.696 1.244-2.9.159-1.176.159-2.683.159-4.608v-.095c0-1.924 0-3.431-.159-4.608-.161-1.203-.5-2.153-1.245-2.9-.745-.745-1.695-1.083-2.9-1.244-1.175-.158-2.683-.158-4.607-.158zM3.329 3.329c.475-.475 1.117-.748 2.183-.89 1.083-.146 2.507-.147 4.488-.147s3.405.001 4.489.146c1.066.143 1.708.417 2.183.891s.747 1.117.89 2.182c.145 1.084.147 2.507.147 4.489s-.002 3.405-.147 4.488c-.143 1.066-.417 1.709-.89 2.184-.476.474-1.117.746-2.183.89-1.084.144-2.507.146-4.489.146s-3.405-.002-4.488-.146c-1.066-.144-1.708-.417-2.183-.891s-.747-1.117-.89-2.183c-.145-1.083-.147-2.506-.147-4.488s.002-3.405.147-4.489c.143-1.065.416-1.707.89-2.182"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
