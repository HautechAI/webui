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
                stroke={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M8 12h8M7.61 2.148l.19-.04c.488-.1.732-.15.89-.066.157.083.29.395.555 1.02.475 1.119 1.58 1.905 2.755 1.905s2.28-.786 2.755-1.905c.265-.625.398-.937.555-1.02s.402-.033.89.067l.19.039c1.26.23 1.279.241 2.143 1.245.73.848 1.775 1.714 2.297 2.734.384.752.057 1.396-.374 1.993-.539.745-1.238 1.462-2.184.881-.604-.37-1.086-1.152-1.555-1.693 0 0 .283 3.617-.717 4.623.908.655 2.342 1.927 3.48 4.533.406.93.952 1.988.414 2.98-1.83 3.371-13.919 3.445-15.788 0-.538-.992.008-2.05.413-2.98C5.658 13.858 7.092 12.586 8 11.931c-1-1.006-.717-4.623-.717-4.623-.469.541-.95 1.323-1.555 1.693-.946.58-1.645-.136-2.184-.881-.43-.597-.758-1.241-.374-1.993.522-1.02 1.568-1.886 2.297-2.734.864-1.004.884-1.015 2.143-1.245"
            />
        </svg>
    );
};
export default SvgMedium;
