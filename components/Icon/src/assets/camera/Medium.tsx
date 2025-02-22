import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            d="M3 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 1 19V7q0-.824.587-1.412A1.93 1.93 0 0 1 3 5h3.15L8 3h6v2H8.875L7.05 7H3v12h16v-9h2v9q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zM19 7V5h-2V3h2V1h2v2h2v2h-2v2zm-8 10.5q1.875 0 3.188-1.313Q15.5 14.875 15.5 13t-1.313-3.188Q12.875 8.501 11 8.5q-1.875 0-3.188 1.313Q6.5 11.125 6.5 13t1.313 3.188C9.126 17.501 9.75 17.5 11 17.5m0-2q-1.05 0-1.775-.725T8.5 13c0-1.05.242-1.292.725-1.775Q9.95 10.5 11 10.5c1.05 0 1.292.242 1.775.725q.725.725.725 1.775c0 1.05-.242 1.292-.725 1.775Q12.05 15.5 11 15.5"
        />
    </svg>
);
export default SvgMedium;
