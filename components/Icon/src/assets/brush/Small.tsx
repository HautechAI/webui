import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                stroke={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.1}
                d="M7.942 13.435a2.5 2.5 0 0 0-4.817.94 1.875 1.875 0 0 1-2 1.87 3.75 3.75 0 0 0 7-1.87c0-.332-.065-.65-.183-.94m0 0c.99-.338 1.938-.79 2.823-1.35m-4.203-.02c.338-.994.792-1.943 1.352-2.83m2.85 2.85a13.3 13.3 0 0 0 3.97-3.873l3.23-4.845a.96.96 0 0 0-1.33-1.331l-4.846 3.23a13.3 13.3 0 0 0-3.874 3.97"
            />
        </svg>
    );
};
export default SvgSmall;
