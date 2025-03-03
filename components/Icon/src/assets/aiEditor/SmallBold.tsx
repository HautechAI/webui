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
                fillRule="evenodd"
                d="M13.495 6.504a2.29 2.29 0 0 0-3.24 0l-7.71 7.711a2.29 2.29 0 0 0 3.239 3.24l7.71-7.711a2.29 2.29 0 0 0 0-3.24Zm-2.57.668a1.345 1.345 0 0 1 1.901 1.903l-.999 1-1.902-1.902 1-1Zm-5.81 9.614 6.043-6.042-1.902-1.902-6.043 6.043a1.344 1.344 0 1 0 1.902 1.9Z"
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
                d="m5.115 16.786 6.043-6.042-1.902-1.902-6.043 6.043a1.344 1.344 0 1 0 1.902 1.9Zm14.131-2.393-.822-.244a2.1 2.1 0 0 1-1.445-1.444l-.245-.822c-.089-.288-.556-.288-.644 0l-.245.822A2.1 2.1 0 0 1 14.4 14.15l-.822.245c-.134.044-.245.177-.245.31 0 .134.089.267.245.311l.822.245a2.1 2.1 0 0 1 1.445 1.444l.245.822c.044.133.177.244.31.244a.33.33 0 0 0 .312-.244l.245-.822a2.1 2.1 0 0 1 1.445-1.444l.822-.245c.134-.044.245-.177.245-.31 0-.134-.067-.267-.223-.312Zm-2.823 1.933a2.83 2.83 0 0 0-1.6-1.6 2.83 2.83 0 0 0 1.6-1.599c.29.733.867 1.31 1.6 1.6a2.83 2.83 0 0 0-1.6 1.599"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M16.423 16.326a2.83 2.83 0 0 0-1.6-1.6 2.83 2.83 0 0 0 1.6-1.599c.29.733.867 1.31 1.6 1.6a2.83 2.83 0 0 0-1.6 1.599m2.532-12.9-.782-.233a2 2 0 0 1-1.374-1.372l-.232-.782c-.085-.274-.529-.274-.613 0l-.233.782a2 2 0 0 1-1.373 1.372l-.783.233c-.126.042-.232.169-.232.295a.31.31 0 0 0 .232.296l.783.232c.676.19 1.183.718 1.373 1.373l.233.782c.042.126.169.232.296.232a.31.31 0 0 0 .296-.232l.232-.782a2 2 0 0 1 1.374-1.373l.782-.232c.127-.042.232-.169.232-.296s-.063-.253-.211-.295m-2.684 1.837a2.7 2.7 0 0 0-1.522-1.52 2.7 2.7 0 0 0 1.522-1.521 2.7 2.7 0 0 0 1.521 1.52 2.7 2.7 0 0 0-1.521 1.521"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M16.27 5.263a2.7 2.7 0 0 0-1.52-1.52 2.7 2.7 0 0 0 1.52-1.521 2.7 2.7 0 0 0 1.523 1.52 2.7 2.7 0 0 0-1.522 1.521Zm-9.52-.868-.822-.244A2.1 2.1 0 0 1 4.48 2.706l-.244-.822c-.09-.29-.556-.29-.645 0l-.245.822A2.1 2.1 0 0 1 1.9 4.151l-.823.244c-.134.045-.245.178-.245.312 0 .133.089.266.245.31l.823.245a2.1 2.1 0 0 1 1.446 1.445l.245.823c.044.133.178.244.311.244a.33.33 0 0 0 .312-.244l.244-.823c.2-.711.757-1.245 1.446-1.445l.823-.244c.134-.045.245-.178.245-.311 0-.134-.067-.267-.222-.312M3.926 6.33a2.84 2.84 0 0 0-1.601-1.6 2.84 2.84 0 0 0 1.601-1.6c.29.733.868 1.31 1.602 1.6a2.84 2.84 0 0 0-1.602 1.6"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M3.925 6.33a2.84 2.84 0 0 0-1.601-1.601 2.84 2.84 0 0 0 1.601-1.6c.29.733.868 1.31 1.602 1.6a2.84 2.84 0 0 0-1.602 1.6Z"
            />
        </svg>
    );
};
export default SvgSmall;
