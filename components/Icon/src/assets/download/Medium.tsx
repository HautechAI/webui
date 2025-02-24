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
                d="M12.508 16.308a.72.72 0 0 1-1.064 0L7.597 12.1a.721.721 0 0 1 1.065-.973l2.592 2.836V3.321a.72.72 0 1 1 1.443 0v10.643l2.593-2.837a.722.722 0 0 1 1.064.974z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M4.043 14.86a.721.721 0 0 0-1.442 0v.053c0 1.314 0 2.375.112 3.208.115.866.365 1.595.943 2.173.58.58 1.308.827 2.173.945.834.111 1.895.111 3.21.111h5.874c1.314 0 2.375 0 3.209-.111.865-.118 1.594-.366 2.173-.945s.827-1.307.944-2.173c.112-.833.112-1.894.112-3.208v-.053a.721.721 0 0 0-1.443 0c0 1.38-.002 2.342-.099 3.069-.095.706-.269 1.079-.534 1.345-.267.267-.64.44-1.346.535-.726.097-1.689.099-3.069.099H9.091c-1.38 0-2.343-.002-3.07-.1-.705-.094-1.078-.268-1.344-.534-.267-.266-.44-.64-.535-1.346-.097-.726-.1-1.689-.1-3.068Z"
            />
        </svg>
    );
};
export default SvgMedium;
