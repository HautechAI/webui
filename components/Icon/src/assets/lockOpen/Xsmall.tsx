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
                d="M4.478 6.105h5.764V4.396a2.06 2.06 0 0 0-.623-1.514 2.06 2.06 0 0 0-1.514-.623 2.06 2.06 0 0 0-1.513.623 2.06 2.06 0 0 0-.623 1.514h-.926q0-1.281.895-2.172a2.96 2.96 0 0 1 2.172-.89q1.276 0 2.167.893a2.96 2.96 0 0 1 .891 2.169v1.71h.564q.475 0 .81.335.336.336.336.81v6.399q0 .474-.336.81a1.1 1.1 0 0 1-.81.335H4.473q-.474 0-.807-.335a1.1 1.1 0 0 1-.333-.81v-6.4q0-.473.336-.81.335-.335.81-.335Zm0 7.764h7.254a.2.2 0 0 0 .158-.062.21.21 0 0 0 .062-.157v-6.4a.21.21 0 0 0-.062-.157.21.21 0 0 0-.158-.062H4.478a.21.21 0 0 0-.157.062.21.21 0 0 0-.062.158v6.399q0 .096.062.157a.21.21 0 0 0 .157.062m3.631-2.315q.463 0 .781-.323.32-.323.32-.784 0-.462-.324-.782a1.08 1.08 0 0 0-.784-.319q-.463 0-.781.323-.32.323-.32.785t.323.781.785.32Z"
            />
        </svg>
    );
};
export default SvgXsmall;
