import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M6.718 9.158h8.645V6.594q0-1.335-.934-2.27a3.1 3.1 0 0 0-2.27-.935q-1.336 0-2.271.935c-.935.935-.935 1.38-.935 2.27H7.564q0-1.92 1.343-3.257C10.25 2 10.887 2 12.164 2q1.915 0 3.252 1.34 1.336 1.343 1.336 3.254v2.564h.847q.71 0 1.214.503.503.503.503 1.215v9.599q0 .711-.503 1.214a1.66 1.66 0 0 1-1.215.503H6.71q-.711 0-1.21-.503-.5-.503-.5-1.214v-9.6q0-.71.503-1.214.503-.503 1.215-.503m0 11.646h10.88a.32.32 0 0 0 .237-.093.32.32 0 0 0 .092-.236v-9.6a.32.32 0 0 0-.092-.236.32.32 0 0 0-.236-.092H6.718a.32.32 0 0 0-.237.092.32.32 0 0 0-.092.237v9.599q0 .144.092.236a.32.32 0 0 0 .237.093m5.446-3.473q.693 0 1.172-.484.478-.484.478-1.177t-.484-1.172a1.61 1.61 0 0 0-1.177-.479q-.693 0-1.172.485-.48.484-.479 1.177 0 .693.485 1.172a1.6 1.6 0 0 0 1.177.478"
            />
        </svg>
    );
};
export default SvgMedium;
