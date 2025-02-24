import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M12.464 2h-3.01c-1.365 0-2.446 0-3.29.114-.87.117-1.575.363-2.131.918-.555.556-.802 1.26-.92 2.13C3 6.01 3 7.09 3 8.454v4.495a2.78 2.78 0 0 0 2.35 2.75c.102.567.299 1.051.692 1.445.447.447 1.01.639 1.678.73.643.085 1.462.085 2.477.085h2.308c1.015 0 1.833 0 2.477-.086.668-.09 1.23-.282 1.677-.729.447-.446.639-1.009.73-1.677.085-.643.085-1.462.085-2.477V9.196c0-1.014 0-1.833-.086-2.477-.09-.668-.282-1.23-.729-1.677-.394-.394-.878-.59-1.445-.692A2.78 2.78 0 0 0 12.464 2m1.581 2.242a1.67 1.67 0 0 0-1.58-1.129h-2.97c-1.415 0-2.42.002-3.184.104-.746.1-1.177.289-1.49.603-.315.314-.503.744-.603 1.49-.103.764-.104 1.77-.104 3.185v4.453a1.67 1.67 0 0 0 1.129 1.581c-.016-.453-.016-.965-.016-1.54V9.196c0-1.014 0-1.833.087-2.477.089-.668.282-1.23.728-1.677.447-.447 1.01-.639 1.678-.728.643-.087 1.462-.087 2.477-.087h2.308c.575 0 1.087 0 1.54.015M6.83 5.83c.205-.206.493-.34 1.039-.413.56-.075 1.303-.076 2.369-.076h2.226c1.066 0 1.809.001 2.37.076.544.074.832.208 1.038.413.206.206.34.494.413 1.04.075.559.076 1.303.076 2.368v3.711c0 1.065-.001 1.808-.076 2.37-.074.544-.208.832-.413 1.038-.206.205-.494.339-1.04.412-.56.075-1.303.077-2.368.077h-2.226c-1.066 0-1.81-.002-2.37-.077-.545-.073-.833-.207-1.038-.412-.206-.206-.34-.494-.413-1.04-.075-.56-.076-1.303-.076-2.368V9.238c0-1.065.001-1.81.076-2.37.074-.544.208-.832.413-1.038"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
