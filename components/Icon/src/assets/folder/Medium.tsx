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
                d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182-.35-.1-.689-.24-1.008-.417-.58-.324-1.058-.801-1.8-1.543l-.077-.078-.55-.55a8 8 0 0 0-.503-.482 3.25 3.25 0 0 0-1.771-.734 8 8 0 0 0-.696-.015"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
