import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="m7.22 19.924.193-.981q.284.056.587.057h1v1H8q-.401 0-.78-.076M15 20v-1h1q.303 0 .587-.057l.194.98q-.38.076-.781.077zm3.223-.674-.557-.83c.328-.22.61-.502.83-.83l.83.556a4 4 0 0 1-1.104 1.104ZM20 9h-1V8q0-.303-.057-.587l.98-.194q.076.38.077.781zm-.674-3.222-.83.556a3 3 0 0 0-.83-.83l.556-.83a4 4 0 0 1 1.104 1.104M9 4H8a4 4 0 0 0-.78.076l.193.981A3 3 0 0 1 8 5h1zm-3.222.674.556.83c-.328.22-.61.502-.83.83l-.83-.556a4 4 0 0 1 1.104-1.104M4 15h1v1q0 .303.057.587l-.98.194A4 4 0 0 1 4 16zm1.778 4.326.556-.83a3 3 0 0 1-.83-.83l-.83.556a4 4 0 0 0 1.104 1.104M4 13h1v-2H4zm0-4h1V8q0-.303.057-.587l-.98-.194A4 4 0 0 0 4 8zm7-5v1h2V4zm4 0v1h1q.303 0 .587.057l.194-.98A4 4 0 0 0 16 4zm5 7h-1v2h1zm0 4h-1v1q0 .303-.057.587l.98.194q.076-.38.077-.781zm-7 5v-1h-2v1z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
