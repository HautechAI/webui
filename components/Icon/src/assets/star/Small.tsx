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
                d="M9.474 3.532c-.294.382-.624.973-1.105 1.835l-.243.437-.044.078c-.223.402-.413.743-.717.974-.308.234-.683.318-1.119.416l-.085.02-.473.106c-.934.212-1.57.357-2.005.529-.425.166-.514.304-.548.413-.037.117-.038.294.215.698.259.41.694.92 1.33 1.664l.323.377.055.065c.3.35.55.641.665 1.01.114.367.076.752.03 1.22l-.008.086-.049.504c-.097.992-.16 1.675-.139 2.166.022.491.126.627.208.689.073.056.209.117.65-.01.449-.128 1.046-.4 1.92-.803l.444-.204.08-.037c.406-.189.758-.351 1.142-.351s.735.162 1.14.35l.082.037.443.205c.874.402 1.471.675 1.92.803.441.127.577.066.65.01.082-.063.186-.199.208-.69s-.043-1.173-.14-2.165l-.048-.504-.008-.087c-.046-.467-.084-.852.03-1.219.115-.369.365-.66.665-1.01l.056-.065.322-.377c.636-.744 1.071-1.255 1.329-1.664.254-.404.253-.58.216-.698-.034-.109-.123-.247-.548-.413-.435-.172-1.07-.317-2.005-.529l-.473-.107-.085-.02c-.436-.097-.811-.181-1.119-.415-.305-.23-.493-.571-.717-.974l-.043-.078-.244-.437c-.48-.862-.811-1.453-1.105-1.835-.293-.383-.442-.416-.526-.416s-.235.033-.527.416m-.886-.68C8.942 2.39 9.38 2 10.001 2c.62 0 1.058.39 1.413.853.348.455.718 1.118 1.17 1.929l.267.478c.291.524.367.636.46.707.09.068.207.107.774.235l.521.118c.876.198 1.597.36 2.121.568.545.215 1.022.531 1.206 1.121.181.585-.023 1.122-.338 1.623-.307.487-.796 1.06-1.395 1.76l-.353.413c-.385.45-.465.56-.503.68-.038.125-.035.269.024.868l.053.549c.09.934.164 1.697.138 2.277-.026.592-.16 1.159-.648 1.53-.497.376-1.075.334-1.633.173-.541-.154-1.215-.465-2.034-.842l-.488-.225c-.534-.245-.648-.285-.755-.285-.108 0-.221.04-.756.285l-.487.225c-.82.377-1.494.688-2.035.842-.558.16-1.136.203-1.633-.174-.488-.37-.622-.937-.648-1.528-.026-.58.048-1.344.139-2.277l.053-.55c.058-.6.061-.743.023-.867-.038-.122-.118-.231-.503-.681l-.353-.413c-.598-.7-1.088-1.273-1.394-1.76-.316-.501-.52-1.038-.339-1.623.184-.59.661-.906 1.206-1.121.524-.207 1.246-.37 2.12-.568l.048-.01.473-.108c.569-.128.685-.167.775-.235.093-.071.169-.183.461-.707l.266-.478c.452-.811.822-1.474 1.17-1.93"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;
