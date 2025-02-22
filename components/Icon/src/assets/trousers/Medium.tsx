import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                d="m20.802 20.087-2.062-16.5a1.313 1.313 0 0 0-1.302-1.15H6.562a1.31 1.31 0 0 0-1.302 1.15l-2.062 16.5A1.313 1.313 0 0 0 4.5 21.563h3.815a1.31 1.31 0 0 0 1.272-.99L12 11.25l2.412 9.323a1.31 1.31 0 0 0 1.273.99H19.5a1.31 1.31 0 0 0 1.302-1.476m-2.5-10.931a3.19 3.19 0 0 1-2.689-2.594h2.365zM6.562 3.562h10.875a.187.187 0 0 1 .188.165l.213 1.71H6.162l.213-1.71a.19.19 0 0 1 .187-.164Zm-.54 3h2.365a3.19 3.19 0 0 1-2.689 2.594zm2.475 13.734a.19.19 0 0 1-.182.142H4.5a.19.19 0 0 1-.18-.133.2.2 0 0 1-.008-.078L5.555 10.3a4.32 4.32 0 0 0 3.97-3.738h1.912V8.93l-2.94 11.367Zm11.144.078a.19.19 0 0 1-.141.064h-3.815a.19.19 0 0 1-.183-.147L12.563 8.93V6.562h1.913a4.32 4.32 0 0 0 3.97 3.738l1.242 9.927a.19.19 0 0 1-.046.147Z"
            />
        </svg>
    );
};
export default SvgMedium;
