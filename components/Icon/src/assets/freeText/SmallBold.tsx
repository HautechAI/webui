import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
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
                d="M11.25 4.521c0-.652-.416-1.398-1.069-1.399h-.638c-1.61 0-2.873 0-3.858.132-1.007.136-1.803.42-2.427 1.043-.625.624-.907 1.42-1.042 2.428-.133.984-.133 2.246-.133 3.857v.08c0 1.61 0 2.873.133 3.858.135 1.007.418 1.803 1.042 2.427s1.42.907 2.428 1.042c.984.133 2.246.133 3.857.133h.08c1.61 0 2.873 0 3.858-.133 1.007-.135 1.803-.418 2.427-1.042s.907-1.42 1.042-2.428c.133-.984.133-2.246.133-3.857v-.08q.001-.821-.005-1.525c-.007-.641-.603-1.098-1.245-1.098-2.531 0-4.583-1.54-4.583-3.438"
                clipRule="evenodd"
            />
            <path
                fill="#F3F8F8"
                d="M8.499 8.833c-.226 0-.436 0-.608.026a.88.88 0 0 0-.554.275c-.154.171-.208.376-.232.57-.022.183-.022.41-.022.664v.299a.393.393 0 1 0 .786 0v-.277c0-.284 0-.462.016-.591a.5.5 0 0 1 .024-.115.1.1 0 0 1 .012-.024l.007-.005a.3.3 0 0 1 .08-.02c.106-.015.256-.016.516-.016h.655v4.454h-.917a.393.393 0 0 0 0 .785h2.881a.393.393 0 0 0 0-.786H9.965V9.62h.654c.26 0 .41.001.517.017.048.007.07.016.08.02l.005.003q.01.01.013.024c.007.02.017.055.024.116.016.13.016.307.016.592v.276a.393.393 0 1 0 .786 0v-.299c0-.255 0-.481-.022-.663-.023-.195-.078-.4-.232-.572a.9.9 0 0 0-.554-.274 4 4 0 0 0-.607-.026z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m17.747 4.144-.672-.2a1.72 1.72 0 0 1-1.18-1.18l-.2-.67c-.073-.236-.454-.236-.527 0l-.2.67a1.72 1.72 0 0 1-1.18 1.18l-.672.2c-.11.037-.2.145-.2.254s.073.218.2.254l.672.2a1.72 1.72 0 0 1 1.18 1.18l.2.671c.037.11.146.2.255.2a.27.27 0 0 0 .254-.2l.2-.671a1.72 1.72 0 0 1 1.18-1.18l.672-.2c.11-.036.2-.145.2-.254s-.054-.217-.182-.254m-2.306 1.58a2.32 2.32 0 0 0-1.308-1.308A2.32 2.32 0 0 0 15.44 3.11c.236.599.708 1.07 1.307 1.306a2.32 2.32 0 0 0-1.307 1.307Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M15.44 5.723a2.32 2.32 0 0 0-1.307-1.307A2.32 2.32 0 0 0 15.44 3.11c.236.599.708 1.07 1.307 1.306a2.32 2.32 0 0 0-1.307 1.307"
            />
        </svg>
    );
};
export default SvgSmall;
