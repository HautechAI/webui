import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
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
                d="M12.454 1.042c-1.139 0-2.058 0-2.78.097-.75.1-1.382.317-1.884.818-.437.437-.658.975-.774 1.606-.113.615-.134 1.365-.14 2.267a.625.625 0 0 0 1.25.007c.006-.911.029-1.557.119-2.048.088-.472.227-.746.43-.948.23-.231.554-.381 1.166-.464.629-.084 1.463-.085 2.659-.085h.833c1.197 0 2.031.001 2.66.086.612.082.935.233 1.167.463.23.23.38.554.462 1.167.085.628.086 1.463.086 2.659v6.666c0 1.196 0 2.03-.085 2.66-.083.612-.233.935-.464 1.166-.23.231-.554.381-1.166.463-.629.085-1.463.086-2.66.086H12.5c-1.196 0-2.03-.001-2.66-.085-.61-.083-.935-.234-1.166-.464-.202-.203-.341-.476-.429-.948-.09-.491-.113-1.137-.118-2.048a.625.625 0 0 0-1.25.007c.005.902.026 1.652.139 2.267.117.631.337 1.169.775 1.606.5.502 1.133.717 1.883.819.722.096 1.641.096 2.78.096h.925c1.14 0 2.059 0 2.781-.096.75-.102 1.382-.317 1.883-.819.502-.501.717-1.133.819-1.883.096-.723.096-1.642.096-2.78V6.62c0-1.138 0-2.058-.096-2.78-.101-.75-.317-1.382-.819-1.883-.501-.502-1.133-.717-1.883-.818-.723-.097-1.642-.097-2.78-.097z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M12.5 9.375a.625.625 0 1 1 0 1.25H3.356l1.634 1.4a.625.625 0 0 1-.813.95l-2.917-2.5a.625.625 0 0 1 0-.95l2.917-2.5a.625.625 0 0 1 .813.95l-1.633 1.4z"
            />
        </svg>
    );
};
export default SvgSmall;
