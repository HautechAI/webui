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
                fillRule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 1 1-1.5 0 2.625 2.625 0 1 1 4.508 1.829q-.138.143-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 1 1-1.5 0v-.75c0-.655.305-1.186.614-1.583.229-.294.516-.58.75-.814l.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;
