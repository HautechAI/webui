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
                d="M17.848 7.426c.376-.124.777.133.786.529.014.69.014 1.457.014 2.31v.09c0 1.858 0 3.314-.153 4.45-.156 1.161-.482 2.079-1.201 2.799s-1.638 1.045-2.8 1.201c-1.135.153-2.59.153-4.448.153h-.092c-1.858 0-3.313 0-4.449-.152-1.162-.157-2.079-.483-2.799-1.203s-1.046-1.637-1.202-2.8c-.153-1.134-.153-2.59-.153-4.447v-.092c0-1.857 0-3.313.153-4.449.156-1.162.483-2.079 1.202-2.799.72-.72 1.637-1.046 2.8-1.202.767-.103 1.68-.136 2.764-.147.425-.004.65.559.45.934a.5.5 0 0 1-.44.273c-1.062.01-1.911.042-2.613.136-1.03.138-1.65.402-2.108.86s-.72 1.078-.86 2.107c-.1.756-.13 1.684-.137 2.863a.244.244 0 0 0 .405.185 2.454 2.454 0 0 1 3.35.112l3.452 3.451a1.005 1.005 0 0 0 1.289.111l.24-.169a3.02 3.02 0 0 1 3.752.226l2.14 1.927c.04.035.102.012.11-.04.14-1.046.142-2.42.142-4.333 0-.877 0-1.64-.015-2.311a.61.61 0 0 1 .421-.572Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m18.031 3.723-1.117-.334a2.86 2.86 0 0 1-1.962-1.971L14.62.296c-.121-.395-.755-.395-.876 0l-.332 1.122a2.86 2.86 0 0 1-1.963 1.971l-1.117.334c-.181.06-.332.243-.332.425s.12.364.332.424l1.117.334a2.86 2.86 0 0 1 1.963 1.971L13.744 8c.06.182.242.333.423.333A.445.445 0 0 0 14.589 8l.332-1.123a2.86 2.86 0 0 1 1.963-1.971l1.117-.334c.181-.06.332-.242.332-.424s-.09-.364-.302-.425m-3.834 2.639a3.86 3.86 0 0 0-2.174-2.184 3.86 3.86 0 0 0 2.174-2.184 3.85 3.85 0 0 0 2.174 2.184 3.86 3.86 0 0 0-2.174 2.184"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M14.197 6.362a3.86 3.86 0 0 0-2.174-2.184 3.86 3.86 0 0 0 2.174-2.184 3.85 3.85 0 0 0 2.174 2.184 3.86 3.86 0 0 0-2.174 2.184"
            />
        </svg>
    );
};
export default SvgSmall;
