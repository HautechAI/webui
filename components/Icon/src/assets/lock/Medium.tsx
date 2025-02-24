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
                d="M6.708 22.166a1.64 1.64 0 0 1-1.21-.502A1.66 1.66 0 0 1 5 20.45v-9.587q0-.71.503-1.212a1.65 1.65 0 0 1 1.212-.503h.846v-2.56q0-1.91 1.34-3.25Q10.244 2 12.156 2c1.912 0 2.357.446 3.247 1.34q1.335 1.338 1.335 3.248V9.15h.846q.71 0 1.212.503.503.503.503 1.213v9.586q0 .71-.503 1.213-.503.502-1.214.502zm.007-1.387h10.867a.32.32 0 0 0 .236-.092.32.32 0 0 0 .093-.236v-9.587a.32.32 0 0 0-.093-.236.32.32 0 0 0-.236-.092H6.715a.32.32 0 0 0-.236.092.32.32 0 0 0-.092.236v9.587q0 .144.092.236a.32.32 0 0 0 .236.092m5.44-3.467q.69 0 1.17-.484a1.6 1.6 0 0 0 .478-1.176q0-.691-.484-1.17a1.6 1.6 0 0 0-1.176-.478q-.69 0-1.17.484a1.6 1.6 0 0 0-.478 1.175q0 .693.484 1.17a1.6 1.6 0 0 0 1.176.479M8.948 9.149h6.402v-2.56q0-1.335-.934-2.268a3.09 3.09 0 0 0-2.267-.934q-1.335 0-2.267.934-.934.933-.934 2.267V9.15Z"
            />
        </svg>
    );
};
export default SvgMedium;
