import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import { get } from 'lodash-es';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size ?? 24}
            viewBox="0 0 20 20"
            height={props.size ?? 24}
            fill="none"
            {...props}
        >
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M10 6.875a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25M8.125 10a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0"
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
                d="M9.98 1.042c-.372 0-.68 0-.934.016a2.3 2.3 0 0 0-.756.159 2.3 2.3 0 0 0-1.24 1.24c-.122.291-.154.6-.167.935A.73.73 0 0 1 6.537 4a.73.73 0 0 1-.701-.004c-.297-.157-.58-.283-.893-.325a2.3 2.3 0 0 0-1.695.455 2.3 2.3 0 0 0-.514.575c-.141.212-.296.48-.481.8l-.021.037c-.186.321-.34.588-.452.817a2.3 2.3 0 0 0-.242.733c-.08.603.084 1.212.454 1.694.192.251.443.434.726.612a.73.73 0 0 1 .355.605.73.73 0 0 1-.355.605c-.283.178-.533.36-.726.612a2.3 2.3 0 0 0-.454 1.694c.034.26.125.495.241.733a15 15 0 0 0 .453.817l.02.037c.186.32.34.588.482.8.148.219.306.416.514.575a2.3 2.3 0 0 0 1.695.455c.313-.042.596-.167.893-.325a.73.73 0 0 1 .7-.004.72.72 0 0 1 .347.61c.013.334.045.643.167.934a2.3 2.3 0 0 0 1.24 1.241c.242.1.492.14.756.157.253.017.562.017.933.017h.042c.37 0 .68 0 .933-.016a2.3 2.3 0 0 0 .756-.159 2.3 2.3 0 0 0 1.24-1.24c.122-.291.154-.6.168-.935a.73.73 0 0 1 .345-.61.73.73 0 0 1 .701.005c.297.157.58.283.893.324a2.3 2.3 0 0 0 1.695-.454c.208-.16.366-.356.514-.575.142-.212.297-.48.482-.8l.02-.037c.186-.321.34-.588.452-.817.117-.238.208-.474.242-.733a2.3 2.3 0 0 0-.454-1.694c-.192-.251-.443-.434-.726-.612a.73.73 0 0 1-.355-.605.72.72 0 0 1 .355-.605c.283-.178.533-.36.726-.612a2.3 2.3 0 0 0 .454-1.694 2.3 2.3 0 0 0-.241-.733q-.214-.416-.453-.817l-.02-.037a15 15 0 0 0-.482-.8 2.3 2.3 0 0 0-.514-.575 2.3 2.3 0 0 0-1.694-.455c-.314.042-.597.167-.894.325a.73.73 0 0 1-.7.004.73.73 0 0 1-.347-.61c-.013-.334-.045-.643-.167-.934a2.3 2.3 0 0 0-1.24-1.241c-.242-.1-.492-.14-.756-.157-.253-.017-.562-.017-.933-.017zM8.767 2.37a1.2 1.2 0 0 1 .363-.065c.206-.014.472-.014.869-.014s.663 0 .87.014c.2.014.298.038.362.065.256.106.458.308.564.564.033.08.06.206.072.503a1.97 1.97 0 0 0 .97 1.645c.605.35 1.326.327 1.91.019.264-.14.386-.179.473-.19.274-.036.55.038.77.206.055.043.125.115.237.282.116.172.25.402.448.746s.33.575.422.76c.089.18.116.277.125.346.036.274-.038.551-.206.77-.054.07-.149.156-.4.315-.56.351-.94.965-.94 1.663s.38 1.312.94 1.663c.251.159.346.245.4.314.168.22.241.496.206.77-.009.07-.037.167-.125.347a14 14 0 0 1-.422.76c-.198.344-.333.574-.448.746-.112.167-.182.24-.237.282-.22.168-.496.242-.77.206-.087-.011-.209-.05-.473-.19a1.97 1.97 0 0 0-1.91.018 1.97 1.97 0 0 0-.97 1.646c-.011.297-.039.423-.072.503a1.04 1.04 0 0 1-.564.564 1.2 1.2 0 0 1-.363.065c-.206.014-.472.014-.869.014s-.663 0-.87-.014a1.2 1.2 0 0 1-.362-.065 1.04 1.04 0 0 1-.564-.564c-.033-.08-.06-.206-.071-.503a1.97 1.97 0 0 0-.971-1.645 1.97 1.97 0 0 0-1.91-.019c-.264.14-.386.179-.473.19a1.04 1.04 0 0 1-.77-.206 1.2 1.2 0 0 1-.237-.282 14 14 0 0 1-.448-.746c-.198-.343-.33-.575-.421-.76-.09-.18-.117-.277-.125-.346a1.04 1.04 0 0 1 .205-.77c.054-.07.149-.156.4-.315.56-.351.94-.965.94-1.663s-.38-1.312-.94-1.663c-.251-.159-.346-.245-.4-.315a1.04 1.04 0 0 1-.205-.77c.008-.069.036-.166.125-.346.09-.186.223-.417.421-.76.199-.344.333-.574.448-.746.112-.167.182-.24.237-.282.22-.168.496-.242.77-.206.087.011.209.05.473.19a1.97 1.97 0 0 0 1.91-.019 1.97 1.97 0 0 0 .97-1.645c.011-.297.039-.423.072-.503a1.04 1.04 0 0 1 .564-.564"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
