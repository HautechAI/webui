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
                d="m6.22 16.924.193-.981q.284.056.587.057h.75v1H7q-.401 0-.78-.076m6.03.076v-1H13q.303 0 .587-.057l.194.98q-.38.076-.781.077zm2.973-.674-.557-.83c.328-.22.61-.502.83-.83l.83.556a4 4 0 0 1-1.104 1.104ZM17 7.75h-1V7q0-.303-.057-.587l.98-.194q.076.38.077.781zm-.674-2.972-.83.556a3 3 0 0 0-.83-.83l.556-.83a4 4 0 0 1 1.104 1.104M7.75 3H7a4 4 0 0 0-.78.076l.193.981A3 3 0 0 1 7 4h.75zm-2.972.674.556.83c-.328.22-.61.502-.83.83l-.83-.556a4 4 0 0 1 1.104-1.104M3 12.25h1V13q0 .303.057.587l-.98.194A4 4 0 0 1 3 13zm1.778 4.076.556-.83a3 3 0 0 1-.83-.83l-.83.556a4 4 0 0 0 1.104 1.104M3 10.75h1v-1.5H3zm0-3h1V7q0-.303.057-.587l-.98-.194A4 4 0 0 0 3 7zM9.25 3v1h1.5V3zm3 0v1H13q.303 0 .587.057l.194-.98A4 4 0 0 0 13 3zM17 9.25h-1v1.5h1zm0 3h-1V13q0 .303-.057.587l.98.194q.076-.38.077-.781zM10.75 17v-1h-1.5v1z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
