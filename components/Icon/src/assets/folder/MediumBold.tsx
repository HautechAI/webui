import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import get from 'lodash/get';
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
                d="M2.07 5.008C2 5.376 2 5.818 2 6.7v7.05c0 3.771 0 5.657 1.172 6.828S6.229 21.75 10 21.75h4c3.771 0 5.657 0 6.828-1.172S22 17.521 22 13.75v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225c-.855-.769-2.172-.769-4.804-.769h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352c-.488-.271-.896-.68-1.712-1.495l-.55-.55a9 9 0 0 0-.554-.53 4 4 0 0 0-2.18-.903c-.186-.017-.38-.017-.766-.017-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.008M12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 1 1 0 1.5h-1.25v1.25a.75.75 0 1 1-1.5 0V14.5H10a.75.75 0 1 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11"
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
                d="M12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 1 1 0 1.5h-1.25v1.25a.75.75 0 1 1-1.5 0V14.5H10a.75.75 0 1 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11"
            />
        </svg>
    );
};
export default SvgMedium;
