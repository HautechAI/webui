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
            <g clipPath="url(#small_svg__a)">
                <path
                    fill={
                        theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                        props.color ??
                        'currentColor'
                    }
                    fillRule="evenodd"
                    d="M17.949 8.503c-.345-.598-.978-.795-1.583-.88-.608-.084-1.424-.084-2.41-.084H13.9c-.587 0-.971-.007-1.25-.045-.253-.035-.334-.088-.368-.118-.025-.026-.07-.087-.1-.308-.037-.26-.038-.618-.038-1.19V5.53c0-1.48 0-2.665-.115-3.51-.106-.792-.36-1.683-1.24-1.953C9.925-.198 9.2.37 8.637.956c-.601.624-1.314 1.588-2.207 2.796L3.507 7.707c-.568.77-1.043 1.411-1.325 1.941-.283.531-.489 1.163-.175 1.793v.002l.004.007.004.007.003.007.005.008.004.007.004.008.004.007.004.007v.002c.344.593.974.8 1.584.894.628.095 1.467.101 2.483.101.594 0 .971.002 1.249.038.246.03.32.079.35.106.028.03.077.098.112.326.039.262.046.624.046 1.19v.35c0 1.478 0 2.664.113 3.509.107.791.36 1.683 1.24 1.953.865.264 1.59-.303 2.153-.89.6-.624 1.314-1.587 2.206-2.796l2.889-3.907c.587-.795 1.071-1.46 1.356-2.012.279-.54.474-1.176.163-1.8l-.002-.002-.003-.008-.004-.007-.004-.007-.003-.008-.005-.008-.004-.006-.004-.008-.004-.006zM9.644 1.925c-.53.55-1.189 1.44-2.124 2.705L4.667 8.49c-.614.83-1.024 1.387-1.25 1.815-.113.208-.154.34-.166.42-.007.049-.003.07.003.085.023.033.121.134.58.205.5.076 1.221.086 2.272.086h.043c.538 0 1.006 0 1.383.047.403.053.805.169 1.137.481l.005.006.006.004c.326.321.458.718.519 1.121.057.386.061.86.061 1.398v.289c0 1.553.001 2.642.1 3.382.051.37.117.585.182.706.047.09.075.096.083.098h.002c.01.004.045.016.15-.037.133-.067.322-.21.586-.485.529-.55 1.188-1.44 2.124-2.704l2.852-3.86c.61-.825 1.016-1.391 1.24-1.823.19-.37.168-.495.156-.529-.021-.03-.115-.124-.562-.188-.5-.07-1.217-.07-2.273-.07-.561 0-1.049-.004-1.443-.06-.407-.055-.81-.178-1.139-.488l-.005-.005-.005-.005c-.329-.323-.456-.72-.511-1.12-.052-.367-.05-.823-.05-1.336v-.334c0-1.553-.002-2.642-.103-3.382-.049-.368-.116-.584-.18-.705-.048-.09-.075-.096-.083-.098h-.002v-.001c-.01-.004-.044-.015-.15.037-.133.067-.321.21-.585.485"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="small_svg__a">
                    <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
export default SvgSmall;
