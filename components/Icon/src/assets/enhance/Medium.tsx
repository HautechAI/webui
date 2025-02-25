import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                fillRule="evenodd"
                d="M16.707 11.738a.71.71 0 0 0 .71-.71V4.223l1.628 1.628a.71.71 0 1 0 1.004-1.003l-2.84-2.84a.71.71 0 0 0-1.003 0l-2.84 2.84A.71.71 0 0 0 14.37 5.85l1.628-1.628v6.805c0 .392.318.71.71.71Z"
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
                fillRule="evenodd"
                d="M11.975 1.8h-.054c-2.185 0-3.898 0-5.234.18-1.367.183-2.446.568-3.293 1.414-.847.847-1.23 1.926-1.414 3.294-.18 1.335-.18 3.048-.18 5.233v.108c0 2.185 0 3.898.18 5.234.183 1.367.568 2.446 1.414 3.293.847.847 1.926 1.23 3.294 1.414 1.335.18 3.048.18 5.233.18h.108c2.185 0 3.898 0 5.234-.18 1.367-.184 2.446-.568 3.293-1.414.847-.847 1.23-1.926 1.414-3.294.18-1.335.18-3.048.18-5.233v-.054a.71.71 0 0 0-1.42 0c0 2.25-.002 3.867-.166 5.098l-.021.144-2.626-2.364a3.55 3.55 0 0 0-4.415-.265l-.282.199a1.18 1.18 0 0 1-1.517-.133l-4.06-4.06a2.887 2.887 0 0 0-3.942-.13l-.48.419c.004-1.696.028-2.985.165-4.006.163-1.21.474-1.94 1.012-2.48.54-.538 1.268-.848 2.479-1.01 1.23-.165 2.847-.167 5.098-.167a.71.71 0 1 0 0-1.42M3.386 17.073c.163 1.21.474 1.94 1.012 2.48.54.538 1.268.848 2.479 1.01 1.23.165 2.847.167 5.098.167s3.867-.002 5.098-.166c1.21-.163 1.94-.474 2.48-1.012a2.8 2.8 0 0 0 .571-.819 1 1 0 0 1-.106-.079l-3.05-2.744a2.13 2.13 0 0 0-2.65-.161l-.282.198a2.6 2.6 0 0 1-3.337-.288l-4.06-4.06a1.467 1.467 0 0 0-2.004-.067L3.22 12.77c.003 1.844.022 3.223.166 4.303"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
