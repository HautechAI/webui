import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="m4.975 13.54.156-.786q.226.046.469.046h.6v.8h-.6q-.322 0-.625-.06m4.825.06v-.8h.6q.242 0 .47-.046l.155.785q-.304.06-.625.061zm2.378-.539-.445-.665c.262-.175.488-.401.663-.663l.665.445c-.234.349-.534.65-.883.883M13.6 6.2h-.8v-.6q0-.242-.046-.47l.785-.155q.06.303.061.625zm-.539-2.378-.665.445a2.4 2.4 0 0 0-.663-.663l.445-.665c.349.234.65.534.883.883M6.2 2.4h-.6q-.322 0-.625.06l.156.786Q5.357 3.2 5.6 3.2h.6zm-2.378.539.445.665a2.4 2.4 0 0 0-.663.663l-.665-.445c.234-.349.534-.65.883-.883M2.4 9.8h.8v.6q0 .242.046.47l-.785.155A3.2 3.2 0 0 1 2.4 10.4zm1.422 3.261.445-.665a2.4 2.4 0 0 1-.663-.663l-.665.445c.234.349.534.65.883.883M2.4 8.6h.8V7.4h-.8zm0-2.4h.8v-.6q0-.242.046-.47l-.785-.155q-.06.303-.061.625zm5-3.8v.8h1.2v-.8zm2.4 0v.8h.6q.242 0 .47.046l.155-.785A3.2 3.2 0 0 0 10.4 2.4zm3.8 5h-.8v1.2h.8zm0 2.4h-.8v.6q0 .242-.046.47l.785.155q.06-.304.061-.625zm-5 3.8v-.8H7.4v.8z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgXsmall;
