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
                d="M12 4.75c-1.06 0-1.91.328-3.934 1.138L5.257 7.01c-1.01.404-1.71.686-2.164.924L2.973 8l.12.065c.454.238 1.154.52 2.164.924l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.404 1.71-.686 2.164-.924l.12-.065-.12-.065c-.454-.238-1.154-.52-2.164-.924l-2.809-1.123C13.91 5.078 13.06 4.75 12 4.75m-4.376-.301C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l.115.046 2.854 1.142c.955.382 1.728.69 2.259.969.268.14.528.3.729.493.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493-.53.278-1.303.587-2.258.97l-2.854 1.14-.115.047c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046-2.854-1.142c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493.53-.278 1.303-.587 2.258-.97l2.854-1.14zM2.5 11.44l.004.003.024.021a8 8 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c.735-.288 1.44-.648 2.104-1.074q.336-.22.65-.472l.003-.002.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001-.005.004-.014.012-.045.039q-.37.3-.77.558c-.747.478-1.539.881-2.364 1.206l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.7 13.7 0 0 1-2.363-1.207 9 9 0 0 1-.771-.558l-.045-.039-.014-.012-.005-.004-.001-.002H1.5L2 12l-.5.559a.75.75 0 1 1 1-1.119m18.999 4.001.002-.001a.75.75 0 0 1 1 1.118l-.001.002-.002.001-.005.004-.014.012a9 9 0 0 1-.815.596 13.7 13.7 0 0 1-2.364 1.208l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.7 13.7 0 0 1-2.363-1.207 9 9 0 0 1-.771-.558l-.045-.039-.014-.012-.005-.004-.001-.002H1.5a.748.748 0 0 1 .46-1.304.75.75 0 0 1 .54.187l.003.002.024.021a8 8 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c.735-.288 1.44-.648 2.104-1.074q.336-.22.65-.472z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
