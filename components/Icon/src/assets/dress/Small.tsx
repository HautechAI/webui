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
                stroke={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.1}
                d="M6.667 10h6.666M6.342 1.79l.158-.033c.407-.084.61-.125.742-.055.13.069.241.329.462.85C8.1 3.484 9.021 4.139 10 4.139c.98 0 1.9-.655 2.296-1.587.22-.521.332-.781.462-.85.131-.07.335-.028.742.056l.158.032c1.05.192 1.066.2 1.786 1.038.608.706 1.48 1.428 1.914 2.278.32.627.048 1.163-.311 1.66-.45.622-1.032 1.219-1.82.735-.504-.309-.905-.96-1.296-1.411 0 0 .236 3.014-.598 3.853.757.545 1.952 1.605 2.9 3.777.339.775.794 1.657.345 2.483-1.525 2.81-11.599 2.871-13.156 0-.449-.826.006-1.708.344-2.483.949-2.172 2.144-3.232 2.9-3.777-.833-.839-.597-3.853-.597-3.853-.39.45-.791 1.103-1.296 1.41-.788.484-1.37-.112-1.82-.733-.358-.498-.631-1.035-.311-1.661.435-.85 1.306-1.572 1.914-2.278.72-.837.737-.846 1.786-1.038"
            />
        </svg>
    );
};
export default SvgSmall;
