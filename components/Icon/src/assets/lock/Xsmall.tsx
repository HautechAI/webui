import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
const SvgXsmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="M4.472 14.778q-.474 0-.806-.335a1.1 1.1 0 0 1-.333-.809V7.243q0-.473.335-.809.336-.335.809-.335h.564V4.392q0-1.273.894-2.166a2.96 2.96 0 0 1 2.168-.893q1.275 0 2.165.893c.89.893.89 1.317.89 2.166V6.1h.564q.473 0 .808.335a1.1 1.1 0 0 1 .335.809v6.391a1.1 1.1 0 0 1-.335.809 1.1 1.1 0 0 1-.809.335zm.005-.925h7.245q.096 0 .157-.062a.21.21 0 0 0 .062-.157V7.243a.21.21 0 0 0-.062-.157.21.21 0 0 0-.157-.062H4.477a.21.21 0 0 0-.157.062.21.21 0 0 0-.062.157v6.391q0 .096.062.157a.21.21 0 0 0 .157.062m3.626-2.312q.462 0 .78-.322.32-.323.319-.784 0-.462-.323-.78a1.07 1.07 0 0 0-.783-.32q-.462 0-.78.323a1.07 1.07 0 0 0-.32.784q0 .462.323.78.323.32.784.32ZM5.965 6.1h4.268V4.392q0-.89-.622-1.512a2.06 2.06 0 0 0-1.512-.622q-.888 0-1.511.622a2.06 2.06 0 0 0-.623 1.512z"
            />
        </svg>
    );
};
export default SvgXsmall;
