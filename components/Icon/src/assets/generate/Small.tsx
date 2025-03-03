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
            width={props.size ?? 20}
            viewBox="0 0 20 20"
            height={props.size ?? 20}
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
                fillRule="evenodd"
                d="M17.849 7.426c.375-.125.776.133.785.529.014.69.014 1.457.014 2.309v.092c0 1.857 0 3.313-.152 4.449-.156 1.161-.483 2.078-1.202 2.799-.72.72-1.638 1.045-2.8 1.201-1.135.153-2.59.153-4.448.153h-.092c-1.857 0-3.313 0-4.449-.153-1.161-.156-2.079-.482-2.799-1.201s-1.045-1.638-1.202-2.8c-.152-1.135-.152-2.59-.152-4.448v-.092c0-1.858 0-3.313.152-4.449.157-1.162.483-2.079 1.202-2.799.72-.72 1.638-1.046 2.8-1.202.767-.103 1.68-.136 2.764-.147.425-.005.65.559.45.934a.5.5 0 0 1-.44.273c-1.062.01-1.911.042-2.613.136-1.029.138-1.65.402-2.108.86s-.72 1.078-.859 2.107c-.102.756-.13 1.684-.138 2.863a.244.244 0 0 0 .405.185 2.454 2.454 0 0 1 3.35.112l3.452 3.451a1.005 1.005 0 0 0 1.289.111l.24-.169a3.02 3.02 0 0 1 3.753.226l2.14 1.926a.066.066 0 0 0 .11-.04c.139-1.045.14-2.419.14-4.332 0-.877 0-1.64-.014-2.311a.61.61 0 0 1 .422-.573M2.7 14.643c.138 1.029.401 1.648.86 2.107.459.458 1.078.721 2.107.86 1.046.14 2.42.142 4.333.142s3.287-.002 4.333-.142c1.029-.139 1.649-.402 2.107-.86a2.4 2.4 0 0 0 .437-.595c.03-.057.007-.125-.04-.167l-2.593-2.335a1.81 1.81 0 0 0-2.252-.135l-.24.17a2.21 2.21 0 0 1-2.836-.247L5.464 9.99a1.247 1.247 0 0 0-1.703-.057l-.927.812a.8.8 0 0 0-.275.607c.005 1.386.028 2.446.141 3.29Z"
                clipRule="evenodd"
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
        </svg>
    );
};
export default SvgSmall;
