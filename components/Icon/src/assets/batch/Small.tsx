import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
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
                d="M10 3.958c-.883 0-1.592.274-3.278.949l-2.341.935c-.842.336-1.425.571-1.804.77l-.1.055.1.054c.379.198.962.433 1.804.77l2.34.936c1.688.675 2.396.948 3.279.948s1.592-.273 3.278-.948l2.341-.936c.842-.337 1.425-.572 1.803-.77l.1-.054-.1-.054c-.378-.199-.961-.434-1.803-.77l-2.34-.936c-1.687-.675-2.396-.949-3.279-.949m-3.647-.25c1.565-.626 2.498-1 3.647-1 1.15 0 2.082.374 3.647 1l.095.038 2.379.952c.796.318 1.44.575 1.882.807.224.117.44.25.608.41.171.166.347.416.347.752s-.175.586-.347.75a2.6 2.6 0 0 1-.608.411c-.442.232-1.086.49-1.882.809l-2.378.95-.096.039c-1.565.626-2.498.999-3.647.999-1.15 0-2.082-.373-3.647-1l-.095-.037-2.379-.952c-.796-.318-1.44-.575-1.882-.808a2.7 2.7 0 0 1-.608-.41c-.171-.165-.347-.415-.347-.751s.175-.586.347-.751c.167-.161.383-.293.609-.411.441-.232 1.085-.49 1.881-.808l2.379-.95.095-.04Zm-4.27 5.825.004.003.02.017.098.079c.09.07.232.173.423.297.384.25.968.58 1.754.895l2.34.936c1.688.675 2.395.948 3.279.948s1.591-.273 3.278-.948l2.341-.936a10 10 0 0 0 1.753-.895q.28-.183.542-.393l.003-.002a.625.625 0 0 1 .834.931L18.333 10l.417.465v.002h-.002l-.004.004-.011.01-.038.032q-.309.25-.642.465c-.622.398-1.282.735-1.97 1.005l-2.34.937-.096.038c-1.565.626-2.498 1-3.647 1-1.15 0-2.082-.374-3.647-1l-.095-.038-2.341-.937a11.4 11.4 0 0 1-1.97-1.006 8 8 0 0 1-.642-.465l-.037-.032-.012-.01-.004-.003-.001-.002H1.25L1.667 10l-.417.466a.625.625 0 1 1 .833-.933m15.833 3.335.002-.001a.625.625 0 0 1 .833.931l-.001.002h-.002l-.004.004-.011.01a8 8 0 0 1-.68.497c-.622.398-1.282.736-1.97 1.007l-2.34.936-.096.038c-1.565.626-2.498 1-3.647 1-1.15 0-2.082-.374-3.647-1l-.095-.038-2.341-.937a11.4 11.4 0 0 1-1.97-1.006 8 8 0 0 1-.642-.465l-.037-.033-.012-.01-.004-.003-.001-.002H1.25a.623.623 0 0 1 .383-1.086.63.63 0 0 1 .45.155l.003.002.02.018.098.078c.091.07.232.173.423.297.384.25.968.58 1.754.896l2.34.935c1.688.675 2.396.949 3.279.949s1.592-.274 3.278-.949l2.341-.935q.921-.361 1.753-.896.281-.182.542-.393z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
